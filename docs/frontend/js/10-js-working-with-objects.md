---
title: 对象
---

## 对象和属性

一个对象的属性名可以是任何有效的 `JavaScript` 字符串，或者可以被转换为字符串的任何类型，包括空字符串。然而，一个属性的名称如果不是一个有效的 `JavaScript` 标识符（例如，一个由**空格或连字符，或者以数字开头的属性名**），就只能通过**方括号**标记访问。

## 枚举一个对象的所有属性

- `for...in` 循环
  该方法依次访问一个**对象及其原型链**中所有可枚举的属性
- `Object.keys(o)`
  该方法返回对象 `o` 自身包含（不包括原型中）的所有可枚举属性的名称的数组
- `Object.getOwnPropertyNames(o)`
  该方法返回对象 `o` 自身包含（不包括原型中）的所有属性(无论是否可枚举)的名称的数组

## 创建新对象

### 使用对象初始化器

```js
var obj = {
  property_1: value_1, // property_# 可以是一个标识符...
  2: value_2, // 或一个数字...
  ['property' + 3]: value_3, //  或一个可计算的key名...
  // ...,
  'property n': value_n
} // 或一个字符串
```

### 使用构造函数

```js
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
var mycar = new Car('Eagle', 'Talon TSi', 1993)
```

### 使用 `Object.create` 方法

```js
// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // 属性默认值
  displayType: function() {
    // 用于显示type属性的方法
    console.log(this.type)
  }
}

// 创建一种新的动物——animal1
var animal1 = Object.create(Animal)
animal1.displayType() // Output:Invertebrates

// 创建一种新的动物——Fishes
var fish = Object.create(Animal)
fish.type = 'Fishes'
fish.displayType() // Output:Fishes
```

## 定义 getters 和 setters

一个 `getter` 是一个获取某个特定属性的值的方法。一个 `setter` 是一个设定某个属性的值的方法。你可以为预定义的或用户定义的对象定义 `getter` 和 `setter` 以支持新增的属性。定义 `getter` 和 `setter` 的语法采用对象字面量语法

```js
var o = {
  a: 7,
  get b() {
    return this.a + 1
  },
  set c(x) {
    this.a = x / 2
  }
}

console.log(o.a) // 7
console.log(o.b) // 8

o.c = 50
console.log(o.a) // 25
```

> `getter` `方法必须是无参数的，setter` 方法只接受一个参数(设置为新值）

使用 `Object.defineProperties` 的方法，同样也可以对一个已创建的对象在任何时候为其添加 `getter` 或 `setter` 方法。

```js
var d = Date.prototype
Object.defineProperty(d, 'year', {
  get: function() {
    return this.getFullYear()
  },
  set: function(y) {
    this.setFullYear(y)
  }
})

var now = new Date()
console.log(now.year) // 2020
now.year = 2001
console.log(now)
// Sat May 12 2001 12:12:12 GMT+0800 (中国标准时间)
```

使用 `Object.defineProperties`

```js
var o = { a: 0 }

Object.defineProperties(o, {
  b: {
    get: function() {
      return this.a + 1
    }
  },
  c: {
    set: function(x) {
      this.a = x / 2
    }
  }
})

o.c = 10
console.log(o.b) // 6
```

## 继承与原型链

当谈到继承时，`JavaScript` 只有一种结构：对象。每个实例对象（ `object` ）都有一个私有属性（称之为 **proto** ）指向它的构造函数的原型对象（`prototype`）。该原型对象也有一个自己的原型对象( **proto** ) ，层层向上直到一个对象的原型对象为 `null`。根据定义，`null` 没有原型，并作为这个原型链中的最后一个环节。

### 基于原型链的继承

`someObject.[[Prototype]]` 符号是用于指向 `someObject` 的原型。从 ECMAScript 6 开始，`[[Prototype]]` 可以通过 `Object.getPrototypeOf()` 和 `Object.setPrototypeOf()` 访问器来访问/设置。这个等同于 `JavaScript` 的非标准但许多浏览器实现的属性 **proto**。

但它不应该与构造函数 `func` 的 `prototype` 属性相混淆。被构造函数创建的实例对象的 `[[Prototype]]`指向 `func` 的 `prototype` 属性。`Object.prototype` 属性表示 `Object` 的原型对象。

```js
function f() {
  this.a = 1
  this.b = 2
}
let o = new f() // {a: 1, b: 2}

// 在f函数的原型上定义属性
f.prototype.b = 3
f.prototype.c = 4

// 不要在 f 函数的原型上直接定义 f.prototype = {b:3,c:4};这样会直接打破原型链
// o.[[Prototype]] 有属性 b 和 c
//  (其实就是 o.__proto__ 或者 o.constructor.prototype)
// o.[[Prototype]].[[Prototype]] 是 Object.prototype.
// 最后 o.[[Prototype]].[[Prototype]].[[Prototype]]是null
// 这就是原型链的末尾，即 null，
// 根据定义，null 就是没有 [[Prototype]]。

// 综上，整个原型链如下:

// {a:1, b:2} ---> {b:3, c:4} ---> Object.prototype---> null

console.log(o.a) // 1
// a是o的自身属性吗？是的，该属性的值为 1

console.log(o.b) // 2
// b是o的自身属性吗？是的，该属性的值为 2
// 原型上也有一个'b'属性，但是它不会被访问到。
// 这种情况被称为"属性遮蔽 (property shadowing)"

console.log(o.c) // 4
// c是o的自身属性吗？不是，那看看它的原型上有没有
// c是o.[[Prototype]]的属性吗？是的，该属性的值为 4

console.log(o.d) // undefined
// d 是 o 的自身属性吗？不是，那看看它的原型上有没有
// d 是 o.[[Prototype]] 的属性吗？不是，那看看它的原型上有没有
// o.[[Prototype]].[[Prototype]] 为 null，停止搜索
// 找不到 d 属性，返回 undefined
```

> 所有的函数会有一个特别的属性 —— prototype

### 使用不同的方法来创建对象和生成原型链

#### 使用语法结构创建的对象

```js
var o = { a: 1 }

// o 这个对象继承了 Object.prototype 上面的所有属性
// o 自身没有名为 hasOwnProperty 的属性
// hasOwnProperty 是 Object.prototype 的属性
// 因此 o 继承了 Object.prototype 的 hasOwnProperty
// Object.prototype 的原型为 null
// 原型链如下:
// o ---> Object.prototype ---> null

var a = ['yo', 'whadup', '?']

// 数组都继承于 Array.prototype
// (Array.prototype 中包含 indexOf, forEach 等方法)
// 原型链如下:
// a ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2
}

// 函数都继承于 Function.prototype
// (Function.prototype 中包含 call, bind等方法)
// 原型链如下:
// f ---> Function.prototype ---> Object.prototype ---> null
```

#### 使用构造器创建的对象

构造器其实就是一个普通的函数。当使用 new 操作符 来作用这个函数时，它就可以被称为构造方法（构造函数）。

```js
function Graph() {
  this.vertices = []
  this.edges = []
}

Graph.prototype = {
  addVertex: function(v) {
    this.vertices.push(v)
  }
}

var g = new Graph()
// g 是生成的对象，他的自身属性有 'vertices' 和 'edges'。
// 在 g 被实例化时，g.[[Prototype]] 指向了 Graph.prototype。
```

#### 使用 `Object.create` 创建的对象

这个方法来创建一个新对象。新对象的原型就是调用 create 方法时传入的第一个参数

```js
var a = { a: 1 }
// a ---> Object.prototype ---> null

var b = Object.create(a)
// b ---> a ---> Object.prototype ---> null
console.log(b.a) // 1 (继承而来)

var c = Object.create(b)
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null)
// d ---> null
console.log(d.hasOwnProperty) // undefined, 因为d没有继承Object.prototype
```

#### 使用 `class` 关键字创建的对象

```js
class Polygon {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength)
  }
  get area() {
    return this.height * this.width
  }
  set sideLength(newLength) {
    this.height = newLength
    this.width = newLength
  }
}

var square = new Square(2)
// square.[[Prototype]] 指向了 Square.prototype

Square.prototype
// {
//   area: NaN,
//   constructor: class Square,
//   get area: f area(),
//   set sideLength: f sideLength(newLength),
//   __proto__: f()
// }

Square.__proto__ === Polygon
// true
```

## new

创建一个 mark 对象作为 WorkerBee 的实例:

```js
var mark = new WorkerBee()
```

当 `JavaScript` 执行 `new` 操作符时，它会先创建一个普通对象，并将这个普通对象中的 `[[prototype]]` 指向 `WorkerBee.prototype` ，然后再把这个普通对象设置为执行 `WorkerBee` 构造函数时 `this` 的值。该普通对象的 `[[Prototype]]` 决定其用于检索属性的原型链。当构造函数执行完成后，所有的属性都被设置完毕，`JavaScript` 返回之前创建的对象，通过赋值语句将它的引用赋值给变量 `mark`。

1. 新生成了一个对象
2. 链接到原型
3. 绑定 this
4. 返回新对象

## 执行上下文

JS 解释器在遇到**非匿名的立即执行函数**时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到 foo，但是这个值又是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数

```js
;(function foo() {
  foo = 10
  console.log(foo)
})() // -> ƒ foo() { foo = 10 ; console.log(foo) }
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
