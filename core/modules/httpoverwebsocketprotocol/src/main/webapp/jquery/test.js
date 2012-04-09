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

//$.getScript("jquery.http.js");

var before = {
    setup: function () {

    }
};

module('json http request', before);

test('test all headers', 1, function () {

    //var HttpHeaders = new $.http.HttpHeaders();

    //var expectedJsonHttpRequest = {};
    var expectedJsonHttpRequest = $.http.THIS();
    expectedJsonHttpRequest = jQuery.extend(expectedJsonHttpRequest, { // due to this trick we can populate fields in any orders

        url: 'http:\\localhost:80',
        host: 'http:\\localhost:80',
        method: 'POST',
        headers: {
            'Accept' : 'text/plain',
            'Accept-Charset' : 'utf-8',
            'Accept-Encoding' : 'identity',
            'Accept-Language' : 'en-US',
            'Accept-Ranges' : 'Thu, 31 May 2007 20:35:00 GMT',
            'Age' : '12',
            'Allow' : 'GET, HEAD',
            'Authorization' : 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==',
            'Cache-Control' : 'no-cache',
            'Connection' : 'close',
            'Content-Encoding' : 'gzip',
            'Content-Language' : 'en-US',
            'Content-Length' : '348',
            'Content-Location' : '/index.htm',
            'Content-MD5' : 'Q2hlY2sgSW50ZWdyaXR5IQ==',
            'Content-Range' : 'bytes 21010-47021/47022',
            'Content-Type' : 'text/plain',
            'Date' : 'Tue, 15 Nov 1994 08:12:31 GMT',
            'Dav' : '1',
            'Depth' : 'infinity',
            'Destination' : 'absolute URI',
            'ETag' : '737060cd8c284d8af7ad3082f209582d',
            'Expect' : '100-continue',
            'Expires' : 'Thu, 01 Dec 1994 16:00:00 GMT',
            'From' : 'user@example.com',
            'Host' : 'en.wikipedia.org',
            'If' : '737060cd8c284d8af7ad3082f209582d',
            'If-Match' : '737060cd8c284d8af7ad3082f209582d',
            'If-Modified-Since' : 'Sat, 29 Oct 1994 19:43:31 GMT',
            'If-None-Match' : '737060cd8c284d8af7ad3082f209582d',
            'If-Range' : '737060cd8c284d8af7ad3082f209582d',
            'If-Unmodified-Since' : 'Sat, 29 Oct 1994 19:43:31 GMT',
            'Last-Modified' : 'Tue, 15 Nov 1994 12:45:26 GMT',
            'Location' : 'http://www.w3.org/pub/WWW/People.html',
            'Lock-Token' : 'opaquelocktoken:a515cfa4-5da4-22e1-f5bf-00a0451e6bf7',
            'Max-Forwards' : '10',
            'Overwrite' : 'Overwrite',
            'Pragma' : 'no-cache',
            'Proxy-Authenticate' : 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==',
            'Proxy-Authorization' : 'value',
            'Range' : 'bytes=500-999',
            'Referer' : 'http://en.wikipedia.org/wiki/Main_Page',
            'Retry-After' : 'http://en.wikipedia.org/wiki/Main_Page',
            'Server' : 'Apache/2.4.1 (Unix)',
            'Status-URI' : 'unknown status uri',
            'TE' : 'deflate',
            'Timeout' : '3600',
            'Trailer' : 'Max-Forwards',
            'Transfer-Encoding' : 'chunked',
            'Upgrade' : 'HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11',
            'User-Agent' : 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)',
            'Vary' : '*',
            'Via' : '1.0 fred, 1.1 nowhere.com (Apache/1.1)',
            'Warning' : '199 Miscellaneous warning',
            'WWW-Authenticate' : 'Basic',
            'X-Requested-With' : 'XMLHttpRequest',
            'X-Do-Not-Track' : '1',
            'DNT' : '1',
            'X-Forwarded-For' : 'client1, proxy1, proxy2',
            'X-ATT-DeviceId' : 'MakeModel/Firmware',
            'X-Wap-Profile' : 'http://wap.samsungmobile.com/uaprof/SGH-I777.xml'
        },
        attributes: {},
        parameters: {},
        cookies: {},
        body: null,

        version: 0.1
    });
    var expected = jQuery.stringifyJSON(expectedJsonHttpRequest);

    //var expected = "{\"version\":0.1,\"url\":\"\",\"host\":\"\",\"method\":\"POST\",\"headers\":{\"undefined\":\"text/plain\"},\"attributes\":{},\"parameters\":{},\"cookies\":{},\"body\":null}";

    var jsonHttpRequest = $.http
        .Url('http:\\localhost:80')
        .Host('http:\\localhost:80')
        .setAccept('text/plain')
        .setAcceptCharset('utf-8')
        .setAcceptEncoding('identity')
        .setAcceptLanguage('en-US')
        .setAcceptRanges('Thu, 31 May 2007 20:35:00 GMT')
        .setAge('12')
        .setAllow('GET, HEAD')
        .setAuthorization('Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==')
        .setCacheControl('no-cache')
        .setConnection('close')
        .setContentEncoding('gzip')
        .setContentLanguage('en-US')
        .setContentLength('348')
        .setContentLocation('/index.htm')
        .setContentMD5('Q2hlY2sgSW50ZWdyaXR5IQ==')
        .setContentRange('bytes 21010-47021/47022')
        .setContentType('text/plain')
        .setDate('Tue, 15 Nov 1994 08:12:31 GMT')
        .setDav('1')
        .setDepth('infinity')
        .setDestination('absolute URI')
        .setETag('737060cd8c284d8af7ad3082f209582d')
        .setExpect('100-continue')
        .setExpires('Thu, 01 Dec 1994 16:00:00 GMT')
        .setFrom('user@example.com')
        .setHost('en.wikipedia.org')
        .setIf('737060cd8c284d8af7ad3082f209582d')
        .setIfMatch('737060cd8c284d8af7ad3082f209582d')
        .setIfModifiedSince('Sat, 29 Oct 1994 19:43:31 GMT')
        .setIfNoneMatch('737060cd8c284d8af7ad3082f209582d')
        .setIfRange('737060cd8c284d8af7ad3082f209582d')
        .setIfUnmodifiedSince('Sat, 29 Oct 1994 19:43:31 GMT')
        .setLastModified('Tue, 15 Nov 1994 12:45:26 GMT')
        .setLocation('http://www.w3.org/pub/WWW/People.html')
        .setLockToken('opaquelocktoken:a515cfa4-5da4-22e1-f5bf-00a0451e6bf7')
        .setMaxForwards('10')
        .setOverwrite('Overwrite')
        .setPragma('no-cache')
        .setProxyAuthenticate('Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==')
        .setProxyAuthorization('value')
        .setRange('bytes=500-999')
        .setReferer('http://en.wikipedia.org/wiki/Main_Page')
        .setRetryAfter('http://en.wikipedia.org/wiki/Main_Page')
        .setServer('Apache/2.4.1 (Unix)')
        .setStatusURI('unknown status uri')
        .setTE('deflate')
        .setTimeout('3600')
        .setTrailer('Max-Forwards')
        .setTransferEncoding('chunked')
        .setUpgrade('HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11')
        .setUserAgent('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)')
        .setVary('*')
        .setVia('1.0 fred, 1.1 nowhere.com (Apache/1.1)')
        .setWarning('199 Miscellaneous warning')
        .setWWWAuthenticate('Basic')
        .setXRequestedWith('XMLHttpRequest')
        .setXDoNotTrack('1')
        .setDNT('1')
        .setXForwardedFor('client1, proxy1, proxy2')
        .setXAttDeviceid('MakeModel/Firmware')
        .setXWapProfile('http://wap.samsungmobile.com/uaprof/SGH-I777.xml')

        .buildJSON();

    equal(jsonHttpRequest, expected, 'should return value');


});

