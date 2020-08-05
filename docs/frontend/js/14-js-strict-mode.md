---
title: 严格模式
---

## 开启严格模式

### 为脚本开启严格模型

为整个脚本文件开启严格模式，需要在所有语句之前放一个特定语句 `"use strict"` （或 `'use strict'`）

### 为函数开启严格模式

把 `"use strict"` （或 `'use strict'`）声明一字不漏地放在函数体所有语句之前

```js
function strict() {
  // 函数级别严格模式语法
  'use strict'
  function nested() {
    return 'And so am I!'
  }
  return "Hi!  I'm a strict mode function!  " + nested()
}
```

## 严格模式中的变化

### 将过失错误转成异常

- 严格模式下无法再**意外创建全局变量**
- 任何在正常模式下引起**静默失败的赋值操作** (给不可写属性赋值, 给只读属性(getter-only)赋值, 给不可扩展对象(non-extensible object)的新属性赋值) 都会**抛出异常**。比如 给 `NaN` 赋值会抛出一个异常
- 严格模式要求函数的**参数名唯一**
- 严格模式禁止 以零(0)开头的八进制语法，支持为一个数字加`0o`的前缀来表示八进制数
- ECMAScript 6 中的严格模式禁止设置 原始数据类型 值的属性。不采用严格模式，设置属性将会简单忽略(no-op),采用严格模式，将抛出 `TypeError` 错误

```js
;(function() {
  'use strict'

  false.true = '' //TypeError
  'with'.you = 'far away' //TypeError
})()
```

### 简单变量的使用

- 严格模式禁用 `with`
- 严格模式下的 `eval` 不再为上层范围 (surrounding scope, 注:包围 eval 代码块的范围) 引入新变量
- 严格模式禁止删除声明变量，否则语法错误

```js
var x = 17
var evalX = eval("'use strict'; var x = 42; x")
console.log(x)
// 17

console.log(evalX)
// 42
```

### 让 `eval` 和 `argument` 变的简单

- 名称 eval 和 arguments 不能通过程序语法被绑定(be bound)或赋值
- 严格模式下，参数的值不会随 arguments 对象的值的改变而变化
- 不再支持 `arguments.callee`

```js
// 严格模式
function f(a) {
  'use strict'
  a = 42
  return [a, arguments[0]]
}
var pair = f(17)
console.log(pair[0])
// 42
console.log(pair[1])
// 17

// 非严格模式
function f2(a) {
  a = 42
  return [a, arguments[0]]
}
var pair2 = f2(17)
console.log(pair2[0])
// 42
console.log(pair2[1])
// 42
```

### 为未来的 ECMAScript 版本铺平道路

- 在严格模式中一部分字符变成了保留的关键字。包括 `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static` 和 `yield`
- 严格模式禁止了不在脚本或者函数层面上的函数声明

```js
'use strict'
if (true) {
  function f() {} // !!! 语法错误
  f()
}

for (var i = 0; i < 5; i++) {
  function f2() {} // !!! 语法错误
  f2()
}
```
