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
target.ontypexxx = listener
// btn.onclick = function() {}
// 移除事件监听
// btn.onclick = null

target.addEventListener(type, listener, options)
target.addEventListener(type, listener, useCapture)
```

- options 【可选】，一个指定有关 listener 属性的可选参数对象。可用的选项如下：

  - capture: Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。、
  - once: Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
  - passive: Boolean，设置为 true 时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。

- useCapture 【可选】，默认为 false
  - `Boolean`: 在捕获阶段触发事件

### 移除事件

```js
target.removeEventListener(type, listener[, options])
target.removeEventListener(type, listener[, useCapture])
```

> 匹配目标事件的标准是：`type` && `listener` 相同的前提下， 检测的是 `capture`/`useCapture` 标志是否一致。

## 事件对象

在触发 DOM 上的某个事件时，会产生一个事件对象 event

### 属性

- `type`: 事件类型
- `target`: 最初派发（dispatch）事件时指定的目标
  - `srcElement` : IE 中对 `Event.target` 的别称
- `button`: 按下的鼠标键
- `clientX/clientY`: 事件发生的时候，鼠标相对于浏览器窗口可视文档区域的左上角的位置
- `offsetX/offsetY`: 鼠标相对于源元素左上角的位置
- `keyCode`: 键盘按键的代码

### 方法

- `preventDefault()`
- `stopPropagation()`
- `stopImmediatePropagation()`: 如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行了 `event.stopImmediatePropagation()` 方法，则当前元素剩下的监听函数将不会被执行

## 事件类型

- UI 事件，当用户与页面上的元素交互时触发。如 load, unload, abort, error, select, resize, scroll
- 焦点事件，当元素获得或失去焦点时触发。如 blur, focus

### 鼠标事件

当用户通过鼠标在页面上执行操作时触发。如 click, dbclick, mousedown, mouseenter, mouseleave, mousemove, mouseout, mouseup

> 同一个元素上相继触发 mousedown 和 mouseup 事件，才会触发 click 事件；如果 mousedown 或 mouseup 中的一个被取消，就不会触发 click 事件

### 滚轮事件

当使用鼠标滚轮（或类似设备）时触发。鼠标滚动 mousewheel

- 与 mousewheel 事件对应的 event 对象除包含鼠标事件的所有标准信息外，还包含一个特殊的 wheelDelta 属性。当用户向前滚动鼠标滚轮时， wheelDelta 是 120 的倍数；当用户向后滚动鼠标滚轮时， wheelDelta 是-120 的倍数

```js
document.addEventListener('mousewheel', function(event) {
  console.log(event.wheelDelta) //120或-120
})
```

### 设备事件

- orientationchange

```js
window.addEventListener('orientationchange', function() {
  console.log('the orientation of the device is now ' + screen.orientation.angle)
})
```

### 触摸事件

- touchstart
- touchmove
- touchend
- touchcancel

#### 属性

除了 event 常见的属性外，还有

- touches ：表示当前跟踪的触摸操作的 Touch 对象的数组。
- targetTouches: 触摸起始于当前事件的目标 element 上【就是监听事件的那个元素】，并且仍然没有离开触摸平面的触点。
  > https://stackoverflow.com/questions/7056026/variation-of-e-touches-e-targettouches-and-e-changedtouches

### 其他

- `contextmenu`：用户尝试打开上下文菜单时被触发。该事件通常在鼠标点击右键或者按下键盘上的菜单键时被触发，如果使用菜单键，该上下文菜单会被展示 到所聚焦元素的左下角。任何没有被禁用的鼠标右击事件 (通过调用事件的 `preventDefault()` 方法) 将会使得 `contextmenu` 事件在目标元素上被触发。

```html
<p id="noContextMenu">这个段落右键菜单已被禁用。</p>
<p>但是这个段落没有被禁用。</p>
```

```js
noContext = document.getElementById('noContextMenu')

noContext.addEventListener('contextmenu', e => {
  e.preventDefault()
})
```

- hashchange

## 创建和触发 events

```js
var event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { ... }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```

> https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events

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
