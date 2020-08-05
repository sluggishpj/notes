---
title: 事件
---

## 事件机制

### 触发 3 三阶段

- 捕获事件
- 触发事件
- 冒泡事件

### 注册事件

```js
target.addEventListener(type, listener, options)
target.addEventListener(type, listener, useCapture)
```

- options 【可选】，一个指定有关 listener 属性的可选参数对象。可用的选项如下：
  -  capture: Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。、
  -  once: Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
  -  passive: Boolean，设置为 true 时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。

- useCapture 【可选】
  - `Boolean`: 在捕获阶段触发事件

#### 拓展

```js
event.stopImmediatePropagation()
```

> 如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行了 `event.stopImmediatePropagation()` 方法，则当前元素剩下的监听函数将不会被执行

## Event loop

### 执行栈与事件队列

当我们调用一个方法的时候，js 会生成一个与这个方法对应的执行环境（context），又叫执行上下文。而当一系列方法被依次调用的时候，因为 js 是单线程的，同一时间只能执行一个方法，于是这些方法被排队在一个单独的地方。这个地方被称为执行栈。

当一个脚本第一次执行的时候，js 引擎会解析这段代码，并将其中的同步代码按照执行顺序加入执行栈中，然后从头开始执行。如果当前执行的是一个方法，那么 js 会向执行栈中添加这个方法的执行环境，然后进入这个执行环境继续执行其中的代码。当这个执行环境中的代码 执行完毕并返回结果后，js 会退出这个执行环境并把这个执行环境销毁，回到上一个方法的执行环境。。这个过程反复进行，直到执行栈中的代码全部执行完毕。

js 引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。当一个异步事件返回结果后，js 会将这个事件加入与当前执行栈不同的另一个队列，我们称之为**事件队列**。被放入事件队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环。这就是这个过程被称为“事件循环（Event Loop）”的原因。

### macro task 与 micro task

同的异步任务被分为两类：微任务（micro task）和宏任务（macro task）。

以下事件属于宏任务：

- `setInterval`
- `setTimeout`
- `UI rendering`

以下事件属于微任务：

- `Promise`
- `MutationObserver`

在一个事件循环中，异步事件返回结果后会被放到一个任务队列中。然而，根据这个异步事件的类型，这个事件实际上会被对应的**宏任务队列**或者**微任务队列**中去。并且在当前执行栈为**空**的时候，主线程会 查看**微任务队列**是否有事件存在。如果不存在，那么再去**宏任务队列**中取出一个事件并把对应的回到加入当前执行栈；如果存在，则会依次执行队列中事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈...如此反复，进入循环。

```js
console.log('script start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')
// script start => Promise => script end => promise1 => promise2 => setTimeout
```

## Other

- 不想改动已经写好的 onload 方法，可以采用以下方法追加

```js
function addLoadEvent(func) {
  var oldOnload = window.onload
  if (typeof oldOnload !== 'function') {
    window.onload = func
  } else {
    window.onload = function() {
      oldOnload()
      func()
    }
  }
}
```
