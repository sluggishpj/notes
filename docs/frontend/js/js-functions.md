---
title: 函数
---

# 函数

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

## 可变长度的参数列表

### 函数的 length 属性

函数的 length 属性等于该函数声明时所要传入的**形参**数量

```js
function bar(a) {}
function foo(a, b, c) {}

console.log(bar.length) // 1
console.log(foo.length) // 3
```

> 通过其 length 属性，可以知道声明了多少命名参数
>
> 通过 `arguments.length`，可以知道在调用时传入了多少参数
>
> 利用参数个数的差异创建重载函数

### 利用参数的个数进行函数重载

```js
function addMethod(object, name, fn) {
  const old = object[name]
  object[name] = function() {
    if (fn.length == arguments.length) {
      return fn.apply(this, arguments)
    } else if (typeof old === 'function') {
      return old.apply(this, arguments)
    }
  }
}

const myobj = {}

addMethod(myobj, 'a', function() {
  console.log('0个参数')
})
addMethod(myobj, 'a', function(n) {
  console.log('1个参数', n)
})
addMethod(myobj, 'a', function(n1, n2) {
  console.log('两个参数', n1, n2)
})

myobj.a() // 0个参数
myobj.a(1) // 1个参数 1
myobj.a(1, 2) // 两个参数 1 2
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

### 循环和闭包

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
// 依次输出5个 6
```

> 尽管循环中的五个函数是在各个迭代中分别定义的， 但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个 i。使用 let/const 就不会有这问题

```js
for (var i = 1; i <= 5; i++) {
  ;(function() {
    setTimeout(function timer() {
      console.log(i)
    }, i * 1000)
  })()
}
// 依次输出5个 6
```

> 如果作用域是空的，那么仅仅将它们进行封闭是不够的。

```js
for (var i = 1; i <= 5; i++) {
  ;(function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}
// 依次输出 1 2 3 4 5
```

### 性能考量

如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。原因是这将导致每次构造器被调用时，方法都会被重新赋值一次（也就是说，对于每个对象的创建，方法都会被重新赋值）。

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

## 高阶函数

将函数作为参数或返回值的函数，像 `Array.prototype.map`, `Array.prototype.forEach` 等

## 偏应用函数

### 函数科里化

> https://github.com/mqyqingfeng/Blog/issues/42

```js
// 第1版
function curry(fn, ...args1) {
  return function(...args2) {
    return fn.apply(this, [...args1, ...args2])
  }
}

function add(a, b) {
  return a + b
}

var addCurry = curry(add, 1, 2)
console.log(addCurry()) // 3

//或者
var addCurry = curry(add, 1)
console.log(addCurry(2)) // 3

//或者
var addCurry = curry(add)
console.log(addCurry(1, 2)) // 3
```

```js
// 第2版
function subCurry(fn, ...args1) {
  return function(...args2) {
    return fn.apply(this, [...args1, ...args2])
  }
}

function curry(fn, length = fn.length) {
  return function(...args1) {
    if (args1.length >= length) {
      // 参数个数符合要求
      return fn.apply(this, args1)
    }
    return curry(subCurry.call(this, fn, ...args1), length - args1.length)
  }
}

const fn = curry(function(a, b, c) {
  return [a, b, c]
})

console.log(fn('a', 'b', 'c')) // ["a", "b", "c"]
console.log(fn('a', 'b')('c')) // ["a", "b", "c"]
console.log(fn('a')('b')('c')) // ["a", "b", "c"]
console.log(fn('a')('b', 'c')) // ["a", "b", "c"]
```

### “分部”函数

```js
function partialArg(fn, ...args1) {
  return function(...args2) {
    let allArg = args1
    let j = 0
    allArg.forEach((v, idx) => {
      if (v === undefined) {
        allArg[idx] = args2[j++]
      }
    })

    return fn.apply(null, allArg)
  }
}

const delay = partialArg(setTimeout, undefined, 2000)
delay(() => {
  console.log('delay 2s') // 2秒后输出
})
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions
>
> `<<JavaScript 忍者秘籍>>`
