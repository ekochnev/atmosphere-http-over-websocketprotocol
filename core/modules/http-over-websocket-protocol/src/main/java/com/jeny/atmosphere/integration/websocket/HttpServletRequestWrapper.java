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

import org.apache.http.HttpRequest;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.Principal;
import java.util.Collection;
import java.util.Enumeration;
import java.util.Locale;
import java.util.Map;

/**
 * Used HttpServletRequestWrapper to propagate passed http request parameters, headers, cookies and etc.
 * If some parameters (headers, cookies and etc) takes from initial request if they are missing.
 */
public class HttpServletRequestWrapper implements HttpServletRequest {

    private HttpServletRequest initHttpServletRequest;
    private HttpRequest httpRequestOverWebSocket;

    public HttpServletRequestWrapper(HttpServletRequest initHttpServletRequest, HttpRequest httpRequestOverWebSocket) {
        this.initHttpServletRequest = initHttpServletRequest;
        this.httpRequestOverWebSocket = httpRequestOverWebSocket;

    }

    @Override
    public String getAuthType() {
        return httpRequestOverWebSocket.getFirstHeader("") != null ?
                httpRequestOverWebSocket.getFirstHeader("").getValue() :
                initHttpServletRequest.getAuthType();
    }

    @Override
    public Cookie[] getCookies() {
        return new Cookie[0];  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public long getDateHeader(String s) {
        return initHttpServletRequest.getDateHeader(s);
    }

    @Override
    public String getHeader(String s) {
        return httpRequestOverWebSocket.getFirstHeader(s) != null ?
                httpRequestOverWebSocket.getFirstHeader(s).getValue() :
                initHttpServletRequest.getHeader(s);
    }

    @Override
    public Enumeration<String> getHeaders(String s) {
        return initHttpServletRequest.getHeaders(s);
    }

    @Override
    public Enumeration<String> getHeaderNames() {
        return initHttpServletRequest.getHeaderNames();
    }

    @Override
    public int getIntHeader(String s) {
        return httpRequestOverWebSocket.getFirstHeader(s) != null ?
                Integer.valueOf(httpRequestOverWebSocket.getFirstHeader(s).getValue()) :
                initHttpServletRequest.getIntHeader(s);
    }

    @Override
    public String getMethod() {
        return httpRequestOverWebSocket.getRequestLine().getMethod() != null ?
                httpRequestOverWebSocket.getRequestLine().getMethod() :
                initHttpServletRequest.getMethod();
    }

    @Override
    public String getPathInfo() {
        return null;
    }

    @Override
    public String getPathTranslated() {
        return null;
    }

    @Override
    public String getContextPath() {
        return null;
    }

    @Override
    public String getQueryString() {
        return null;
    }

    @Override
    public String getRemoteUser() {
        return null;
    }

    @Override
    public boolean isUserInRole(String s) {
        return false;
    }

    @Override
    public Principal getUserPrincipal() {
        return null;
    }

    @Override
    public String getRequestedSessionId() {
        return initHttpServletRequest.getRequestedSessionId();
    }

    @Override
    public String getRequestURI() {
        return initHttpServletRequest.getRequestURI();
    }

    @Override
    public StringBuffer getRequestURL() {
        return initHttpServletRequest.getRequestURL();
    }

    @Override
    public String getServletPath() {
        return initHttpServletRequest.getServletPath();
    }

    @Override
    public HttpSession getSession(boolean b) {
        return initHttpServletRequest.getSession(b);
    }

    @Override
    public HttpSession getSession() {
        return initHttpServletRequest.getSession();
    }

    @Override
    public boolean isRequestedSessionIdValid() {
        return initHttpServletRequest.isRequestedSessionIdValid();
    }

    @Override
    public boolean isRequestedSessionIdFromCookie() {
        return initHttpServletRequest.isRequestedSessionIdFromCookie();
    }

    @Override
    public boolean isRequestedSessionIdFromURL() {
        return initHttpServletRequest.isRequestedSessionIdFromURL();
    }

    @Override
    public boolean isRequestedSessionIdFromUrl() {
        return initHttpServletRequest.isRequestedSessionIdFromUrl();
    }

    @Override
    public boolean authenticate(HttpServletResponse httpServletResponse) throws IOException, ServletException {
        return initHttpServletRequest.authenticate(httpServletResponse);
    }

    @Override
    public void login(String s, String s1) throws ServletException {
        initHttpServletRequest.login(s, s1);
    }

    @Override
    public void logout() throws ServletException {
        initHttpServletRequest.logout();
    }

    @Override
    public Collection<Part> getParts() throws IOException, ServletException {
        return initHttpServletRequest.getParts();
    }

    @Override
    public Part getPart(String s) throws IOException, ServletException {
        return initHttpServletRequest.getPart(s);
    }

    @Override
    public Object getAttribute(String s) {
        return initHttpServletRequest.getAttribute(s);
    }

    @Override
    public Enumeration<String> getAttributeNames() {
        return initHttpServletRequest.getAttributeNames();
    }

    @Override
    public String getCharacterEncoding() {
        return initHttpServletRequest.getCharacterEncoding();
    }

    @Override
    public void setCharacterEncoding(String s) throws UnsupportedEncodingException {
        initHttpServletRequest.setCharacterEncoding(s);
    }

    @Override
    public int getContentLength() {
        return initHttpServletRequest.getContentLength();
    }

    @Override
    public String getContentType() {
        return initHttpServletRequest.getContentType();
    }

    @Override
    public ServletInputStream getInputStream() throws IOException {
        return initHttpServletRequest.getInputStream();
    }

    @Override
    public String getParameter(String s) {
        return initHttpServletRequest.getParameter(s);
    }

    @Override
    public Enumeration<String> getParameterNames() {
        return initHttpServletRequest.getParameterNames();
    }

    @Override
    public String[] getParameterValues(String s) {
        return new String[0];  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Map<String, String[]> getParameterMap() {
        return initHttpServletRequest.getParameterMap();
    }

    @Override
    public String getProtocol() {
        return httpRequestOverWebSocket.getProtocolVersion().getProtocol() != null ?
                httpRequestOverWebSocket.getProtocolVersion().getProtocol() :
                initHttpServletRequest.getProtocol();
    }

    @Override
    public String getScheme() {
        return initHttpServletRequest.getScheme();
    }

    @Override
    public String getServerName() {
        return initHttpServletRequest.getServerName();
    }

    @Override
    public int getServerPort() {
        return initHttpServletRequest.getServerPort();
    }

    @Override
    public BufferedReader getReader() throws IOException {
        return initHttpServletRequest.getReader();
    }

    @Override
    public String getRemoteAddr() {
        return initHttpServletRequest.getRemoteAddr();
    }

    @Override
    public String getRemoteHost() {
        return initHttpServletRequest.getRemoteHost();
    }

    @Override
    public void setAttribute(String s, Object o) {
        initHttpServletRequest.setAttribute(s, o);
    }

    @Override
    public void removeAttribute(String s) {
        initHttpServletRequest.removeAttribute(s);
    }

    @Override
    public Locale getLocale() {
        return initHttpServletRequest.getLocale();
    }

    @Override
    public Enumeration<Locale> getLocales() {
        return initHttpServletRequest.getLocales();
    }

    @Override
    public boolean isSecure() {
        return initHttpServletRequest.isSecure();
    }

    @Override
    public RequestDispatcher getRequestDispatcher(String s) {
        return initHttpServletRequest.getRequestDispatcher(s);
    }

    @Override
    public String getRealPath(String s) {
        return initHttpServletRequest.getRealPath(s);
    }

    @Override
    public int getRemotePort() {
        return initHttpServletRequest.getRemotePort();
    }

    @Override
    public String getLocalName() {
        return initHttpServletRequest.getLocalName();
    }

    @Override
    public String getLocalAddr() {
        return initHttpServletRequest.getLocalAddr();
    }

    @Override
    public int getLocalPort() {
        return initHttpServletRequest.getLocalPort();
    }

    @Override
    public ServletContext getServletContext() {
        return initHttpServletRequest.getServletContext();
    }

    @Override
    public AsyncContext startAsync() throws IllegalStateException {
        return initHttpServletRequest.startAsync();
    }

    @Override
    public AsyncContext startAsync(ServletRequest servletRequest, ServletResponse servletResponse) throws IllegalStateException {
        return initHttpServletRequest.startAsync(servletRequest, servletResponse);
    }

    @Override
    public boolean isAsyncStarted() {
        return initHttpServletRequest.isAsyncStarted();
    }

    @Override
    public boolean isAsyncSupported() {
        return initHttpServletRequest.isAsyncSupported();
    }

    @Override
    public AsyncContext getAsyncContext() {
        return initHttpServletRequest.getAsyncContext();
    }

    @Override
    public DispatcherType getDispatcherType() {
        return initHttpServletRequest.getDispatcherType();
    }
}
