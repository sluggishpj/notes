---
title: JavaScript
---

## 简述 `JavaScript` 中的 `this`

> [this | note](../frontend/js/js-expressions-and-operators.md#this)

## 前端模块化

### CommonJS (CJS)

> [CommonJS | note](../frontend/js/js-modules.md#commonjs-模块-cjs)

### ES6 Module

> [es6-module | note](../frontend/js/js-modules.md#es6-模块)

### CommonJS vs ES6 Module

- CommonJS 模块输出的是一个**值的拷贝**，ES6 模块输出的是**值的引用**。
  - 值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
  - JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值，不能重新赋值（好比是 const 变量）
- 加载和执行过程：
  - CommonJS `required()`是同步加载且立即执行
  - ES6 模块初始化(construction), 安装(instantiating) 和 执行(evaluating) 是可以分开的。

## `function foo(){ }();` 可否做为 IIFE

否。会报错: `Uncaught SyntaxError: Unexpected token ')'`。  
原因：前者是函数声明；后者（一对括号）是试图调用一个函数，却没有指定名称。

可以改为 `(function foo(){ })();` 即可作为 IIFE

## `null`和`undefined`区别

- `undefined`
  - 未声明变量，直接访问会报错`ReferenceError`。直接对齐赋值，在严格模式下也会报错，非严格模式下会变为全局变量。对其 `typeof` 操作，会返回 `undefined`
  - 已声明未赋值的变量，其值为 `undefined`
- `null`: `null` 只能被显式赋值给变量。它表示空值

## 闭包

当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。 【函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。】

[闭包 | note](../frontend/js/js-functions.md#闭包)

## JSONP 的工作原理

JSONP（带填充的 JSON）是一种通常用于绕过 Web 浏览器中的跨域限制的方法，因为 Ajax 默认不允许跨域请求（除非设置了 CORS）。

JSONP 通过`<script>`标签发送跨域请求，通常使用 `callback` 查询参数，例如：`https://example.com?callback=printData`。 然后服务器将数据包装在一个名为`printData` 的函数中并将其返回给客户端。

```html
<!-- https://mydomain.com -->
<script>
  function printData(data) {
    console.log(`My name is ${data.name}!`)
  }
</script>

<script src="https://example.com?callback=printData"></script>
```

```js
// 文件加载自 https://example.com?callback=printData
printData({ name: 'username' })
```

> 客户端必须在其全局范围内具有 `printData` 函数，并且在收到来自跨域的响应时，该函数将由客户端执行。JSONP 可能具有一些安全隐患。由于 JSONP 是纯 JavaScript 实现，它可以完成 JavaScript 所能做的一切，因此需要信任 JSONP 数据的提供者。

## 变量提升

使用 **`var` 声明**的变量会被提升，**函数声明**也会提升，且函数声明比变量声明提升的更前。变量提升的是声明（未赋值），函数是整个都提升（包括函数体）。

- 变量提升

```js
console.log(b) // undefined
var b = 2
```

- 函数提升

```js
foo() // "bar"

function foo() {
  console.log('bar')
}
```

- 优先级

```js
console.log(typeof a) // function
var a = 1 // Ⅰ
function a() {} // Ⅱ

a // 1
```

> Ⅰ 和 Ⅱ 调换位置也不影响结果。  
> MORE：[声明 | note](../frontend/js/js-grammar-and-types.md#声明)

## "attribute" 和 "property" 区别

“Attribute” 是在 **HTML** 中定义的，而 “property” 是在 **DOM** 上定义的。为了说明区别，假设我们在 HTML 中有一个文本框：`<input type="text" value="Hello">`。

```js
const input = document.querySelector('input')
console.log(input.getAttribute('value')) // Hello
console.log(input.value) // Hello
```

但是在文本框中键入“ World!”后:

```js
console.log(input.getAttribute('value')) // Hello
console.log(input.value) // Hello World!
```

## 严格模式优缺点

- 过失错误转为异常：如创建未声明全局变量、函数参数名重复
- 禁止某些语法: 禁用 `with`, `arguments.callee`
- 其他：普通函数中 `this`为`undefined`

[严格模式 | note](../frontend/js/js-strict-mode.md#严格模式中的变化)

## 单页应用 SPA 及其 SEO 方案

### 单页应用

- 缺点：首屏加载时间较长，不利于 SEO
- 优点：用户感知响应更快，切换页面时，不用看到因页面刷新而导致的白屏

### SEO

- 服务端渲染，如 [Nuxt](https://nuxtjs.org/), [Next](https://nextjs.org/)
- 预渲染，如 `prerender-spa-plugin`
- 针对爬虫单独处理: 识别是爬虫请求，返回所需的 HTML

## Promise polyfill

<<< @/src/interview/promise-polyfill.js#Promise

> REF: https://juejin.cn/post/6903725134977171463
> MORE: [Promise | note](../frontend/js/js-promises.md)

## 柯里化函数（curry function）科里化函数

[柯里化函数 | note](../frontend/js/js-functions.md#函数科里化)

## 工具函数简单实现

### 防抖(debounce) 和节流(throttle)

- 防抖: 距最近一次**调用**，必须隔一段时间后才会执行。原理：调用时清除旧定时器，重新启动 1 个

<<< @/src/interview/javascript.js#debounce

- 节流: 每隔一段时间，多次调用只会执行 1 次。原理：调用时如果定时器存在，则不执行。

<<< @/src/interview/javascript.js#throttle

### 深浅复制

<<< @/src/interview/javascript.js#cloneDeep

> REF: https://juejin.cn/post/6844903929705136141

### 事件总线 EventEmitter（发布订阅模式）

注意点：

- `once`: 是包装返回了新函数，并在新函数中 `off` 掉自己
- `emit`: 遍历方法数组时中途可能被改变(`once`)，需要浅复制一遍

<<< @/src/interview/javascript.js#EventEmitter

> REF: https://github.com/browserify/events

### 实现 `JSON.stringify()`

注意点：

- 对数组进行遍历时，`forEach()` 会跳过空项，比如`[,,]`遍历次数为 0
- 第 2 个参数，可以是数组或函数。当遍历数组时，只有函数才会起作用

<<< @/src/interview/javascript.js#JSONStringify

> [JSON.stringify | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

## 常用 UI 的实现原理

### 轮播图

> TODO

### 瀑布流布局

[瀑布流布局](https://sluggishpj.github.io/blog/2017/10/16/waterfall-flow-principle/)

### 圣杯布局

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/rinxu/embed/MWEGBda?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/MWEGBda">
  Untitled</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### sticky 布局

[sticky-footer](https://sluggishpj.github.io/blog/2018/04/21/sticky-footer/)

## REF

> https://frontendinterviewhandbook.com/zh/javascript-questions/
