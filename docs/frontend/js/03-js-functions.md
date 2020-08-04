---
title: 函数
---

## 定义函数

### 函数表达式

```js
var square = function(number) {
  return number * number
}

// 函数表达式也可以提供函数名，并且可以用于在函数内部代指其本身
// 或者在调试器堆栈跟踪中识别该函数
var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1)
}
```

## 作用域和函数堆栈

### 递归

一个函数可以指向并调用自身。有三种方法可以达到这个目的：

- 函数名
- arguments.callee【**严格模式下禁止禁止使用**】
- 作用域下的一个指向该函数的变量名

```js
function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n
}

function factorial2(n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n
}
```

将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用堆栈。事实上，递归函数就使用了堆栈：函数堆栈。

```js
function foo(i) {
  if (i < 0) return
  console.log('begin:' + i)
  foo(i - 1)
  console.log('end:' + i)
}
foo(3)

// 输出:

// begin:3
// begin:2
// begin:1
// begin:0
// end:0
// end:1
// end:2
// end:3
```

### 嵌套函数和闭包

在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的表达式（通常是函数）。

- 内部函数只可以在外部函数中访问。
- 内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。

### 保存变量

```js
function outside(x) {
  function inside(y) {
    return x + y
  }
  return inside
}
fn_inside = outside(3) // 可以这样想：给一个函数，使它的值加3
result = fn_inside(5) // returns 8

result1 = outside(3)(5) // returns 8
```

一个闭包必须保存它可见作用域中所有参数和变量。因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的 inside 没有再被引用时，内存才会被释放。

## 闭包

当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。
【函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。】

函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起构成闭包（closure）。也就是说，闭包可以让你从内部函数访问外部函数作用域。在 JavaScript 中，每当函数被创建，就会在函数生成时生成闭包。

### 性能考量

如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。原因是这将导致每次构造器被调用时，方法都会被重新赋值一次（也就是说，对于每个对象的创建，方法都会被重新赋值）。

## 箭头函数

### this 的用法

在箭头函数出现之前，每一个新函数都重新定义了自己的 this 值（在构造函数中是一个新的对象；在严格模式下是未定义的；在作为“对象方法”调用的函数中指向这个对象；等等）

```js
function Person() {
  // 构造函数Person()将`this`定义为自身
  this.age = 0

  setInterval(function growUp() {
    // 在非严格模式下，growUp()函数将`this`定义为“全局对象”，
    // 这与Person()定义的`this`不同，
    // 所以下面的语句不会起到预期的效果。
    this.age++
  }, 1000)
}

var p = new Person()
```

通过把 this 的值赋值给一个变量可以修复这个问题

```js
function Person() {
  var self = this // 有的人习惯用`that`而不是`self`，
  // 无论你选择哪一种方式，请保持前后代码的一致性
  self.age = 0

  setInterval(function growUp() {
    // 以下语句可以实现预期的功能
    self.age++
  }, 1000)
}
```

箭头函数捕捉闭包上下文的 this 值，所以下面的代码工作正常

```js
function Person() {
  this.age = 0

  setInterval(() => {
    this.age++ // 这里的`this`正确地指向person对象
  }, 1000)
}

var p = new Person()
```

## 块级函数

从 ECMAScript 6 开始，在**严格模式**下，块里的函数作用域为这个块。ECMAScript 6 之前不建议块级函数在严格模式下使用。

```js
'use strict'

function f() {
  return 1
}

{
  function f() {
    return 2
  }
}

f() === 1 // true

// f() === 2 in non-strict mode
```

### 非严格模式下的块级函数

**不要用**

```js
if (shouldDefineZero) {
  function zero() {
    // DANGER: 兼容性风险
    console.log('This is zero.')
  }
}
```

> 在**严格模式**下，所有支持 ECMAScript 6 的浏览器以相同的方式处理：只有在 shouldDefineZero 为 true 的情况下定义 zero，并且作用域只是这个块内。然而，这是标准的新的一部分。由于历史遗留问题，无论这个块是否执行，**一些浏览器会定义 zero**。

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions
