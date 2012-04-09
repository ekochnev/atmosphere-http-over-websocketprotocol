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

    function HttpHeaders() {
    }

    /** RFC 2616 (HTTP/1.1) Section 14.1 */
    HttpHeaders.ACCEPT = "Accept";

    /** RFC 2616 (HTTP/1.1) Section 14.2 */
    HttpHeaders.ACCEPT_CHARSET = 'Accept-Charset';

    /** RFC 2616 (HTTP/1.1) Section 14.3 */
    HttpHeaders.ACCEPT_ENCODING = "Accept-Encoding";

    /** RFC 2616 (HTTP/1.1) Section 14.4 */
    HttpHeaders.ACCEPT_LANGUAGE = "Accept-Language";

    /** RFC 2616 (HTTP/1.1) Section 14.5 */
    HttpHeaders.ACCEPT_RANGES = "Accept-Ranges";

    /** RFC 2616 (HTTP/1.1) Section 14.6 */
    HttpHeaders.AGE = "Age";

    /** RFC 1945 (HTTP/1.0) Section 10.1, RFC 2616 (HTTP/1.1) Section 14.7 */
    HttpHeaders.ALLOW = "Allow";

    /** RFC 1945 (HTTP/1.0) Section 10.2, RFC 2616 (HTTP/1.1) Section 14.8 */
    HttpHeaders.AUTHORIZATION = "Authorization";

    /** RFC 2616 (HTTP/1.1) Section 14.9 */
    HttpHeaders.CACHE_CONTROL = "Cache-Control";

    /** RFC 2616 (HTTP/1.1) Section 14.10 */
    HttpHeaders.CONNECTION = "Connection";

    /** RFC 1945 (HTTP/1.0) Section 10.3, RFC 2616 (HTTP/1.1) Section 14.11 */
    HttpHeaders.CONTENT_ENCODING = "Content-Encoding";

    /** RFC 2616 (HTTP/1.1) Section 14.12 */
    HttpHeaders.CONTENT_LANGUAGE = "Content-Language";

    /** RFC 1945 (HTTP/1.0) Section 10.4, RFC 2616 (HTTP/1.1) Section 14.13 */
    HttpHeaders.CONTENT_LENGTH = "Content-Length";

    /** RFC 2616 (HTTP/1.1) Section 14.14 */
    HttpHeaders.CONTENT_LOCATION = "Content-Location";

    /** RFC 2616 (HTTP/1.1) Section 14.15 */
    HttpHeaders.CONTENT_MD5 = "Content-MD5";

    /** RFC 2616 (HTTP/1.1) Section 14.16 */
    HttpHeaders.CONTENT_RANGE = "Content-Range";

    /** RFC 1945 (HTTP/1.0) Section 10.5, RFC 2616 (HTTP/1.1) Section 14.17 */
    HttpHeaders.CONTENT_TYPE = "Content-Type";

    /** RFC 1945 (HTTP/1.0) Section 10.6, RFC 2616 (HTTP/1.1) Section 14.18 */
    HttpHeaders.DATE = "Date";

    /** RFC 2518 (WevDAV) Section 9.1 */
    HttpHeaders.DAV = "Dav";

    /** RFC 2518 (WevDAV) Section 9.2 */
    HttpHeaders.DEPTH = "Depth";

    /** RFC 2518 (WevDAV) Section 9.3 */
    HttpHeaders.DESTINATION = "Destination";

    /** RFC 2616 (HTTP/1.1) Section 14.19 */
    HttpHeaders.ETAG = "ETag";

    /** RFC 2616 (HTTP/1.1) Section 14.20 */
    HttpHeaders.EXPECT = "Expect";

    /** RFC 1945 (HTTP/1.0) Section 10.7, RFC 2616 (HTTP/1.1) Section 14.21 */
    HttpHeaders.EXPIRES = "Expires";

    /** RFC 1945 (HTTP/1.0) Section 10.8, RFC 2616 (HTTP/1.1) Section 14.22 */
    HttpHeaders.FROM = "From";

    /** RFC 2616 (HTTP/1.1) Section 14.23 */
    HttpHeaders.HOST = "Host";

    /** RFC 2518 (WevDAV) Section 9.4 */
    HttpHeaders.IF = "If";

    /** RFC 2616 (HTTP/1.1) Section 14.24 */
    HttpHeaders.IF_MATCH = "If-Match";

    /** RFC 1945 (HTTP/1.0) Section 10.9, RFC 2616 (HTTP/1.1) Section 14.25 */
    HttpHeaders.IF_MODIFIED_SINCE = "If-Modified-Since";

    /** RFC 2616 (HTTP/1.1) Section 14.26 */
    HttpHeaders.IF_NONE_MATCH = "If-None-Match";

    /** RFC 2616 (HTTP/1.1) Section 14.27 */
    HttpHeaders.IF_RANGE = "If-Range";

    /** RFC 2616 (HTTP/1.1) Section 14.28 */
    HttpHeaders.IF_UNMODIFIED_SINCE = "If-Unmodified-Since";

    /** RFC 1945 (HTTP/1.0) Section 10.10, RFC 2616 (HTTP/1.1) Section 14.29 */
    HttpHeaders.LAST_MODIFIED = "Last-Modified";

    /** RFC 1945 (HTTP/1.0) Section 10.11, RFC 2616 (HTTP/1.1) Section 14.30 */
    HttpHeaders.LOCATION = "Location";

    /** RFC 2518 (WevDAV) Section 9.5 */
    HttpHeaders.LOCK_TOKEN = "Lock-Token";

    /** RFC 2616 (HTTP/1.1) Section 14.31 */
    HttpHeaders.MAX_FORWARDS = "Max-Forwards";

    /** RFC 2518 (WevDAV) Section 9.6 */
    HttpHeaders.OVERWRITE = "Overwrite";

    /** RFC 1945 (HTTP/1.0) Section 10.12, RFC 2616 (HTTP/1.1) Section 14.32 */
    HttpHeaders.PRAGMA = "Pragma";

    /** RFC 2616 (HTTP/1.1) Section 14.33 */
    HttpHeaders.PROXY_AUTHENTICATE = "Proxy-Authenticate";

    /** RFC 2616 (HTTP/1.1) Section 14.34 */
    HttpHeaders.PROXY_AUTHORIZATION = "Proxy-Authorization";

    /** RFC 2616 (HTTP/1.1) Section 14.35 */
    HttpHeaders.RANGE = "Range";

    /** RFC 1945 (HTTP/1.0) Section 10.13, RFC 2616 (HTTP/1.1) Section 14.36 */
    HttpHeaders.REFERER = "Referer";

    /** RFC 2616 (HTTP/1.1) Section 14.37 */
    HttpHeaders.RETRY_AFTER = "Retry-After";

    /** RFC 1945 (HTTP/1.0) Section 10.14, RFC 2616 (HTTP/1.1) Section 14.38 */
    HttpHeaders.SERVER = "Server";

    /** RFC 2518 (WevDAV) Section 9.7 */
    HttpHeaders.STATUS_URI = "Status-URI";

    /** RFC 2616 (HTTP/1.1) Section 14.39 */
    HttpHeaders.TE = "TE";

    /** RFC 2518 (WevDAV) Section 9.8 */
    HttpHeaders.TIMEOUT = "Timeout";

    /** RFC 2616 (HTTP/1.1) Section 14.40 */
    HttpHeaders.TRAILER = "Trailer";

    /** RFC 2616 (HTTP/1.1) Section 14.41 */
    HttpHeaders.TRANSFER_ENCODING = "Transfer-Encoding";

    /** RFC 2616 (HTTP/1.1) Section 14.42 */
    HttpHeaders.UPGRADE = "Upgrade";

    /** RFC 1945 (HTTP/1.0) Section 10.15, RFC 2616 (HTTP/1.1) Section 14.43 */
    HttpHeaders.USER_AGENT = "User-Agent";

    /** RFC 2616 (HTTP/1.1) Section 14.44 */
    HttpHeaders.VARY = "Vary";

    /** RFC 2616 (HTTP/1.1) Section 14.45 */
    HttpHeaders.VIA = "Via";

    /** RFC 2616 (HTTP/1.1) Section 14.46 */
    HttpHeaders.WARNING = "Warning";

    /** RFC 1945 (HTTP/1.0) Section 10.16, RFC 2616 (HTTP/1.1) Section 14.47 */
    HttpHeaders.WWW_AUTHENTICATE = "WWW-Authenticate";

    HttpHeaders.X_REQUESTED_WITH = "X-Requested-With";

    HttpHeaders.X_DO_NOT_TRACK = "X-Do-Not-Track";

    HttpHeaders.DNT = "DNT";

    HttpHeaders.X_FORWARDED_FOR = "X-Forwarded-For";

    HttpHeaders.X_ATT_DEVICEID = "X-ATT-DeviceId";

    HttpHeaders.X_WAP_PROFILE = "X-Wap-Profile";

    return {
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

        setHeader: function(name, value) {

            jQuery.http.headers[name.toString()] = value;
            //alert(jQuery.http.headers);
            return this;
        },

        setHeaders: function(headers) {

            jQuery.each(headers, function(index, value) {
                jQuery.http.headers[index] = value;
            });
            return this;
        },

        setParameter: function(name, value) {

            jQuery.http.parameters[name] = value;
            return this;
        },

        setParameters: function(parameters) {

            jQuery.each(parameters, function(index, value) {
                jQuery.http.parameters[index] = value;
            });
            return this;
        },

        setCookie: function(name, value) {

            jQuery.http.cookies[name] = value;
            return this;
        },

        setCookies: function(cookies) {

            //jQuery.http.cookies.push(cookies);

            jQuery.each(cookies, function(index, value) {
                jQuery.http.cookies[index] = value;
            });
            return this;
        },

        setBody: function(body) {
            jQuery.http.body = body;
            return this;
        },

        setAccept: function(value) {
            jQuery.http.headers[HttpHeaders.ACCEPT] = value;
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

        setAcceptLanguage: function(value) {
            jQuery.http.headers[HttpHeaders.ACCEPT_LANGUAGE] = value;
            return this;
        },

        setAcceptRanges: function(value) {
            jQuery.http.headers[HttpHeaders.ACCEPT_RANGES] = value;
            return this;
        },

        setAge: function(value) {
            jQuery.http.headers[HttpHeaders.AGE] = value;
            return this;
        },

        setAllow: function(value) {
            jQuery.http.headers[HttpHeaders.ALLOW] = value;
            return this;
        },

        setAuthorization: function(value) {
            jQuery.http.headers[HttpHeaders.AUTHORIZATION] = value;
            return this;
        },

        setCacheControl: function(value) {
            jQuery.http.headers[HttpHeaders.CACHE_CONTROL] = value;
            return this;
        },

        setConnection: function(value) {
            jQuery.http.headers[HttpHeaders.CONNECTION] = value;
            return this;
        },

        setContentEncoding: function(value) {
            jQuery.http.headers[HttpHeaders.CONTENT_ENCODING] = value;
            return this;
        },

        setContentLanguage: function(value) {
            jQuery.http.headers[HttpHeaders.CONTENT_LANGUAGE] = value;
            return this;
        },

        setContentLength: function(value) {
            jQuery.http.headers[HttpHeaders.CONTENT_LENGTH] = value;
            return this;
        },

        setContentLocation: function(value) {
            jQuery.http.headers[HttpHeaders.CONTENT_LOCATION] = value;
            return this;
        },

        setContentMD5: function(value) {
            jQuery.http.headers[HttpHeaders.CONTENT_MD5] = value;
            return this;
        },

        setContentRange: function(value) {
            jQuery.http.headers[HttpHeaders.CONTENT_RANGE] = value;
            return this;
        },

        setContentType: function(value) {
            jQuery.http.headers[HttpHeaders.CONTENT_TYPE] = value;
            return this;
        },

        setDate: function(value) {
            jQuery.http.headers[HttpHeaders.DATE] = value;
            return this;
        },

        setDav: function(value) {
            jQuery.http.headers[HttpHeaders.DAV] = value;
            return this;
        },

        setDepth: function(value) {
            jQuery.http.headers[HttpHeaders.DEPTH] = value;
            return this;
        },

        setDestination: function(value) {
            jQuery.http.headers[HttpHeaders.DESTINATION] = value;
            return this;
        },

        setETag: function(value) {
            jQuery.http.headers[HttpHeaders.ETAG] = value;
            return this;
        },

        setExpect: function(value) {
            jQuery.http.headers[HttpHeaders.EXPECT] = value;
            return this;
        },

        setExpires: function(value) {
            jQuery.http.headers[HttpHeaders.EXPIRES] = value;
            return this;
        },

        setFrom: function(value) {
            jQuery.http.headers[HttpHeaders.FROM] = value;
            return this;
        },

        setHost: function(value) {
            jQuery.http.headers[HttpHeaders.HOST] = value;
            return this;
        },

        setIf: function(value) {
            jQuery.http.headers[HttpHeaders.IF] = value;
            return this;
        },

        setIfMatch: function(value) {
            jQuery.http.headers[HttpHeaders.IF_MATCH] = value;
            return this;
        },

        setIfModifiedSince: function(value) {
            jQuery.http.headers[HttpHeaders.IF_MODIFIED_SINCE] = value;
            return this;
        },

        setIfNoneMatch: function(value) {
            jQuery.http.headers[HttpHeaders.IF_NONE_MATCH] = value;
            return this;
        },

        setIfRange: function(value) {
            jQuery.http.headers[HttpHeaders.IF_RANGE] = value;
            return this;
        },

        setIfUnmodifiedSince: function(value) {
            jQuery.http.headers[HttpHeaders.IF_UNMODIFIED_SINCE] = value;
            return this;
        },

        setLastModified: function(value) {
            jQuery.http.headers[HttpHeaders.LAST_MODIFIED] = value;
            return this;
        },

        setLocation: function(value) {
            jQuery.http.headers[HttpHeaders.LOCATION] = value;
            return this;
        },

        setLockToken: function(value) {
            jQuery.http.headers[HttpHeaders.LOCK_TOKEN] = value;
            return this;
        },

        setMaxForwards: function(value) {
            jQuery.http.headers[HttpHeaders.MAX_FORWARDS] = value;
            return this;
        },

        setOverwrite: function(value) {
            jQuery.http.headers[HttpHeaders.OVERWRITE] = value;
            return this;
        },

        setPragma: function(value) {
            jQuery.http.headers[HttpHeaders.PRAGMA] = value;
            return this;
        },

        setProxyAuthenticate: function(value) {
            jQuery.http.headers[HttpHeaders.PROXY_AUTHENTICATE] = value;
            return this;
        },

        setProxyAuthorization: function(value) {
            jQuery.http.headers[HttpHeaders.PROXY_AUTHORIZATION] = value;
            return this;
        },

        setRange: function(value) {
            jQuery.http.headers[HttpHeaders.RANGE] = value;
            return this;
        },

        setReferer: function(value) {
            jQuery.http.headers[HttpHeaders.REFERER] = value;
            return this;
        },

        setRetryAfter: function(value) {
            jQuery.http.headers[HttpHeaders.RETRY_AFTER] = value;
            return this;
        },

        setServer: function(value) {
            jQuery.http.headers[HttpHeaders.SERVER] = value;
            return this;
        },

        setStatusURI: function(value) {
            jQuery.http.headers[HttpHeaders.STATUS_URI] = value;
            return this;
        },

        setTE: function(value) {
            jQuery.http.headers[HttpHeaders.TE] = value;
            return this;
        },

        setTimeout: function(value) {
            jQuery.http.headers[HttpHeaders.TIMEOUT] = value;
            return this;
        },

        setTrailer: function(value) {
            jQuery.http.headers[HttpHeaders.TRAILER] = value;
            return this;
        },

        setTransferEncoding: function(value) {
            jQuery.http.headers[HttpHeaders.TRANSFER_ENCODING] = value;
            return this;
        },

        setUpgrade: function(value) {
            jQuery.http.headers[HttpHeaders.UPGRADE] = value;
            return this;
        },

        setUserAgent: function(value) {
            jQuery.http.headers[HttpHeaders.USER_AGENT] = value;
            return this;
        },

        setVary: function(value) {
            jQuery.http.headers[HttpHeaders.VARY] = value;
            return this;
        },

        setVia: function(value) {
            jQuery.http.headers[HttpHeaders.VIA] = value;
            return this;
        },

        setWarning: function(value) {
            jQuery.http.headers[HttpHeaders.WARNING] = value;
            return this;
        },

        setWWWAuthenticate: function(value) {
            jQuery.http.headers[HttpHeaders.WWW_AUTHENTICATE] = value;
            return this;
        },

        setXRequestedWith: function(value) {
            jQuery.http.headers[HttpHeaders.X_REQUESTED_WITH] = value;
            return this;
        },

        setXDoNotTrack: function(value) {
            jQuery.http.headers[HttpHeaders.X_DO_NOT_TRACK] = value;
            return this;
        },

        setDNT: function(value) {
            jQuery.http.headers[HttpHeaders.DNT] = value;
            return this;
        },

        setXForwardedFor: function(value) {
            jQuery.http.headers[HttpHeaders.X_FORWARDED_FOR] = value;
            return this;
        },

        setXAttDeviceid: function(value) {
            jQuery.http.headers[HttpHeaders.X_ATT_DEVICEID] = value;
            return this;
        },

        setXWapProfile: function(value) {
            jQuery.http.headers[HttpHeaders.X_WAP_PROFILE] = value;
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
        },

        THIS : function() {
            return this;
        }


    };

}();