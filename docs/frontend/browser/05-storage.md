---
title: 存储
---

## cookie

- limit: 4K
- 每次都会携带在 header 中

安全性

| 属性      | 作用                                                           |
| --------- | -------------------------------------------------------------- |
| value     | 如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识 |
| http-only | 不能通过 JS 访问 Cookie，减少 XSS 攻击                         |
| secure    | 只能在协议为 HTTPS 的请求中携带                                |
| same-site | 规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击          |

## localStorage

- limit: 5M
- 除非被清理，否则一直存在

## sessionStorage

- limit: 5M
- 页面关闭就清理

## indexDB

- limit: 不同浏览器不一样

## 储存限制

浏览器的最大存储空间是动态的——它取决于您的硬盘大小。 **全局限制**为可用磁盘空间的 50％。
如果超过此范围，则会发起称为源回收的过程，删除整个源的数据，直到存储量再次低于限制。删除源数据没有只删一部分的说法——因为这样可能会导致不一致的问题。

还有另一个限制称为**组限制**——这被定义为全局限制的 20％，但它至少有 10 MB，最大为 2GB。 每个源都是一组（源组）的一部分。

- `mozilla.org`——组 1，源 1
- `www.mozilla.org`——组 1，源 2
- `joe.blogs.mozilla.org`——组 1，源 3
- `firefox.com` ——组 2，源 4

在这个组中，`mozilla.org`、`www.mozilla.org` 和 `joe.blogs.mozilla.org` 可以聚合使用最多 20％的全局限制。 `firefox.com` 单独最多使用 20％。

> chrome 的组限制是 min(剩余内存/10, 2G)。[REF](https://chromium.googlesource.com/chromium/src/+/refs/heads/master/storage/browser/quota/quota_settings.cc#68)
