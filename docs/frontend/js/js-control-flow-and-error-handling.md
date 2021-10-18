---
title: 流程控制与异常处理
---

# 流程控制与异常处理

## switch

switch 语句在比较值时使用的是全等操作符 `===`

default 是可选的，并非必不可少（虽然惯例如此）。break 相关规则对 default 仍然适用

```js
var a = 10
switch (a) {
  case 1:
  case 2:
  // 永远执行不到这里
  default:
    console.log('default')
  case 3:
    console.log('3')
    break
  case 4:
    console.log('4')
}
// default
// 3
```

> 上例中的代码是这样执行的，首先遍历并找到所有匹配的 `case`，如果没有匹配则执行 `default` 中的代码。因为其中没有 `break`，所以继续执行已经遍历过的 `case 3` 代码块，直到 `break` 为止。

## Falsy

falsy 值 (虚值) 是在 Boolean 上下文中认定为 false 的值，有 7 个

| false      | false 的关键字                                                   |
| ---------- | ---------------------------------------------------------------- |
| 0          | 数值 0                                                           |
| 0n         | 当 BigInt 作为布尔值使用时, 遵从其作为数值的规则。0n 是 falsy 值 |
| "", '', `` | 空字符串，字符串长度为 0                                         |
| null       | 基本数据类型 null                                                |
| undefined  | 基本数据类型 undefined                                           |
| NaN        | NaN                                                              |

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

### 错误

TDZ（Temporal Dead Zone，暂时性死区），指的是由于代码中的变量还没有初始化而不能被引用的情况

```js
{
  a = 2 // ReferenceError!
  let a
}
```

`typeof` 也不例外

```js
{
  typeof a // undefined
  typeof b // ReferenceError! (TDZ)
  let b
}
```

> 对未声明变量使用 `typeof` 不会产生错误

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
