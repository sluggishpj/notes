---
title: Iterators and generators
---

# 迭代器和生成器

## Iterators 迭代器

迭代器是一个实现了 [Iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) 的对象，且其 `next()` 方法返回 `{value: any, done: boolean}`

### 获取迭代器对象 的 迭代器

通过对象的 `[Symbol.iterator]()` 方法来获取对象默认的迭代器。

#### 数组

```js
let arr = [1, 2, 3]
let iterator = arr[Symbol.iterator]()

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: undefined, done: true }
```

#### Map

```js
let map = new Map()
map.set('key1', 'value1')
map.set('key2', 'value2')

const iterator = map[Symbol.iterator]()

console.log(iterator.next()) // { value: [ 'key1', 'value1' ], done: false }
console.log(iterator.next()) // { value: [ 'key2', 'value2' ], done: false }
console.log(iterator.next()) // { value: undefined, done: true }
```

> 还有 字符串, Set 等也有内置的迭代器

### for-of 遍历

能够通过 `[Symbol.iterator]()` 方法返回迭代器的 对象都是**迭代器对象**，可以通过 `for-of` 遍历迭代器对象。包括：

- 已内置迭代器的 **数组，字符串，set，map**
- 自定义迭代器对象(下一节)

`for-of` 每次遍历得到的值都是生成器的 `next()` 方法返回的 `done:true` 时的 `value`

```js
let map = new Map()
map.set('key1', 'value1')
map.set('key2', 'value2')

const iterator = map[Symbol.iterator]()

console.log(iterator.next()) // { value: [ 'key1', 'value1' ], done: false }
console.log(iterator.next()) // { value: [ 'key2', 'value2' ], done: false }
console.log(iterator.next()) // { value: undefined, done: true }

for (let res of map) {
  console.log(res)
}
// for..of 的输出
// [ 'key1', 'value1' ]
// [ 'key2', 'value2' ]
```

### 自定义迭代器

- 方法 1: 自定义 `[Symbol.iterator]()` 为生成器函数，因为生成器函数的返回对象也满足迭代器的协议。

```js
let collection = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item
    }
  },
}

collection.items.push(1)
collection.items.push(2)
collection.items.push(3)

for (let x of collection) {
  console.log(x)
}

// 1
// 2
// 3
```

- 方法 2: 自定义 `[Symbol.iterator]()` 方法返回符合协议的对象

```js
var myObject = {
  a: 2,
  b: 3,
  [Symbol.iterator]() {
    var o = this
    var idx = 0
    var ks = Object.keys(o)
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        }
      },
    }
  },
}
```

## Generators 生成器

### 判断生成器&生成器对象

```js
// 检测生成器函数
function isGeneratorFunction(fn) {
  const genFn = function* () {}.constructor
  return fn instanceof genFn
}

// 检测生成器实例对象
function isGenerator(obj) {
  return obj.toString ? obj.toString() === '[object Generator]' : false
}
```

eg.

```js
function* genFn() {
  let a = 1
  while (true) {
    yield (a = a * 2)
  }
}

const gen = genFn()
console.log(gen.next()) // { value: 2, done: false }
console.log(gen.next()) // { value: 4, done: false }
console.log(gen.next()) // { value: 8, done: false }

console.log(isGeneratorFunction(genFn)) // true
console.log(isGenerator(gen)) // true
console.log(isGenerator({})) // false
```

### 打破完整运行

#### 输入和输出

```js
function* foo(x, y) {
  return x * y
}
var it = foo(6, 7)
var res = it.next() // {value: 42, done: true}
```

##### 迭代消息传递

`yield` 表达式本身没有返回值，或者说总是返回 `undefined` 。`next()` 方法可以带一个参数，该参数就会被当作上一个 `yield` 表达式的返回值。特例是第一次调用 `next()` 方法时无论传入什么参数都会被丢弃

```js
function* foo(x) {
  var y = x * (yield 5)
  return y
}
var it = foo(6)

it.next() // {value: 5, done: false}
it.next(7) // {value: 42, done: true}
```

> 在 `*foo(..)` 内部，开始执行语句 `var y = x ..`，但随后就遇到了一个 `yield` 表达式。它就会在这一点暂停 `*foo(..)`（在赋值语句中间！），并在本质上要求调用代码为 `yield`表达式提供一个结果值。接下来，调用 `it.next( 7 )`，这一句把值 7 传回作为被暂停的`yield` 表达式的结果。这时赋值语句实际上就是 `var y = 6 * 7`。`return y` 返回值 42 作为调用 `it.next( 7 )` 的 value，如果没有 return 值，则 value 为 `undefined`

### 生成器迭代器

#### 停止生成器

```js
function* fibonacci() {
  yield 0

  let pre = 0
  let cur = 1
  try {
    while (true) {
      let res = cur + pre
      yield res
      pre = cur
      cur = res
    }
  } finally {
    console.log('end')
  }
}
```

1. `for...of` 内部的 `break` 会触发 `finally` 语句

```js
let g = fibonacci()

for (const seq of g) {
  if (seq > 20) {
    break
  }
  console.log(seq)
}
// 0 1 2 3 5 8 13
// end
```

2. 调用 `it.return(...)` 终止生成器，这也会运行 `finally` 语句

```js
let g = fibonacci()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.return('return done'))
// 0 1 2
// end
// { value: 'return done', done: true }
```

### 处理迭代器错误

```js
function* main() {
  var x = yield 'Hello World'
  yield x.toLowerCase() // 引发一个异常！
  yield 42
}

var it = main()

it.next().value // Hello World

try {
  it.next(42)
} catch (err) {
  console.error(err) // TypeError
}

it.next() //
```

可以通过 `it.throw()` 抛出错误

```js
function* main() {
  var x = yield 'Hello World'
  // 永远不会到达这里
  console.log(x)
}
var it = main()

it.next()

try {
  it.throw('Oops')
} catch (err) {
  console.error(err) // Oops
}
```

### 生成器+Promise

#### 支持 Promise 的 Generator Runner

> 可以简单理解为 `async await`的实现

```js
function run(gen, ...args) {
  // 在当前上下文中初始化生成器
  const it = gen.apply(this, args)
  // 返回一个promise用于生成器完成
  return Promise.resolve().then(function handleNext(value) {
    // 对下一个yield出的值运行
    var res = it.next(value)
    return (function handleResult(res) {
      // 生成器运行完毕了吗？
      if (res.done) {
        return res.value
      } else {
        // 否则继续运行
        return Promise.resolve(res.value).then(
          // 成功就恢复异步循环，把决议的值发回生成器
          handleNext,
          // 如果value是被拒绝的 promise，
          // 就把错误传回生成器进行出错处理
          function handleErr(err) {
            return Promise.resolve(it.throw(err)).then(handleResult)
          }
        )
      }
    })(res)
  })
}
```

> 上面那个理解成本有点高，下面那个比较简洁明了，2 者功能一致

```js
function run(gen, ...args) {
  const it = gen.apply(this, args)

  const res = it.next()
  step(res)

  // 拿到 res 后，判断是否需要继续
  function step(res) {
    if (res.done) {
      // 结束
      return res.value
    }

    Promise.resolve(res.value)
      .then((value) => {
        // 将上一个 value(如果是value是 Promise 则是其resolve后的值) 作为返回值
        const nextRes = it.next(value)
        step(nextRes)
      })
      .catch((err) => {
        const nextRes = it.throw(err)
        step(nextRes)
      })
  }
}
```

```js
function wait(second, isRejectd = false) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => (isRejectd ? reject(second) : resolve(second)), second * 1000)
  })
}

function* foo() {
  try {
    var r1 = yield wait(1)
    console.log(r1) // 1s 后输出1

    var r2 = yield wait(2)
    console.log(r2) // 再过2s后输出2

    var r3 = yield wait(r1 + r2)
    console.log(r3) // 再过3s后 输出3
  } catch (err) {
    console.log('err', err)
  }
}

// 使用前面定义的工具run(..)
run(foo)
```

### 生成器委托

通过 `yield * [iterable]`, [iterable] 是可以是 **迭代器对象** 或 **生成器对象**

#### 消息委托

```js
function* foo() {
  var r1 = yield wait(1)
  var r2 = yield wait(2)
  return r1 + r2
}

function* bar() {
  var r1 = yield wait(1)
  // 通过 yeild* "委托"给*foo()
  var r3 = yield* foo()
  console.log(r1 + r3) // 4s 后输出4
}

run(bar)
```

- 普通迭代对象

```js
function* bar() {
  console.log('inside *bar():', yield 'A')
  // yield委托给非生成器！
  console.log('inside *bar():', yield* ['B', 'C', 'D'])
  console.log('inside *bar():', yield 'E')
  return 'F'
}
var it = bar()
console.log('outside:', it.next().value)
// outside: A
console.log('outside:', it.next(1).value)
// inside *bar(): 1
// outside: B
console.log('outside:', it.next(2).value)
// outside: C
console.log('outside:', it.next(3).value)
// outside: D
console.log('outside:', it.next(4).value)
// inside *bar(): undefined
// outside: E
console.log('outside:', it.next(5).value)
// inside *bar(): 5
// outside: F
```

> 默认的数组迭代器并不关心通过`next()`调用发送的任何消息，所以值 2、3 和 4 根本就被忽略了。还有，因为迭代器没有显式的返回值，所以 `yield *`表达式完成后得到的是一个 `undefined` 。

#### 异常也被委托

```js
function* foo() {
  try {
    yield 'B'
  } catch (err) {
    console.log('error caught inside *foo():', err)
  }
  yield 'C'
  throw 'D'
}

function* bar() {
  yield 'A'
  try {
    yield* foo()
  } catch (err) {
    console.log('error caught inside *bar():', err)
  }
  yield 'E'
  yield* baz()
  // 注：不会到达这里！
  yield 'G'
}

function* baz() {
  throw 'F'
}

var it = bar()

console.log('outside:', it.next().value)
// outside: A
console.log('outside:', it.next(1).value)
// outside: B
console.log('outside:', it.throw(2).value)
// error caught inside *foo(): 2
// outside: C
console.log('outside:', it.next(3).value)
// error caught inside *bar(): D
// outside: E
try {
  console.log('outside:', it.next(4).value)
} catch (err) {
  console.log('error caught outside:', err)
}
// error caught outside: F
```

> 1. 调用 `it.throw(2)` 时，它会发送错误消息 2 到 `*bar()`，它又将其委托给 `*foo()`，后者捕获并处理它。然后，`yield "C"` 把 "C" 发送回去作为 `it.throw(2)` 调用返回的 `value`。
> 2. 接下来从 `*foo()` 内 throw 出来的值 "D" 传播到 `*bar()`，这个函数捕获并处理它。然后 `yield "E"` 把 "E" 发送回去作为 `it.next(3)` 调用返回的 `value`。
> 3. 然后，从 `*baz()` throw 出来的异常并没有在 `*bar()` 内被捕获——所以 `*baz()` 和 `*bar()`都被设置为完成状态。这段代码之后，就再也无法通过任何后续的 `next(..)` 调用得到值 "G"，`next(..)`调用只会给`value`返回`undefined`
