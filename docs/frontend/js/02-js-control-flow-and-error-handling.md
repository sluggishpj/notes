---
title: 流程控制与异常处理
---

## Falsy

falsy 值 (虚值) 是在 Boolean 上下文中认定为 false 的值，有 7 个

| false                               | false 的关键字                                                   |
| ----------------------------------- | ---------------------------------------------------------------- |
| 0                                   | 数值 0                                                           |
| 0n                                  | 当 BigInt 作为布尔值使用时, 遵从其作为数值的规则。0n 是 falsy 值 |
| "", '', ``|空字符串，字符串长度为 0 |
| null                                | 基本数据类型 null                                                |
| undefined                           | 基本数据类型 undefined                                           |
| NaN                                 | NaN                                                              |

```js
!!document.all // false
```

> document.all 在过去被用于浏览器检测，是 HTML 规范在此定义了故意与 ECMAScript 标准相违背的。

## 异常处理

`try...catch`
`try...finally`
`try...catch`

如果 `finally` 块返回一个值，该值会是整个 `try-catch-finally` 流程的返回值，不管在 `try` 和 `catch` 块中语句返回了什么。

```js
function f() {
  try {
    console.log(0)
    throw 'bogus'
  } catch (e) {
    console.log(1)
    return true // this return statement is suspended
    // until finally block has completed
    console.log(2) // not reachable
  } finally {
    console.log(3)
    return false // overwrites the previous "return"
    console.log(4) // not reachable
  }
  // "return false" is executed now
  console.log(5) // not reachable
}
f() // console 0, 1, 3; returns false
```

用 `finally` 块覆盖返回值也适用于在 `catch` 块内抛出或重新抛出的异常

```js
function f() {
  try {
    throw 'bogus'
  } catch (e) {
    console.log('caught inner "bogus"')
    throw e // this throw statement is suspended until
    // finally block has completed
  } finally {
    return false // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f()
} catch (e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"')
}

// OUTPUT
// caught inner "bogus"
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
