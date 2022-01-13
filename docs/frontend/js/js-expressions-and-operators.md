---
title: 表达式和运算符
---

# 表达式和运算符

## 运算符

### 四则运算

只有当**加法**运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。**其他运算**只要其中一方是数字，那么另一方就转为数字。并且加法运算会触发三种类型转换：将值转换为原始值，转换为数字，转换为字符串。

```js
1 + '1' // '11'
2 * '2' // 4
;[1, 2] + [2, 1] // '1,22,1'
// [1, 2].toString() -> '1,2'
// [2, 1].toString() -> '2,1'
// '1,2' + '2,1' = '1,22,1'
```

### 相等操作符 ==

`==` 和 `!=` 使用以下算法比较 2 个操作数

- 如果两个操作数都是对象，则仅当两个操作数都引用同一个对象时才返回 `true`
- 如果一个操作数是 `null`，另一个操作数是 `undefined`，则返回 true
- 如果两个操作数是不同类型的，就会尝试在比较之前将它们转换为相同类型：
  - 当数字与字符串进行比较时，会尝试将字符串转换为数字值
  - 如果操作数之一是 `Boolean`，则将布尔操作数转换为 1 或 0
    - 如果是 `true`，则转换为 1。
    - 如果是 `false`，则转换为 0。
  - 如果操作数之一是对象，另一个是数字或字符串，会尝试使用对象的 `valueOf()`和 `toString()`方法将对象转换为数字。
- 如果操作数具有相同的类型，则将它们进行如下比较：
  - `String`：`true` 仅当两个操作数具有相同顺序的相同字符时才返回。
  - `Number`：`true` 仅当两个操作数具有相同的值时才返回。`+0` 并被`-0` 视为相同的值。如果任一操作数为 `NaN`，则返回 `false`。
  - `Boolean`：`true` 仅当操作数为两个 `true` 或两个时才返回 `false`。

`[] == ![] // -> true`

```js
// [] 转成 true，然后取反变成 false
[] == false

[] == ToNumber(false)
[] == 0

ToPrimitive([]) == 0
// [].toString() -> ''
'' == 0

0 == 0 // -> true
```

> [Abstract Equality Comparison Algorithm | ES5](https://262.ecma-international.org/5.1/#sec-11.9.3) 定义了 `==` 运算符的行为

### 赋值运算符

```js
x += y // 加[减乘除]
x ** = y // 求幂赋值
x %= y // 求余赋值

x <<= y // 左移位赋值，向左被移出的位被丢弃，右侧用 0 补充
x >>= y // 有符号右移赋值，向右被移出的位被丢弃，拷贝最左侧的位以填充左侧
x >>>= y // 无符号右移位赋值，向右被移出的位被丢弃，左侧用 0 填充

x &= y // 按位与赋值
x ^= y // 按位异或赋值
x |= y // 按位或赋值
```

### 位运算符

#### 位逻辑运算工作流程

- 操作数被转换为 **32bit** 整数，以位序列（0 和 1 组成）表示.若超过 32bits，则取低位 32bit，如下所示：

```js
Before: 11100110111110100000000000000110000000000001
After: 10100000000000000110000000000001
```

- 第一个操作数的每一位都与第二个操作数的对应位组对: 第一位对应第一位,第二位对应第二位,以此类推
- 运算符被应用到每一对"位"上, 最终的运算结果由每一对“位”的运算结果组合起来

```js
~15 === -16 // true

// 二进制描述
// ~00000000...00001111 = 11111111...11110000
```

> 运算符“非”将所有的 32 位取反，而值的最高位(最左边的一位)为 1 则表示负数(补码表示法)。

### 一元运算符

#### delete

删除一个对象或一个对象的属性或者一个数组中某一个键值。语法如下

```js
delete objectName
delete objectName.property
delete objectName[index]
delete property // 只在with声明的状态下是合法的， 从对象中删除一个属性
```

如果 delete 操作成功，属性或者元素会变成 undefined。如果 delete 可行会返回 true，如果不成功返回 false

##### 删除数组元素

使用`delete`删除数组中的元素时，数组的**长度是不变**的，但这个元素就不在数组中了。例如，`trees[3]`被删除，`trees[3]` 仍然可寻址并返回 `undefined`

```js
var trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple')
delete trees[3]
if (3 in trees) {
  // 不会被执行
}
```

如果想让数组中存在一个元素但是是 `undefined` 值，使用 `undefined` 关键字而不是 `delete` 操作。 如下： `trees[3]` 分配一个 `undefined`,但是这个数组元素仍然存在:

```js
var trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple')
trees[3] = undefined
if (3 in trees) {
  // 会被执行
}
```

#### typeof

- 语法

```js
typeof operand
```

> 括号可选

- 例子

```js
var str = 'round'
var boo = true
var bigInt = 1n
var sym = Symbol()
var obj = {}
var fun = new Function('5 + 2')
var undef1 = undefined
var num = 1

typeof str // "string"
typeof boo // "boolean"
typeof bigInt // "bigint"
typeof sym // "symbol"
typeof obj // "object"
typeof fun // "function"
typeof undef1 // "undefined"
typeof num // "number"

typeof undef2 // "undefined"
typeof null // "object"
```

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

#### void

- 使用方法

```js
void expression
```

> expression 是 javaScript 表达式

```js
<a href="javascript:void(0)">Click here to do nothing</a>
```

当用户单击该文本时，不会有任何效果

### 关系操作符

#### in

如果所指定的属性确实存在于所指定的对象中，则会返回 true

```js
var mycar = { make: 'Honda', model: 'Accord', year: 1998 }
'make' in mycar // returns true
```

### 运算符优先级

```js
true || (false && false) // true
;(true || false) && false // false
true || (false && false) // true
```

> `&&` 优先级高于 `||` 优先级。[操作符优先级|MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## this

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this

### 种类

#### 全局上下文

在全局执行环境中（在任何函数体外部）`this` 都指向全局对象

```js
// 在浏览器中, window 对象同时也是全局对象：
console.log(this === window) // true
```

#### 函数上下文

`this` 的值取决于函数被调用的方式。

- 非严格模式下

```js
function f1() {
  return this
}
// 在浏览器中：
f1() === window //在浏览器中，全局对象是window

// 在 Node中：
f1() === globalThis
```

- 严格模式下，`this` 为 `undefined`

```js
function f2() {
  'use strict' // 这里是严格模式
  return this
}

f2() === undefined // true
```

#### 类上下文

在类的构造函数中，`this` 是一个常规对象。类中所有非静态的方法都会被添加到 `this` 的原型中

```js
class Example {
  constructor() {
    const proto = Object.getPrototypeOf(this)
    console.log(Object.getOwnPropertyNames(proto))
  }
  first() {}
  second() {}
  static third() {}
}

new Example() // ['constructor', 'first', 'second']
```

#### 派生类

不像基类的构造函数，派生类的构造函数没有初始的 `this` 绑定。在构造函数中调用 `super()` 会生成一个 `this` 绑定，并相当于执行如下代码, `Base` 为基类：

```js
this = new Base()
```

#### call & apply

- 在**非严格模式**下使用 `call` 或者 `apply` 时，如果第一个参数被指定为 `null` 或 `undefined`，那么函数执行时的 `this` 指向全局对象（浏览器环境中是 `window`）；如果第一个参数被指定为**原始值**，该原始值会被包装。
- 严格模式下则第一个参数传啥，函数执行时的 `this` 中就是啥

#### bind

调用 `f.bind(someObject)` 会创建一个与 `f` 具有相同函数体和作用域的函数，但是在这个新函数中, `this` 将永久地被绑定到了 `bind` 的第一个参数，无论这个函数是如何被调用的。

#### 箭头函数

在箭头函数中，`this` 与**封闭词法环境**的 `this` 保持一致。在全局代码中，它将被设置为全局对象

```js
var globalObject = this
var foo = () => this
console.log(foo() === globalObject) // true
```

> 如果将 this 传递给 call、bind、或者 apply 来调用箭头函数，它将被忽略。不过你仍然可以为调用添加参数，不过第一个参数（thisArg）应该设置为 null。

```js
// 接着上面的代码
// 作为对象的一个方法调用
var obj = { foo: foo }
console.log(obj.foo() === globalObject) // true

// 尝试使用call来设定 this
console.log(foo.call(obj) === globalObject) // true

// 尝试使用bind来设定 this
foo = foo.bind(obj)
console.log(foo() === globalObject) // true
```

foo 的 `this` 被设置为它 **被创建时的环境**（在上面的例子中，就是全局对象）。这同样适用于在其他函数内创建的箭头函数：这些箭头函数的 `this` 被设置为封闭的词法环境的。

```js
// 创建一个含有bar方法的obj对象，
// bar返回一个函数，
// 这个函数返回this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的this被永久绑定到了它外层函数的this。
// bar的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
  bar: function () {
    var x = () => this
    return x
  },
}

// 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
// 将返回的函数的引用赋值给fn。
var fn = obj.bar()

// 直接调用fn而不设置this，
// 通常(即不使用箭头函数的情况)默认为全局对象
// 若在严格模式则为undefined
console.log(fn() === obj) // true

// 但是注意，如果你只是引用obj的方法，
// 而没有调用它
var fn2 = obj.bar
// 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
console.log(fn2()() == window) // true
```

> 一个赋值给了 `obj.bar` 的函数（称为匿名函数 A），返回了另一个箭头函数（称为匿名函数 B）。因此，在 A 调用时，函数 B 的 `this` 被永久设置为 `obj.bar`（函数 A）的 `this`。当返回的函数（函数 B）被调用时，它 `this` 始终是最初设置的。在上面的代码示例中，函数 B 的 `this` 被设置为函数 A 的 `this`，即 `obj`，所以即使被调用的方式通常将其设置为 undefined 或全局对象（或者如前面示例中的其他全局执行环境中的方法），它的 `this` 也仍然是 `obj` 。

```js
function foo() {
  // 返回一个箭头函数
  return (a) => {
    // this 继承自 foo()
    console.log(this.a)
  }
}

var obj1 = {
  a: 2,
}

var obj2 = {
  a: 3,
}

var bar = foo.call(obj1)

bar.call(obj2) // 2, 不是 3 ！
```

> foo() 内部创建的箭头函数会捕获调用时 foo() 的 this 。由于 foo() 的 this 绑定到 obj1， bar （引用箭头函数）的 this 也会绑定到 obj1 ，箭头函数的绑定无法被修改。（ new 也不 行！）

#### 作为对象的方法

当函数作为对象里的方法被调用时，this 被设置为调用该函数的对象

```js
var o = {
  prop: 37,
  f: function () {
    return this.prop
  },
}

console.log(o.f()) // 37
```

##### 原型链中的 `this`

如果该方法存在于一个对象的原型链上，那么 this 指向的是调用这个方法的对象，就像该方法就在这个对象上一样。

```js
var o = {
  f: function () {
    return this.a + this.b
  },
}
var p = Object.create(o)
p.a = 1
p.b = 4

console.log(p.f()) // 5
```

##### getter/setter 中的 `this`

相同的概念也适用于当函数在一个 `getter` 或者 `setter` 中被调用。用作 `getter` 或 `setter` 的函数都会把 `this` 绑定到设置或获取属性的对象

```js
function sum() {
  return this.a + this.b + this.c
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3
  },
}

Object.defineProperty(o, 'sum', {
  get: sum,
  enumerable: true,
  configurable: true,
})

console.log(o.average, o.sum) // logs 2, 6
```

#### 作为构造函数 `new`

虽然构造函数返回的默认值是 `this` 所指的那个对象，但它仍可以手动返回其他的对象（如果返回值不是一个对象，则返回 `this` 对象）。

```js
/*
 * 构造函数这样工作:
 *
 * function MyConstructor(){
 *   // 函数实体写在这里
 *   // 根据需要在this上创建属性，然后赋值给它们，比如：
 *   this.fum = "nom";
 *   // 等等...
 *
 *   // 如果函数具有返回对象的 return 语句，
 *   // 则该对象将是 new 表达式的结果。
 *   // 否则，表达式的结果是当前绑定到 this 的对象。
 *   //（即通常看到的常见情况）。
 * }
 */

function C() {
  this.a = 37
}

var o = new C()
console.log(o.a) // logs 37

function C2() {
  this.a = 37
  return { a: 38 }
}

o = new C2()
console.log(o.a) // logs 38
```

#### 作为一个 DOM 事件处理函数

当函数被用作事件处理函数时，它的 this 指向触发事件的元素

```js
// 被调用时，将关联的元素变成蓝色
function bluify(e) {
  console.log(this === e.currentTarget) // 总是 true

  // 当 currentTarget 和 target 是同一个对象时为 true
  console.log(this === e.target)
  this.style.backgroundColor = '#A5D9F3'
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName('*')

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', bluify, false)
}
```

#### 作为一个内联事件处理函数

```js
<button onclick="alert(this.tagName.toLowerCase());">Show this</button>
```

> 上面的 alert 会显示 button。注意只有外层代码中的 this 是这样设置的：

```html
<button onclick="alert((function(){return this})());">Show inner this</button>
```

> 没有设置内部函数的 this，所以它指向 global/window 对象（即非严格模式下调用的函数未设置 this 时指向的默认对象）

### 优先级

`new 绑定 > 显式绑定(call/apply) > 隐式绑定(对象方法)`

### 判断 this

- 函数是否在 `new` 中调用（ `new` 绑定）？如果是的话 `this` 绑定的是新创建的对象。

```js
var bar = new foo()
```

- 函数是否通过 `call` 、 `apply` （显式绑定）或者硬绑定调用？如果是的话， `this` 绑定的是指定的对象。

```js
var bar = foo.call(obj2)
```

- 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话， this 绑定的是那个上下文对象。

```js
var bar = obj1.foo()
```

- 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined ，否则绑定到全局对象。

```js
var bar = foo()
```

## REF

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators
