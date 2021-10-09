---
title: Promise
---

# Promise

## 组合

- `Promise.all()` 和 `Promise.race()`

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  /* use result1, result2 and result3 */
})
```

- 时序

```js
;[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  })
```

相当于

```js
Promise.resolve().then(func1).then(func2).then(func3)
```

- 可复用的函数形式

```js
const applyAsync = (acc, val) => acc.then(val)
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x))

const transformData = composeAsync(func1, func2, func3)
const result3 = transformData(data)
```

相当于

```js
let result
for (const f of [func1, func2, func3]) {
  result = await f(result)
}
/* use last result (i.e. result3) */
```

> ES2017 标准

## 问题

### 执行顺序

#### 题目 1

```js
const promise = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
  console.log(2)
})

promise.then(() => {
  console.log(3)
})

console.log(4)
```

- 解析：首先 Promise 新建后立即执行，所以会先输出 1，2，而 `Promise.then()` 内部的代码在 当次 事件循环的 结尾 立刻执行 ，所以会继续输出 4，最后输出 3。
- 答案：`1 2 4 3`

#### 题目 2

```js
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3)
    let p = new Promise((resolve, reject) => {
      console.log(7)
      setTimeout(() => {
        console.log(5)
        resolve(6)
      }, 0)
      resolve(1)
    })
    resolve(2)
    p.then((arg) => {
      console.log(arg)
    })
  })

first().then((arg) => {
  console.log(arg)
})
console.log(4)
```

- 解析：这道题就其实和 Promise 的关系不太大，主要是需要理解 JS 执行机制。
  - 第一轮事件循环。
    - 先执行宏任务，主 script ，`new Promise` 立即执行，输出【3】
    - 执行 p 这个 `new Promise` 操作，输出【7】
    - 发现 `setTimeout`，将回调放入下一轮任务队列（Event Queue），p 的 then，姑且叫做 then1，放入微任务队列，发现 first 的 then，叫 then2，放入微任务队列。执行 console.log(4)，输出【4】，宏任务执行结束。
    - 再执行微任务，执行 then1，输出【1】
    - 执行 then2，输出【2】。到此为止，第一轮事件循环结束。开始执行第二轮。
  - 第二轮事件循环
    - 先执行宏任务里面的，也就是 `setTimeout` 的回调，输出【5】。
    - `resolve(6)` 不会生效，因为 p 这个 Promise 的状态一旦改变就不会在改变了。
- 答案：`3 7 4 1 2 5`

### 返回值

```js
Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
```

- 解析：`Promise.resolve` 方法的参数如果是一个原始值，或者是一个不具有 then 方法的对象，则 `Promise.resolve` 方法返回一个新的 Promise 对象，状态为 resolved，`Promise.resolve` 方法的参数，会同时传给回调函数。

`then` 方法接受的参数是函数，而如果传递的并非是一个函数，它实际上会将其解释为 `then(null)`，这就会导致前一个 Promise 的结果会穿透下面。

- 答案：1

```js
var p1 = Promise.resolve(42)
var p2 = Promise.resolve(p1)

p1 === p2 // true

const obj = {
  then(resolve, reject) {
    setTimeout(() => {
      resolve('obj resolve')
    }, 1000)
  },
}

const p = Promise.resolve(obj)

p.then((res) => {
  console.log('res', res)
}).catch((err) => {
  console.error('err', err)
})

// 1s 后输出
// res obj resolve
```

> `Promise.resolve(..)` 可以接受任何 `thenable`，将其解封为它的非 `thenable` 值。从 `Promise.resolve(..)` 得到的是一个真正的 `Promise`，是一个可以信任的值。如果你传入的已经是真正的 `Promise`，那么你得到的就是它本身

## 应用

### 并发请求限制

要求，任意时刻，同时执行的操作数量不可以超过 3 个，且尽可能快速地将所有操作执行

- 解析：
  先并发执行 3 个操作，可以得到 3 个 Promise，组成一个数组，就叫 promises 吧，然后不断的调用 `Promise.race` 来返回最快改变状态的 Promise，然后从数组（promises ）中删掉这个 Promise 对象，再加入一个新的 Promise，直到全部的 操作 被取完，最后再使用 `Promise.all` 来处理一遍数组（promises ）中没有改变状态的 Promise。
- 答案：

```js
var arr = new Array(8).fill(0).map(() => Math.round(Math.random() * 100))

function wait(n) {
  return new Promise((resolve) => {
    console.log('start <==', n)
    setTimeout(() => {
      console.log('done ==> ', n)
      resolve(n)
    }, n * 100)
  })
}

function limitLoad(arr, handler, limit) {
  // 对数组做一个拷贝
  const sequence = [].concat(arr)
  let promises = []

  //并发请求到最大数
  promises = sequence.splice(0, limit).map((n, index) => {
    // 这里返回的 index 是任务在 promises 的脚标，用于在 Promise.race 之后找到完成的任务脚标
    return handler(n).then(() => {
      return index
    })
  })

  // 利用数组的 reduce 方法来以队列的形式执行
  return sequence
    .reduce((last, n, currentIndex) => {
      return last
        .then(() => {
          // 返回最快改变状态的 Promise
          return Promise.race(promises)
        })
        .catch((err) => {
          // 这里的 catch 不仅用来捕获 前面 then 方法抛出的错误
          // 更重要的是防止中断整个链式调用
          console.error(err)
        })
        .then((res) => {
          // 用新的 Promise 替换掉最快改变状态的 Promise
          promises[res] = handler(sequence[currentIndex]).then(() => {
            return res
          })
        })
    }, Promise.resolve())
    .then(() => {
      return Promise.all(promises)
    })
}

// 方法2
async function limitLoade2(arr, handler, limit) {
  let cp = arr.slice(0)
  let limitQueue = cp.splice(0, limit)
  let proQueue = limitQueue.map((v, i) => {
    return handler(v).then(() => i)
  })
  while (cp.length > 0) {
    await Promise.race(proQueue)
      .then((res) => {
        proQueue[res] = handler(cp.shift()).then(() => res)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return Promise.all(proQueue)
}

limitLoade2(arr, wait, 3)
  .then(() => {
    console.log('加载完成')
  })
  .catch((err) => {
    console.error(err)
  })
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises
