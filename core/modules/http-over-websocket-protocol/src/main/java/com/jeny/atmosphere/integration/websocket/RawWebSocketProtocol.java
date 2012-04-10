/*
* Copyright 2012 Evgeny Kochnev
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not
* use this file except in compliance with the License. You may obtain a copy of
* the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/

package com.jeny.atmosphere.integration.websocket;

import org.apache.http.HttpException;
import org.apache.http.HttpRequest;
import org.apache.http.HttpRequestFactory;
import org.apache.http.impl.DefaultHttpRequestFactory;
import org.apache.http.impl.nio.codecs.DefaultHttpRequestParser;
import org.apache.http.impl.nio.reactor.SessionInputBufferImpl;
import org.apache.http.nio.NHttpMessageParser;
import org.apache.http.nio.reactor.SessionInputBuffer;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpParams;
import org.atmosphere.cpr.*;
import org.atmosphere.websocket.WebSocket;
import org.atmosphere.websocket.WebSocketProcessor;
import org.atmosphere.websocket.WebSocketProtocol;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.core.UriBuilder;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * This is simple implementation of WebSocketProtocol.
 * The protocol is simple http tunneling over web socket using RAW approach.
 * (RAW means that http request passed as string which formed by HTTP standard)
 *
 * todo under developing and testing still
 * @author Evgeny Kochnev
 */
public class RawWebSocketProtocol implements WebSocketProtocol, Serializable {

    private static final Logger logger = LoggerFactory.getLogger(RawWebSocketProtocol.class);

    private String contentType;
    private String methodType;
    private String delimiter;
    private boolean destroyable;

    /**
     * {@inheritDoc}
     */
    @Override
    public void configure(AtmosphereConfig config) {
        String contentType = config.getInitParameter(ApplicationConfig.WEBSOCKET_CONTENT_TYPE);
        if (contentType == null) {
            contentType = "text/html";
        }
        this.contentType = contentType;

        String methodType = config.getInitParameter(ApplicationConfig.WEBSOCKET_METHOD);
        if (methodType == null) {
            methodType = "POST";
        }
        this.methodType = methodType;

        String delimiter = config.getInitParameter(ApplicationConfig.WEBSOCKET_PATH_DELIMITER);
        if (delimiter == null) {
            delimiter = "";
        }
        this.delimiter = delimiter;

        String s = config.getInitParameter(ApplicationConfig.RECYCLE_ATMOSPHERE_REQUEST_RESPONSE);
        if (s != null && Boolean.valueOf(s)) {
            destroyable = true;
        } else {
            destroyable = false;
        }
    }

    /**
     * Since protocol is simple http tunneling over web socket using RAW approach it parses web socket body as string which represents http request by HTTP standard.
     * It takes all parameters from passed http request and takes some parameters (like Cookies, Content Type and etc) from initial http request if
     * they are missing in the passed http request. On the client side is supposed that it will take passed parameters and missing parameters from
     * browser context during form http request (like Accept-Charset, Accept-Encoding, User-Agent and etc).
     * {@inheritDoc}
     */
    @Override
    public List<AtmosphereRequest> onMessage(WebSocket webSocket, String d) {

        HttpRequest request = null;
        try {
            HttpParams params = new BasicHttpParams();
            SessionInputBuffer inbuf = new SessionInputBufferImpl(1024, 128, params);
            HttpRequestFactory requestFactory = new DefaultHttpRequestFactory();
            NHttpMessageParser<HttpRequest> requestParser = new DefaultHttpRequestParser(inbuf, null, requestFactory, params);
            requestParser.fillBuffer(newChannel(d, "UTF-8"));
            request = requestParser.parse();

        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (HttpException e) {
            throw new RuntimeException(e);
        }

        AtmosphereResourceImpl resource = (AtmosphereResourceImpl) webSocket.resource();
        if (resource == null) {
            logger.error("Invalid state. No AtmosphereResource has been suspended");
            return null;
        }
        AtmosphereRequest initialRequest = resource.getRequest();

        Map<String,Object> attributesMap = new HashMap<String, Object>();
        attributesMap.put(FrameworkConfig.WEBSOCKET_SUBPROTOCOL, FrameworkConfig.SIMPLE_HTTP_OVER_WEBSOCKET);

        // Propagate the original attribute to WebSocket message.
        attributesMap.putAll(initialRequest.attributes());

        // Determine value of path info, request URI
        String pathInfo = request.getRequestLine().getUri();
        UriBuilder pathInfoUriBuilder = UriBuilder.fromUri(pathInfo);
        URI pathInfoUri = pathInfoUriBuilder.build();
        String requestURI = pathInfoUri.getPath();

        // take the Method Type of passed http request
        methodType = request.getRequestLine().getMethod();

        // take the Content Type of passed http request
        contentType = request.getFirstHeader(HttpHeaders.CONTENT_TYPE) != null ?
                request.getFirstHeader(HttpHeaders.CONTENT_TYPE).getValue() :
                initialRequest.getContentType();

        // take the body of passed http request
        String body = null; // TODO how we can take it?

        // We need to create a new AtmosphereRequest as WebSocket message may arrive concurrently on the same connection.
        AtmosphereRequest atmosphereRequest = new AtmosphereRequest.Builder()
                // use HttpServletRequestWrapper to propagate passed http request parameters, headers, cookies and etc.
                // if some parameters (headers, cookies and etc) takes from initial request if they are missing.
                .request(new HttpServletRequestWrapper(initialRequest, request))

                .method(methodType)
                .contentType(contentType)
                .requestURI(requestURI)
                .pathInfo(pathInfo)

                .attributes(attributesMap)

                .body(d) // TODO Unfortunately org.apache.http doesn't allow to take a body need to find workaround
                .destroyable(destroyable)
                .build();

        List<AtmosphereRequest> list = new ArrayList<AtmosphereRequest>();
        list.add(atmosphereRequest);

        return list;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<AtmosphereRequest> onMessage(WebSocket webSocket, byte[] d, final int offset, final int length) {
        return onMessage(webSocket, new String(d, offset, length));
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void onOpen(WebSocket webSocket) {
        return;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void onClose(WebSocket webSocket) {
        return;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void onError(WebSocket webSocket, WebSocketProcessor.WebSocketException t) {
        logger.warn(t.getMessage() + " Status {} Message {}", t.response().getStatus(), t.response().getStatusMessage());
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean inspectResponse() {
        return false;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String handleResponse(AtmosphereResponse res, String message) {
        // Should never be called
        return message;
    }

    @Override
    public byte[] handleResponse(AtmosphereResponse res, byte[] message, int offset, int length) {
        // Should never be called
        return message;
    }

    private static ReadableByteChannel newChannel(final String s, final String charset)
            throws UnsupportedEncodingException {
        return Channels.newChannel(new ByteArrayInputStream(s.getBytes(charset)));
    }
}
