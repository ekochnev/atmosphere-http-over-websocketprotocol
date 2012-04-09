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
package org.atmosphere.tictactoe42a9x;

import com.google.gson.Gson;
import org.atmosphere.cpr.*;
import org.atmosphere.websocket.WebSocket;
import org.atmosphere.websocket.WebSocketProcessor;
import org.atmosphere.websocket.WebSocketProtocol;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.core.UriBuilder;
import java.io.ByteArrayInputStream;
import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JsonWebSocketProtocol implements WebSocketProtocol, Serializable {

    private static final Logger logger = LoggerFactory.getLogger(JsonWebSocketProtocol.class);

    private String contentType;
    private String methodType;
    private String delimiter = "@@";
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
            delimiter = "@@";
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
     * {@inheritDoc}
     */
    @Override
    public List<AtmosphereRequest> onMessage(WebSocket webSocket, String d) {

        // ######################

        Gson gson = new Gson();
        CellJsonHttpServletRequest jsonHttpServletRequest = gson.fromJson(d, CellJsonHttpServletRequest.class);
        Cell body = jsonHttpServletRequest.getBody();

        AtmosphereResourceImpl resource = (AtmosphereResourceImpl) webSocket.resource();
        if (resource == null) {
            logger.error("Invalid state. No AtmosphereResource has been suspended");
            return null;
        }
        AtmosphereRequest initialRequest = resource.getRequest();

        // ######################
        Map<String,Object> attributesMap = new HashMap<String, Object>();
        attributesMap.put(FrameworkConfig.WEBSOCKET_SUBPROTOCOL, FrameworkConfig.SIMPLE_HTTP_OVER_WEBSOCKET);

        // Propagate the original attribute to WebSocket message.
        attributesMap.putAll(initialRequest.attributes());
        attributesMap.putAll(jsonHttpServletRequest.getAttributes());

        Map<String, String> headersMap  = new HashMap<String, String>();
        headersMap.putAll(jsonHttpServletRequest.getHeaders());

        Map<String, String[]> queryStrings = new HashMap<String, String[]>();
        for (String key : jsonHttpServletRequest.getParameters().keySet()) {
            queryStrings.put(key, new String[]{jsonHttpServletRequest.getParameters().get(key)});
        }

        // ######################
        String pathInfo = jsonHttpServletRequest.getUrl();
        UriBuilder pathInfoUriBuilder = UriBuilder.fromUri(pathInfo);
        URI pathInfoUri = pathInfoUriBuilder.build();
        String requestURI = pathInfoUri.getPath();

        methodType = jsonHttpServletRequest.getMethod();
        contentType = jsonHttpServletRequest.getHeader(HttpHeaders.CONTENT_TYPE) != null ?
                jsonHttpServletRequest.getHeader(HttpHeaders.CONTENT_TYPE) :
                initialRequest.getContentType();

        // ######################
        // We need to create a new AtmosphereRequest as WebSocket message may arrive concurrently on the same connection.
        AtmosphereRequest atmosphereRequest = new AtmosphereRequest.Builder()
                .request(initialRequest)

                .method(methodType)
                .contentType(contentType)
                .requestURI(requestURI)
                .pathInfo(pathInfo)

                .attributes(attributesMap)
                .headers(headersMap)
                .queryStrings(queryStrings)

                .body(gson.toJson(body))
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
