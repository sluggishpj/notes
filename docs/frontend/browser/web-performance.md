---
title: Web 性能
---

# Web 性能

## 网络相关

### DNS 预解析

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

> 每当站点引用跨域域上的资源时，都应在`<head>`元素中放置 `dns-prefetch` 提示，但是要记住一些注意事项。首先，dns-prefetch 仅对跨域域上的 DNS 查找有效，因此请避免将其用于您当前访问的站点。这是因为当浏览器解析到当前 Link 元素内容时，您站点域背后的 IP 已经被解析。

### 缓存

#### 强缓存

通过两种响应头实现：`Expires` 和 `Cache-Control` 。强缓存表示在缓存期间不需要请求

> `Cache-Control` 出现于 HTTP / 1.1，优先级高于 Expires

#### 协商缓存

如果缓存过期了，我们就可以使用协商缓存来解决问题。协商缓存需要请求，如果缓存有效会返回 **304**。

协商缓存需要客户端和服务端共同实现，和强缓存一样，也有两种实现方式

- `Last-Modified` 和 `If-Modified-Since`
  `Last-Modified` 表示本地文件最后修改日期，`If-Modified-Since` 会将 `Last-Modified` 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。
- `ETag` 和 `If-None-Match`
  `ETag` 类似于文件指纹，`If-None-Match` 会将当前 `ETag` 发送给服务器，询问该资源 `ETag` 是否变动，有变动的话就将新的资源发送回来。并且 `ETag` 优先级比 `Last-Modified` 高

#### 选择合适的缓存策略

- 对于某些不需要缓存的资源，可以使用 `Cache-control: no-store` ，表示该资源不需要缓存
- 对于频繁变动的资源，可以使用 `Cache-Control: no-cache` 并配合 `ETag` 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新。
- 对于代码文件来说，通常使用 `Cache-Control: max-age=31536000` 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件。

> `Cache-control: no-store`: 不使用任何缓存
>
> `Cache-Control: no-cache`: 在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证(协商缓存验证)。
>
> [Cache Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)

### 使用 HTTP/2.0

因为浏览器会有并发请求限制，在 HTTP / 1.1 时代，每个请求都需要建立和断开，消耗了好几个 RTT 时间，并且由于 TCP 慢启动的原因，加载体积大的文件会需要更多的时间。

在 HTTP / 2.0 中引入了多路复用，能够让多个请求使用同一个 TCP 链接，极大的加快了网页的加载速度。并且还支持 Header 压缩，进一步的减少了请求的数据大小。

### 预加载

#### preload

有些资源不需要马上用到，但是希望尽早获取，这时候就可以使用预加载。预加载其实是声明式的 fetch ，强制浏览器请求资源，并且不会阻塞 onload 事件，可以使用以下代码开启预加载

```html
<link rel="preload" href="style.css" as="style" />
```

#### prefetch

利用浏览器空闲时间来下载或预取用户在不久的将来可能访问的文档。并在浏览器完成当前页面的加载后开始静默地拉取指定的文档并将其存储在缓存中。

```js
<link rel="prefetch" href="/images/big.jpeg">
```

> 浏览器会给使用 prefetch 的资源一个相对较低的优先级——与使用 preload 的资源相比。

#### 预渲染

通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染

```js
<link rel="prerender" href="http://example.com" />
```

### 优化渲染过程

回流，重绘

### 懒执行

懒执行（Lazy Execution）就是对特定功能逻辑的初始化进行全部或部分的延迟，直到满足某一触发条件，再进行剩余部分的初始化。

### 懒加载

将不关键的资源延后加载。

懒加载的原理就是只加载自定义区域（通常是可视区域，但也可以是即将进入可视区域）内需要加载的东西。对于图片来说，先设置图片标签的 src 属性为一张占位图，将真实的图片资源放入一个自定义属性中，当进入自定义区域时，就将自定义属性替换为 src 属性，这样图片就会去下载资源，实现了图片懒加载。

懒加载不仅可以用于图片，也可以使用在别的资源上。比如进入可视区域才开始播放视频等等。

## 文件优化

### 图片优化

#### 图片大小优化

对于一张 100 \* 100 像素的图片来说，图像上有 10000 个像素点，如果每个像素的值是 RGBA 存储的话，那么也就是说每个像素有 4 个通道，每个通道 1 个字节（8 位 = 1 个字节），所以该图片大小大概为 39KB（10000 \* 4 / 1024）。

优化方法

- 减少像素点
- 减少每个像素点能够显示的颜色

#### 图片加载优化

1. 不用图片。修饰类图片尝试用 CSS 替代
2. 对于移动端来说，一般图片都用 **CDN** 加载，可以计算出适配屏幕的宽度，然后去请求相应**裁剪好**的图片。
3. 小图使用 base64 格式
4. 将多个图标文件整合到一张图片中（雪碧图）
5. 选择正确的图片格式：
   - 尽量使用 WebP 格式
   - 图标使用 SVG 替代

### 其他文件优化

- CSS 文件放在 `head` 中
- 服务端开启文件压缩功能
- 将 `script` 标签放在 `body` 底部，因为 JS 文件执行会阻塞渲染。当然也可以把 script 标签放在任意位置然后加上 `defer` ，表示该文件会并行下载，但是会放到 HTML 解析完成后顺序执行。对于没有任何依赖的 JS 文件可以加上 `async` ，表示加载和渲染后续文档元素的过程将和 JS 文件的加载与执行并行无序进行。
- 执行 JS 代码过长会卡住渲染，对于需要很多时间计算的代码可以考虑使用 `Webworker`。`Webworker` 可以让我们另开一个线程执行脚本而不影响渲染。

![ahemhq.png](https://s1.ax1x.com/2020/08/07/ahemhq.png)

> https://html.spec.whatwg.org/multipage/scripting.html

### CDN

静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie。

## Web Worker

```js
var w1 = new Worker('http://some.url.1/mycoolworker.js')
w1.addEventListener('message', function (evt) {
  // evt.data
})
w1.postMessage('something cool to say')

// 中止worker
// w1.terminate()
```

```js
// "mycoolworker.js"
addEventListener('message', function (evt) {
  // evt.data
})
postMessage('a really cool reply')

// workers 也可以调用自己的 close  方法进行关闭
// close();
```

### Worker 环境

```js
// 在Worker内部
importScripts('foo.js', 'bar.js')
```

> 脚本的下载顺序不固定，但执行时会按照传入 `importScripts()` 中的文件名顺序进行。这个过程是同步完成的；直到所有脚本都下载并运行完毕，`importScripts()` 才会返回

> [Worker 可用上下文](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)

适用场景

- 处理密集型数学计算
- 大数据集排序
- 数据处理（压缩、音频分析、图像处理等）
- 高流量网络通信

### 数据传递

早期 Worker 需要**双向序列化**，以及双倍的内存。

现在可以使用 [结构化克隆算法 (structured clone algorithm)](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/The_structured_clone_algorithm) 把这个对象复制到另一边。不用双向序列化，但仍需要双倍的内存。

对于 [Transferable 对象](https://developer.mozilla.org/en-US/docs/Web/API/Transferable)，可以转让对象所有权（类比 C++中的引用），从一个上下文转移到另一个上下文。但与按照引用传递不同的是，一旦对象转让，那么它在原来上下文的那个版本将不复存在。该对象的所有权被转让到新的上下文内。例如，当你将一个`ArrayBuffer`对象从主应用转让到 Worker 中，原始的 `ArrayBuffer` **被清除并且无法使用**。它包含的内容会(完整无差的)传递给 Worker 上下文。

```js
// Create a 32MB "file" and fill it.
var uInt8Array = new Uint8Array(1024 * 1024 * 32) // 32MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i
}

worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer])
```

> 第一个参数是一个原始缓冲区，第二个是一个要传输的内容的列表。不支持 Transferable 对象的浏览器就降级到结构化克隆

### 共享 Worker

> REF: https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker

```js
// square.js
var squareNumber = document.querySelector('#number3')

var result2 = document.querySelector('.result2')

if (!!window.SharedWorker) {
  var myWorker = new SharedWorker('worker.js')

  squareNumber.onchange = function () {
    myWorker.port.postMessage([squareNumber.value, squareNumber.value])
    console.log('Message posted to worker')
  }

  myWorker.port.onmessage = function (e) {
    result2.textContent = e.data
    console.log('Message received from worker')
  }
}
```

```js
// multiply.js
var first = document.querySelector('#number1')
var second = document.querySelector('#number2')

var result1 = document.querySelector('.result1')

if (!!window.SharedWorker) {
  var myWorker = new SharedWorker('worker.js')

  first.onchange = function () {
    myWorker.port.postMessage([first.value, second.value])
    console.log('Message posted to worker')
  }

  second.onchange = function () {
    myWorker.port.postMessage([first.value, second.value])
    console.log('Message posted to worker')
  }

  myWorker.port.onmessage = function (e) {
    result1.textContent = e.data
    console.log('Message received from worker')
    console.log(e.lastEventId)
  }
}
```

```js
// worker.js
onconnect = function (e) {
  var port = e.ports[0]

  port.onmessage = function (e) {
    var workerResult = 'Result: ' + e.data[0] * e.data[1]
    port.postMessage(workerResult)
  }
}
```

> 如果父级线程 或 worker 线程使用了 `addEventListener` 来监听 `message` 事件，则需要手动调用 `port.start()`，如下：

```js
// square.js
var squareNumber = document.querySelector('#number3')

var result2 = document.querySelector('.result2')

if (!!window.SharedWorker) {
  var myWorker = new SharedWorker('worker.js')

  myWorker.port.start() // notice!

  squareNumber.onchange = function () {
    myWorker.port.postMessage([squareNumber.value, squareNumber.value])
    console.log('Message posted to worker')
  }

  // 使用了 addEventListener 监听 message
  myWorker.port.addEventListener('message', function (e) {
    result2.textContent = e.data
    console.log('Message received from worker')
  })
}
```

```js
// worker.js
onconnect = function (e) {
  var port = e.ports[0]

  // 使用了 addEventListener 监听 message
  port.addEventListener('message', (e) => {
    var workerResult = 'Result: ' + e.data[0] * e.data[1]
    port.postMessage(workerResult)
  })

  // 需手动 start()
  port.start()
}
```

[SharedWorker 兼容性](https://caniuse.com/?search=SharedWorker)

## 其他

### 使用 Webpack 优化项目

- 代码压缩
- 使用 ES6 模块开启 `tree shaking`
- 优化图片，对于小图可以使用 base64 的方式写入文件中
- 按照路由拆分代码，实现按需加载
- 给打包出来的文件名添加哈希，实现浏览器缓存文件

### 监控

对于捕获的错误需要上传给服务器，通常可以通过 img 标签的 src 发起一个请求。

- `window.onerror` 拦截
- `try...catch...`
- 对于跨域的代码运行错误会显示 `Script error`. 对于这种情况我们需要给 `script` 标签添加 `crossorigin` 属性

#### Script error

##### 来源

`Script error` 本质是因为浏览器的跨域安全策略行为，保护非同域代码内容的安全。

所有通过 script 标签引入的跨域脚本，如果出现异常，window 下的 error 事件都只能得到 'Script error'。

##### 解决方案

1. response 头增加 `Access-Control-Allow-Origin`，表明受信任的域名
2. 请求的 script 标签增加 crossorigin 属性

crossorigin 有两个值，分别是

- anonymous
- use-credentials

当 `crossorigin=''` ，或者其他字符，和设置 anonymous 的效果一样。anonymous 依赖 response 头的 `Access-Control-Allow-Origin`。需要注意的是，使用 anonymous 时，request 头不会带上用户信息，比如 cookie。相对的，使用 `use-credentials` 可以带上用户信息。

`use-credentials` 需要和 response 头的 `Access-Control-Allow-Credentials` 配合使用，当 `Access-Control-Allow-Credentials` 返回 true 的时候，浏览器才会允许运行脚本和信任来源。另外在这种情况下， `Access-Control-Allow-Origin` 不能设置为 `*`，必须是具体的域名。

##### 一个变种场景：jsonp

jsonp 本身解决的问题就是跨域接口请求，因此大部分使用场景自带跨域光环。另外它通过 script 标签运行，和 js 脚本的性质一样。

因此当它出现了异常，也会存在 `Script error` 的情况。
解决方式就是按照「常规解决方案」里列举的两个步骤去"解构" `Script error`。

这里有个问题在于大部分接口依赖用户信息，前端需要使用 `crossorigin='use-credentials` 方式将请求带上 cookie 信息。因此后台在 `Access-Control-Allow-Origin` 中要返回具体的域名，以及将 `Access-Control-Allow-Credentials` 设置为 true 以让浏览器通过验证。

> https://juejin.im/post/5eec270ce51d4574220aa67d
