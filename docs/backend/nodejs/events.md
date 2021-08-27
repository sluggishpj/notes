---
title: Events
---

# Events

## Event loop

Node 的 Event loop 分为 6 个阶段，它们会按照顺序反复运行

```bash
   ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<──connections───     │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```

- **timer**: 执行 `setTimeout` 和 `setInterval`
- **I/O**: 这个阶段执行几乎所有的回调。但是不包括 `close` 事件，定时器和 `setImmediate()` 的回调
- **idle, prepare**: 这个阶段仅在内部使用
- **poll**: 系统会做两件事情
  - 执行到点的定时器
  - 执行 poll 队列中的事件。并且当 poll 中没有定时器的情况下，会发现以下两件事情
    - 如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者系统限制
    - 如果 poll 队列为空，会有两件事发生
    - 如果有 `setImmediate` 需要执行，poll 阶段会停止并且进入到 check 阶段执行 `setImmediate`
    - 如果没有 `setImmediate` 需要执行，会等待回调被加入到队列中并立即执行回调
    - 如果有别的定时器需要被执行，会回到 timer 阶段执行回调
- **check**: `setImmediate()`的回调会在这个阶段执行
- **close callbacks**: 执行 close 事件

```js
setTimeout(() => {
  console.log('setTimeout')
}, 0)
// 实际上
setImmediate(() => {
  console.log('setImmediate')
})
// 这里可能会输出 setTimeout，setImmediate
// 可能也会相反的输出，这取决于性能
// 因为可能进入 event loop 用了不到 1 毫秒，这时候会执行 setImmediate
// 否则会执行 setTimeout
```

```js
var fs = require('fs')

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout')
  }, 0)
  setImmediate(() => {
    console.log('immediate')
  })
})
// 因为 readFile 的回调在 poll 中执行
// 发现有 setImmediate ，所以会立即跳到 check 阶段执行回调
// 再去 timer 阶段执行 setTimeout
// 所以以上输出一定是 setImmediate，setTimeout
```

Node 中的 `process.nextTick` 会先于其他 microtask 执行。

> https://zhuanlan.zhihu.com/p/33058983
