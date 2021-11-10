---
title: HTTP
---

## 请求和响应报文

### 请求报文

```http
<request-line>
<headers>
<blank line>
[<request-body>]
```

```http
POST /csdnbi  HTTP/1.1
Host: pv.csdn.net
Connection: keep-alive // 不需要每次重连，此功能为HTTP/1.1预设功能
Keep-Alive: timeout=20
Access-Control-Allow-Origin: https://passport.csdn.net
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Credentials: true
Access-Control-Allow-Headers: DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,body
Content-Length: 297
Cache-Control: no-cache
Accept: application/json, text/javascript, */*; q=0.01
Origin: https://passport.csdn.net
X-Requested-With: XMLHttpRequest
User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.6)
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
Cookie: JSESSIONID=102A7097419957407303C23004B778DF

name=Professional%20Ajax&publisher=Wiley
```

> 1. 第一行必须是一个请求行（request line），用来说明请求类型、要访问的资源以及使用的 HTTP 版本
> 2. 紧接着是一个首部（header）小节，用来说明服务器要使用的附加信息。换行符是 CRLF（\r\n）
> 3. 在首部之后是一个空行
> 4. 再此之后可以添加任意的其他数据[称之为主体（body）]

### 响应报文

```http
<version> <status> <reason-phrase>
<headers>
<blank line>
[<response-body>]
```

```http
HTTP/1.1 200 OK
Date: Sat, 31 Dec 2005 23:59:59 GMT
Content-Type: text/html;charset=ISO-8859-1
Content-Length: 122

<html>
<head>
<title>Wrox Homepage</title>
</head>
<body>
<!-- body goes here -->
</body>
</html>
```

> 在响应中唯一真正的区别在于第一行中用**状态**信息代替了请求信息。状态行（status line）通过提供一个状态码来说明所请求的资源情况。

## HTTP 请求方法

| 序号 | 方法    | 描述                                                                                                                                                                     |
| ---- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | GET     | 请求指定的资源，并返回实体主体                                                                                                                                           |
| 2    | HEAD    | 获取请求资源的响应头部信息, 并且这些头部与 HTTP GET 方法请求时返回的一致. 该请求方法的一个使用场景是在下载一个大文件前先获取其大小再决定是否要下载, 以此可以节约带宽资源 |
| 3    | POST    | 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改                                   |
| 4    | PUT     | 从客户端向服务器传送的数据替代目标资源                                                                                                                                   |
| 5    | DELETE  | 删除指定的资源                                                                                                                                                           |
| 6    | CONNECT | 开启一个客户端与所请求资源之间的双向沟通的通道。它可以用来创建隧道（tunnel）                                                                                             |
| 7    | OPTIONS | 用于获取目的资源所支持的通信选项                                                                                                                                         |
| 8    | TRACE   | 回显服务器收到的请求，主要用于测试或诊断                                                                                                                                 |

> [HTTP Methods | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) |

### OPTIONS

包括以下用途

1. 检测服务器所支持的请求方法，通过响应头 `Allow`
2. CORS 的预检请求：
   - 预检请求报文中的 `Access-Control-Request-Method` 首部字段告知服务器实际请求所使用的 HTTP 方法；`Access-Control-Request-Headers` 首部字段告知服务器实际请求所携带的自定义首部字段。服务器基于从预检请求获得的信息来判断，是否接受接下来的实际请求
   - 服务器所返回的 `Access-Control-Allow-Methods` 首部字段将所有允许的请求方法告知客户端。该首部字段与 `Allow` 类似，但只能用于涉及到 CORS 的场景中。

### GET vs POST

1. `GET` 无副作用，`POST`可能有
2. `GET` 能被浏览器缓存，`POST`不能
3. `GET` 请求参数有长度限制，`POST`没有
4. `GET` 传输的数据只能是 ASCII 字符，`POST`可以是二进制文件
5. `GET` 安全性较弱
   - 安全的方法除了 `GET` 之外还有：`HEAD`、`OPTIONS`。
   - 不安全的方法除了 `POST` 之外还有 `PUT`、`DELETE`。

## HTTP 状态码

### 100 ~ 199 信息性状态码

- `101 Switching Protocol`:该代码是响应客户端的 `Upgrade` 请求头，并且指示服务器也正在切换的协议。`websocket` 建立连接过程的请求报文就有用到

### 200 ~ 299 成功状态码

| 状态码                  | 含义                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------- |
| **200 OK**              | 成功                                                                                  |
| **204 No Content**      | 服务器成功处理了请求，但不返回任何实体内容                                            |
| **206 Partial Content** | 表示请求已成功，并且主体包含所请求的数据区间，该数据区间是在请求的 `Range` 首部指定的 |

### 300 ~ 399 重定向状态码

| 状态码                    | 含义                                                                                                                                                                                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **301 Moved Permanently** | 永久重定向，目标请求资源的 URI 已被永久改变，响应的 Location 首部应该包含资源现在所在的 URI                                                                                                                                                                 |
| **302 Found**             | 临时重定向，目标请求资源的 URI 被临时改变。客户端使用 Location 首部给出的 URI 来临时定位资源。将来的请求仍应使用老的 URI                                                                                                                                    |
| **304 Not Modified**      | 表明没必要再传输请求过的资源，直接使用缓存通常发生在：无副作用的请求(如 GET/HEAD) 或 使用了 `If-None-Match/If-Modified-Since` 请求头。与此等价的**200OK**响应应该包含以下任一响应头：`Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires`, `Vary` |

### 400 ~ 499 客户端错误状态码

| 状态码                         | 含义                                                                                         |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| **400 Bad Request**            | 语义有误，当前请求无法被服务器理解。或请求参数有误                                           |
| **401 Unauthorized**           | 当前请求需要用户验证，比如未登录                                                             |
| **403 Forbidden**              | 服务器已经理解请求，但是拒绝执行它，比如没权限                                               |
| **404 Not Found**              |                                                                                              |
| **405 Method Not Allowed**     | 请求行中指定的请求方法不能被用于请求相应的资源                                               |
| **408 Request Timeout**        | 请求超时。客户端没有在服务器预备等待的时间内完成一个请求的发送                               |
| **413 Payload Too Large**      | 服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或者能够处理的范围       |
| **415 Unsupported Media Type** | 对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝 |
| **429 Too Many Requests**      | 用户在给定的时间内发送了太多请求（“限制请求速率”）                                           |

### 500 ~ 599 服务器错误状态码

| 状态码                        | 含义                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| **500 Internal Server Error** | 服务器出问题了                                                                       |
| **501 Not Implemented**       | 此请求方法不被服务器支持且无法被处理                                                 |
| **502 Bad Gateway**           | 作为网关或代理角色的服务器，从上游服务器（如 tomcat、php-fpm）中接收到的响应是无效的 |
| **503 Service Unavailable**   | 服务器没有准备好处理请求。 常见原因是服务器因维护或重载而停机                        |
| **504 Gateway Timeout**       | 当服务器作为网关，不能及时得到响应时返回此错误代码                                   |

> [HTTP Status | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## HTTP2

HTTP 默认使用端口 80

新增以下特性

| 特性          | 说明                                                                                                                                                                                                                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 多路复用      | 允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息，对比 HTTP1.x，可以极大减少 三次握手&慢启动带来的延迟。以及速度不在受限于浏览器限制了每个域名只能建立 4-8 个连接                                                                                                                                      |
| HTTP 首部压缩 | HPACK 压缩格式压缩请求和响应头元数据。详见下方小节                                                                                                                                                                                                                                                          |
| 服务端推送    | 在客户端请求一个资源时，会把相关的资源一起发送给客户端，客户端就不需要再次发起请求了。例如客户端请求 page.html 页面，服务端就把 script.js 和 style.css 等与之相关的资源一起发给客户端。                                                                                                                     |
| 二进制分帧层  | 这里所谓的“层”，指的是位于套接字接口与应用可见的高级 HTTP API 之间一个经过优化的新编码机制: HTTP 的语义（包括各种动词、方法、标头）都不受影响，不同的是传输期间对它们的编码方式变了。 HTTP/1.x 协议以换行符作为纯文本的分隔符，而 HTTP/2 将所有传输的信息分割为更小的消息和帧，并采用二进制格式对它们编码。 |

### 首部压缩

HPACK 压缩格式压缩请求和响应头元数据。这种格式使用以下技术

这种格式使用以下技术：

1. 这种格式支持通过静态**霍夫曼编码**对传输的头部字段进行编码
2. 这种格式要求客户端和服务器同时维护和更新一个包含之前见过的**头部字段的索引列表**（换句话说，它可以建立一个共享的压缩上下文），此列表随后会用作参考，对之前传输的值进行有效编码。

利用霍夫曼编码，可以在传输时对各个值进行压缩，而利用之前传输值的索引列表，我们可以通过传输索引值的方式对重复值进行编码，索引值可用于有效查询和重构完整的标头键值对。

> [http2 | GoogleDevelopers](https://developers.google.com/web/fundamentals/performance/http2)

## HTTPS

默认使用端口 443

https 与 http 的区别就是： 在请求前，会建立 ssl 链接，确保接下来的通信都是加密的，无法被轻易截取分析

### SSL/TLS 的握手流程

此过程是**非对称加密**，结束后双方都有 相同秘钥

![](https://f000.backblazeb2.com/file/j-assets/Ssl_handshake_with_two_way_authentication_with_certificates.png)

> [图片来源](https://upload.wikimedia.org/wikipedia/commons/e/e5/Ssl_handshake_with_two_way_authentication_with_certificates.png)

### 对称加密交换信息

上图中的 Phase 4。 在握手过程中 获得了同一秘钥，之后双方都是 用该秘钥 加密和解密 交换信息，该过程是 **对称加密**

## HTTP 缓存

### 本地缓存（强缓存）

先在本地查找该资源，如果有发现该资源，而且该资源还没有过期，就使用这一个资源，完全不会发送 http 请求到服务器。体现在浏览器就是 `disk cache` & `memory cache`。

由 `Expires` 和 `Cache-Control` 响应头控制

- `Expires`: 服务端配置的，过期时间，GMT 绝对时间。被 `Cache-Control`的`max-age`覆盖。如果客户端时间和服务端不同步，可能缓存无法准确生效/失效
- `Cache-Control`:
  - `max-age`: 单位 s
  - `no-cache`: 要求缓存把请求提交给原始服务器进行验证(协商缓存验证)
  - `no-store`: 不使用任何缓存
  - `must-revalidate`: 一旦资源过期，在成功向原始服务器验证之前，缓存不能用该资源响应后续请求

### 协商缓存

如果在本地缓存找到对应的资源，但是不知道该资源是否过期或者已经过期，则发一个 http 请求到服务器,然后服务器判断这个请求，如果请求的资源在服务器上没有改动过，则返回 **304**

由 `Last-Modified(响应头) & If-modified-since(请求头)` 和 `Etag(响应头) & If-None-Match(请求头)` 控制

- `Last-Modified`: 对象的最后修改时间，只能精确到 1s 以内
- `Etag`: 可以理解为是 URL 和文件内容的 hash，没有 1s 精确度的限制

协商缓存在 某些操作&一定时间内 也会直接取本地缓存，表现出来就跟命中强缓存一样(from disk cache/memory cache)。

直接取缓存的有效期为 `((响应头Date||收到响应时间)-Last-Modified时间)/10`。详细可以看[chrome 源码&注释](https://chromium.googlesource.com/chromium/src/+/refs/tags/93.0.4577.82/net/http/http_response_headers.cc#1003)

> https://juejin.cn/post/7011331644686598152

## REF

> https://developers.google.com/web/fundamentals/performance/http2
>
> 《HTTP 权威指南》
