---
title: 跨域
---

因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端口有一个不同就是跨域，`Ajax` 请求会失败。

我们可以通过以下几种常用方法解决跨域的问题

## JSONP

`JSONP` 的原理很简单，就是利用 `<script>` 标签**没有跨域限制**的漏洞。通过 `<script>` 标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。

```html
<script src="http://domain/api?param1=a&param2=b&callback=jsonp"></script>
<script>
  function jsonp(data) {
    console.log(data)
  }
</script>
```

> JSONP 使用简单且兼容性不错，但是只限于 get 请求。

## CORS

服务端设置 `Access-Control-Allow-Origin` 就可以开启 `CORS。` 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。

## document.domain

前提条件：这两个域名必须属于同一个基础域名! 而且所用的协议，端口都要一致。
比如 `a.test.com` 和 `b.test.com` 适用于该方式。

只需要给页面添加 `document.domain = 'test.com'` 表示二级域名都相同就可以实现跨域

## postMessage

这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息。

> https://sluggishpj.github.io/blog/2017/11/22/tab-communication/
