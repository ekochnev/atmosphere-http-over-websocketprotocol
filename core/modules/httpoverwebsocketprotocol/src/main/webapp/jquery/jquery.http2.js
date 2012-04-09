/*
 * jQuery Http Plugin
 *
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
jQuery.http = function() {





//    /** RFC 2616 (HTTP/1.1) Section 14.1 */
//    HttpHeaders.prototype.ACCEPT = "Accept";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.2 */
//    HttpHeaders.prototype.ACCEPT_CHARSET = 'Accept-Charset';
//
//    /** RFC 2616 (HTTP/1.1) Section 14.3 */
//    HttpHeaders.prototype.ACCEPT_ENCODING = "Accept-Encoding";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.4 */
//    HttpHeaders.prototype.ACCEPT_LANGUAGE = "Accept-Language";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.5 */
//    HttpHeaders.prototype.ACCEPT_RANGES = "Accept-Ranges";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.6 */
//    HttpHeaders.prototype.AGE = "Age";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.1, RFC 2616 (HTTP/1.1) Section 14.7 */
//    HttpHeaders.prototype.ALLOW = "Allow";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.2, RFC 2616 (HTTP/1.1) Section 14.8 */
//    HttpHeaders.prototype.AUTHORIZATION = "Authorization";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.9 */
//    HttpHeaders.prototype.CACHE_CONTROL = "Cache-Control";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.10 */
//    HttpHeaders.prototype.CONNECTION = "Connection";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.3, RFC 2616 (HTTP/1.1) Section 14.11 */
//    HttpHeaders.prototype.CONTENT_ENCODING = "Content-Encoding";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.12 */
//    HttpHeaders.prototype.CONTENT_LANGUAGE = "Content-Language";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.4, RFC 2616 (HTTP/1.1) Section 14.13 */
//    HttpHeaders.prototype.CONTENT_LENGTH = "Content-Length";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.14 */
//    HttpHeaders.prototype.CONTENT_LOCATION = "Content-Location";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.15 */
//    HttpHeaders.prototype.CONTENT_MD5 = "Content-MD5";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.16 */
//    HttpHeaders.prototype.CONTENT_RANGE = "Content-Range";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.5, RFC 2616 (HTTP/1.1) Section 14.17 */
//    HttpHeaders.CONTENT_TYPE = "Content-Type";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.6, RFC 2616 (HTTP/1.1) Section 14.18 */
//    HttpHeaders.prototype.DATE = "Date";
//
//    /** RFC 2518 (WevDAV) Section 9.1 */
//    HttpHeaders.prototype.DAV = "Dav";
//
//    /** RFC 2518 (WevDAV) Section 9.2 */
//    HttpHeaders.prototype.DEPTH = "Depth";
//
//    /** RFC 2518 (WevDAV) Section 9.3 */
//    HttpHeaders.prototype.DESTINATION = "Destination";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.19 */
//    HttpHeaders.prototype.ETAG = "ETag";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.20 */
//    HttpHeaders.prototype.EXPECT = "Expect";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.7, RFC 2616 (HTTP/1.1) Section 14.21 */
//    HttpHeaders.prototype.EXPIRES = "Expires";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.8, RFC 2616 (HTTP/1.1) Section 14.22 */
//    HttpHeaders.prototype.FROM = "From";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.23 */
//    HttpHeaders.prototype.HOST = "Host";
//
//    /** RFC 2518 (WevDAV) Section 9.4 */
//    HttpHeaders.prototype.IF = "If";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.24 */
//    HttpHeaders.prototype.IF_MATCH = "If-Match";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.9, RFC 2616 (HTTP/1.1) Section 14.25 */
//    HttpHeaders.prototype.IF_MODIFIED_SINCE = "If-Modified-Since";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.26 */
//    HttpHeaders.prototype.IF_NONE_MATCH = "If-None-Match";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.27 */
//    HttpHeaders.prototype.IF_RANGE = "If-Range";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.28 */
//    HttpHeaders.prototype.IF_UNMODIFIED_SINCE = "If-Unmodified-Since";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.10, RFC 2616 (HTTP/1.1) Section 14.29 */
//    HttpHeaders.prototype.LAST_MODIFIED = "Last-Modified";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.11, RFC 2616 (HTTP/1.1) Section 14.30 */
//    HttpHeaders.prototype.LOCATION = "Location";
//
//    /** RFC 2518 (WevDAV) Section 9.5 */
//    HttpHeaders.prototype.LOCK_TOKEN = "Lock-Token";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.31 */
//    HttpHeaders.prototype.MAX_FORWARDS = "Max-Forwards";
//
//    /** RFC 2518 (WevDAV) Section 9.6 */
//    HttpHeaders.prototype.OVERWRITE = "Overwrite";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.12, RFC 2616 (HTTP/1.1) Section 14.32 */
//    HttpHeaders.prototype.PRAGMA = "Pragma";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.33 */
//    HttpHeaders.prototype.PROXY_AUTHENTICATE = "Proxy-Authenticate";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.34 */
//    HttpHeaders.prototype.PROXY_AUTHORIZATION = "Proxy-Authorization";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.35 */
//    HttpHeaders.prototype.RANGE = "Range";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.13, RFC 2616 (HTTP/1.1) Section 14.36 */
//    HttpHeaders.prototype.REFERER = "Referer";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.37 */
//    HttpHeaders.prototype.RETRY_AFTER = "Retry-After";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.14, RFC 2616 (HTTP/1.1) Section 14.38 */
//    HttpHeaders.prototype.SERVER = "Server";
//
//    /** RFC 2518 (WevDAV) Section 9.7 */
//    HttpHeaders.prototype.STATUS_URI = "Status-URI";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.39 */
//    HttpHeaders.prototype.TE = "TE";
//
//    /** RFC 2518 (WevDAV) Section 9.8 */
//    HttpHeaders.prototype.TIMEOUT = "Timeout";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.40 */
//    HttpHeaders.prototype.TRAILER = "Trailer";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.41 */
//    HttpHeaders.prototype.TRANSFER_ENCODING = "Transfer-Encoding";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.42 */
//    HttpHeaders.prototype.UPGRADE = "Upgrade";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.15, RFC 2616 (HTTP/1.1) Section 14.43 */
//    HttpHeaders.prototype.USER_AGENT = "User-Agent";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.44 */
//    HttpHeaders.prototype.VARY = "Vary";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.45 */
//    HttpHeaders.prototype.VIA = "Via";
//
//    /** RFC 2616 (HTTP/1.1) Section 14.46 */
//    HttpHeaders.prototype.WARNING = "Warning";
//
//    /** RFC 1945 (HTTP/1.0) Section 10.16, RFC 2616 (HTTP/1.1) Section 14.47 */
//    HttpHeaders.prototype.WWW_AUTHENTICATE = "WWW-Authenticate";

//    function HttpHeaders() {
//        //const CONTENT_TYPE = "Content-Type";
//
//        /** RFC 1945 (HTTP/1.0) Section 10.5, RFC 2616 (HTTP/1.1) Section 14.17 */
//
////            CONTENT_TYPE = function() {
////                return "Content-Type";
////            }
//
//    };
//
//    HttpHeaders.CONTENT_TYPE = "Content-Type";

    function PrototypeValue() {

        return {

            HttpHeaders : function() {

                //const CONTENT_TYPE = "Content-Type";

                /** RFC 1945 (HTTP/1.0) Section 10.5, RFC 2616 (HTTP/1.1) Section 14.17 */

//                CONTENT_TYPE = function() {
//                    return "Content-Type";
//                }

                jQuery.http.HttpHeaders.prototype.CONTENT_TYPE = function() {
                    return "Content-Type";
                }

                //jQuery.http.HttpHeaders.prototype.CONTENT_TYPE = "Content-Type";

            },

            version : 0.1,

            url : "",
            host : "",
            method: 'POST',
            headers : {},
            attributes : {},
            parameters : {},
            cookies : {},
            body : null,

            GET: function() {
                jQuery.http.method = 'GET';
                return this;
            },

            POST: function() {
                jQuery.http.method = 'POST';
                return this;
            },

            Url: function(url) {
                jQuery.http.url = url;
                return this;
            },

            Host: function(host) {
                jQuery.http.host = host;
                return this;
            },

            addHeader: function(name, value) {

                jQuery.http.headers[name.toString()] = value;
                //alert(jQuery.http.headers);
                return this;
            },

            addHeaders: function(headers) {

                jQuery.each(headers, function(index, value) {
                    jQuery.http.headers[index] = value;
                });
                return this;
            },

            addParameter: function(name, value) {

                jQuery.http.parameters[name] = value;
                return this;
            },

            addParameters: function(parameters) {

                jQuery.each(parameters, function(index, value) {
                    jQuery.http.parameters[index] = value;
                });
                return this;
            },

            addCookie: function(name, value) {

                jQuery.http.cookies[name] = value;
                return this;
            },

            addCookies: function(cookies) {

                //jQuery.http.cookies.push(cookies);

                jQuery.each(cookies, function(index, value) {
                    jQuery.http.cookies[index] = value;
                });
                return this;
            },

            addBody: function(body) {
                jQuery.http.body = body;
                return this;
            },

            setAccept: function(value) {
                jQuery.http.headers['Accept'] = value;
                return this;
            },

            setAcceptCharset: function(value) {
                jQuery.http.headers[HttpHeaders.ACCEPT_CHARSET] = value;
                return this;
            },

            setAcceptEncoding: function(value) {
                jQuery.http.headers[HttpHeaders.ACCEPT_ENCODING] = value;
                return this;
            },

            setContentType: function(value) {
                jQuery.http.headers[jQuery.http.HttpHeaders.CONTENT_TYPE()] = value;
                return this;
            },

            byDefault: function() {
                jQuery.http.addHeaders({
                    //HttpHeaders.ACCEPT_CHARSET : 'utf-8', // why doesn't it work?
                    'Accept-Charset' : 'utf-8',
                    'Accept-Encoding' : 'identity',
                    'Cache-Control' : 'no-cache',
                    'Content-Type' : 'text/plain'
                    //'User-Agent' : 'NA'
                });
                return this;
            },

            byContext: function() {

                // take possible headers from page
                jQuery.http.addHeaders({
                    //HttpHeaders.ACCEPT_CHARSET : 'utf-8',
                    'Accept-Charset' : document.charset,
                    'Accept-Encoding' : document.encoding,
                    'Cache-Control' : 'no-cache',
                    'Content-Type' : document.contentType,
                    'User-Agent' : navigator.userAgent

                });

                // todo add page cookies

                return this;
            },

            buildRAW : function() {

                var rawHttpRequest = "";
                var nbsp = " ";
                var LF = "\n";
                var CR = "\r";
                var CRLF = "\r\n";
                var EL = " "; // empty line

                rawHttpRequest = rawHttpRequest + jQuery.http.method + nbsp
                    + jQuery.http.url + nbsp
                    + "HTTP/1.1" + LF
                    + "Host:" + nbsp + jQuery.http.host + LF;

                jQuery.each(jQuery.http.headers, function(index, value) {
                    rawHttpRequest = rawHttpRequest + index + ":" + nbsp + value + LF;
                });

                jQuery.each(jQuery.http.attributes, function(index, value) {
                    rawHttpRequest = rawHttpRequest + index + ":" + nbsp + value + LF;
                });

                jQuery.each(jQuery.http.parameters, function(index, value) {
                    rawHttpRequest = rawHttpRequest + index + ":" + nbsp + value + LF;
                });

                jQuery.each(jQuery.http.cookies, function(index, value) {
                    rawHttpRequest = rawHttpRequest + index + ":" + nbsp + value + LF;
                });
                rawHttpRequest = rawHttpRequest + CRLF;

                if (jQuery.http.body != null) {
                    rawHttpRequest = rawHttpRequest + EL
                        + jQuery.http.body + EL;
                }
                rawHttpRequest = rawHttpRequest + CRLF;

                return rawHttpRequest;
            },

            buildJSON : function() {
                return jQuery.stringifyJSON(this);
            }
        }
    };

    return new PrototypeValue();

}();