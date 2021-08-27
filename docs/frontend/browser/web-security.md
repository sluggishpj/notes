---
title: Web 安全
---

# Web 安全

## XSS

跨站脚本攻击（Cross Site Scripting），是代码注入的一种，它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。
分为三种：反射型，存储型和 DOM-based

### 如何攻击

通过修改 HTML 节点或者执行 JS 代码来攻击网站。例如通过 URL 获取某些参数。

```html
<!-- http://www.domain.com?name=<script>alert(1)</script> -->
<div>{{name}}</div>
```

> 这种类型属于反射型攻击。

另一种场景，比如写了一篇包含攻击代码 `<script>alert(1)</script>` 的文章，那么可能浏览文章的用户都会被攻击到。这种攻击类型是存储型攻击，也可以说是 DOM-based 攻击，并且这种攻击打击面更广。

### 如何防御

转义输入输出的内容，对于引号，尖括号，斜杠进行转义。

```js
function escape(str) {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/`/g, '&#96;')
  str = str.replace(/\//g, '&#x2F;')
  return str
}
```

对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。

```js
var xss = require('xss')
var html = xss('<h1 id="title">XSS Demo</h1><script>alert("xss");</script>')
// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;
console.log(html)
```

### CSP

内容安全策略 (CSP) 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。
CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的代码。

#### 设置方式

1. 可以通过配置网络服务器返回 `Content-Security-Policy` HTTP 头部
2. 通过`<meta>`元素配置

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; img-src https://*; child-src 'none';"
/>
```

- 只允许加载本站资源

```http
Content-Security-Policy: default-src ‘self’
```

- 只允许加载 HTTPS 协议图片

```http
Content-Security-Policy: img-src https://*
```

- 设置 web workers 和 `<frame>`，`<iframe>` 允许的来源

```http
Content-Security-Policy: child-src 'none'
```

> https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP
>
> https://content-security-policy.com/

## CSRF

跨站请求伪造（英语：Cross-site request forgery）。是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。

### 如何攻击

受害者用户登录网站 A，输入个人信息，在本地保存服务器生成的 cookie。攻击者构建一条恶意链接，例如对受害者在网站 A 的信息及状态进行操作，典型的例子就是转账。受害者打开了攻击者构建的网页 B，浏览器发出该恶意连接的请求，浏览器发起会话的过程中发送本地保存的 cookie 到网址 A，A 网站收到 cookie，以为此链接是受害者发出的操作，导致受害者的身份被盗用。

### 如何防御

1. Get 请求不对数据进行修改
2. 不让第三方网站访问到用户 Cookie
3. 阻止第三方网站请求接口
4. 请求时附带验证信息，比如验证码或者 token

- SameSite: 可以对 Cookie 设置 SameSite 属性。该属性设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容
- 验证 Referer: 通过验证 Referer 来判断该请求是否为第三方网站发起的
- Token: 服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。

## 密码安全

对于密码存储来说，必然是不能明文存储在数据库中的，否则一旦数据库泄露，会对用户造成很大的损失。并且不建议只对密码单纯通过加密算法加密，因为存在彩虹表的关系。

通常需要对密码加盐，然后进行几次不同加密算法的加密。

```js
// 加盐也就是给原密码添加字符串，增加原密码长度
sha256(sha1(md5(salt + password + salt)))
```

## CORS

CORS 分为 2 类：简单请求 和 非简单请求

### 简单请求

简单请求不会触发 CORS 预检请求。需满足以下条件：

- 使用方法如下
  - GET
  - HEAD
  - POST
- 除了被用户代理自动设置的首部字段（例如 Connection ，User-Agent）和在 Fetch 规范中定义为 [禁用首部名称](https://fetch.spec.whatwg.org/#forbidden-header-name) 的其他首部，允许人为设置的字段为 Fetch 规范定义的 对 CORS 安全的首部字段集合。该集合为：
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type （需要注意额外的限制）
  - DPR
  - Downlink
  - Save-Data
  - Viewport-Width
  - Width
- Content-Type 的值仅限于下列三者之一：
  - text/plain
  - multipart/form-data
  - application/x-www-form-urlencoded
- 请求中的任意`XMLHttpRequestUpload` 对象均没有注册任何事件监听器；`XMLHttpRequestUpload` 对象可以使用 `XMLHttpRequest.upload` 属性访问。
- 请求中没有使用 `ReadableStream` 对象。

### 非简单请求

> https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
