---
title: 对象
---

# 对象

## 类型

JavaScript 中一共有 7 种主要类型（术语是“语言类型”）：

- string
- boolean
- symbol
- number
- null
- undefined
- object

> 简单基本类型（ string 、 boolean 、 number 、 null、symbol 和 undefined ）本身并不是对象。 null 有时会被当作一种对象类型，但是这其实只是语言本身的一个 bug，即对 null 执行 `typeof null` 时会返回字符串 "object" 。 实际上， null 本身是基本类型。

## 内置对象

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error

> null 和 undefined 没有对应的构造形式，它们只有文字形式。相反， Date 只有构造，没有文字形式。

> 对于 Object 、 Array 、 Function 和 RegExp （正则表达式）来说，无论使用文字形式还是构造形式，它们都是对象，不是字面量。

## 对象和属性

一个对象的属性名可以是任何有效的 `JavaScript` 字符串，或者可以被转换为字符串的任何类型，包括空字符串。然而，一个属性的名称如果不是一个有效的 `JavaScript` 标识符（例如，一个由**空格或连字符，或者以数字开头的属性名**），就只能通过**方括号**标记访问。

### 枚举一个对象的所有属性

- `for...in` 循环
  该方法依次访问一个**对象及其原型链**中所有可枚举的属性。可以使用 `Object.hasOwnProperty` 筛选出对象自身的可枚举属性
- `Object.keys(o)`
  该方法返回对象 `o` 自身包含（**不包括原型中**）的所有**可枚举**属性的名称的数组
- `Object.getOwnPropertyNames(o)`
  该方法返回对象 `o` 自身包含（**不包括原型中**）的所有属性(**无论是否可枚举**)的名称的数组

### 属性类型

- value: 属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。这个特性的默认值为 undefined 。
- writable: 能否修改属性的值
- enumerable: 能否通过 `for-in` 循环返回属性
- configurable: 能否通过 `delete` 删除属性从而重新定义属性。一旦把该属性设置为 false，就不能再把它设置为 true 了。

> 通过 `Object.defineProperty` 和 `Object.defineProperties` 进行设置

#### 获取属性描述符

`Object.getOwnPropertyDescriptor(obj, property)`

```js
var myObject = {
  a: 2,
}
Object.getOwnPropertyDescriptor(myObject, 'a')
// {
//   value: 2,
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

### 防篡改对象

- `Object.preventExtensions(obj)`: 禁止给对象 obj 添加属性和方法。检测`Object.isExtensible(obj)`
- `Object.seal(obj)`: 不能添加/删除 属性和方法。检测`Object.isSealed(obj)`
- `Object.freeze(obj)`: 不能添加/删除/修改 属性和方法。检测`Object.isFrozen()`

## 创建新对象

### 使用对象初始化器

```js
var obj = {
  property_1: value_1, // property_# 可以是一个标识符...
  2: value_2, // 或一个数字...
  ['property' + 3]: value_3, //  或一个可计算的key名...
  // ...,
  'property n': value_n,
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

当 `JavaScript` 执行 `new` 操作符时，它会先创建一个普通对象，并将这个普通对象中的 `[[prototype]]` 指向 `Car.prototype` ，然后再把这个普通对象设置为执行 `Car` 构造函数时 `this` 的值。该普通对象的 `[[Prototype]]` 决定其用于检索属性的原型链。当构造函数执行完成后，所有的属性都被设置完毕，`JavaScript` 返回之前创建的对象，通过赋值语句将它的引用赋值给变量 `mycar`。

1. 新生成了一个对象
2. 链接到原型
3. 绑定 this
4. 返回新对象

#### 作用域安全的构造函数

```js
function Polygon(sides) {
  if (this instanceof Polygon) {
    this.sides = sides
    this.getArea = function () {
      return 0
    }
  } else {
    return new Polygon(sides)
  }
}

function Rectangle(width, height) {
  Polygon.call(this, 2)
  this.width = width
  this.height = height
  this.getArea = function () {
    return this.width * this.height
  }
}
var rect = new Rectangle(5, 10)
console.log(rect.sides) //undefined
```

> 由于 Polygon 构造函数是作用域安全的， this 对象并非 Polygon 的实例，所以会创建并返回一个新的 Polygon 对象。 Rectangle 构造函数中的 this 对象并没有得到增长，同时 Polygon.call() 返回的值也没有用到，所以 Rectangle 实例中就不会有 sides 属性

如果构造函数窃取结合使用原型链或者寄生组合则可以解决这个问题。

```js
// 添加
Rectangle.prototype = new Polygon()
var rect = new Rectangle(5, 10)
console.log(rect.sides) //2
```

### 使用 `Object.create` 方法

```js
// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // 属性默认值
  displayType: function () {
    // 用于显示type属性的方法
    console.log(this.type)
  },
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
  },
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
  get: function () {
    return this.getFullYear()
  },
  set: function (y) {
    this.setFullYear(y)
  },
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
    get: function () {
      return this.a + 1
    },
  },
  c: {
    set: function (x) {
      this.a = x / 2
    },
  },
})

o.c = 10
console.log(o.b) // 6
```

## 继承与原型链

当谈到继承时，`JavaScript` 只有一种结构：对象。每个实例对象（ `object` ）都有一个私有属性（称之为 **proto** ）指向它的**构造函数的原型对象**（`prototype`）。该原型对象也有一个自己的原型对象( **proto** ) ，层层向上直到一个对象的原型对象为 `null`。根据定义，`null` 没有原型，并作为这个原型链中的最后一个环节。

### 原型链

`someObject.[[Prototype]]` 符号是用于指向 `someObject` 的原型。从 ECMAScript 6 开始，`[[Prototype]]` 可以通过 `Object.getPrototypeOf()` 和 `Object.setPrototypeOf()` 访问器来访问/设置。这个等同于 `JavaScript` 的非标准但许多浏览器实现的属性 `__proto__`。

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

console.log(o.b) // 2
// b是o的自身属性吗？是的，该属性的值为 2
// 原型上也有一个'b'属性，但是它不会被访问到。
// 这种情况被称为"属性遮蔽 (property shadowing)"

console.log(o.c) // 4
console.log(o.d) // undefined
```

> 所有的函数会有一个特别的属性 —— `prototype`

#### 属性设置和屏蔽

```js
myObject.foo = 'bar'
```

- 如果 `myObject` 对象中包含名为 `foo` 的普通数据访问属性，这条赋值语句只会修改已有的属性值。
- 如果 `foo` 不是直接存在于 `myObject` 中， `[[Prototype]]` 链就会被遍历，类似 `[[Get]]` 操作。如果原型链上找不到 `foo` ， `foo` 就会被直接添加到 `myObject` 上。
- 如果属性名 `foo` 既出现在 `myObject` 中也出现在 `myObject` 的 `[[Prototype]]` 链上层，那么就会发生屏蔽。 `myObject` 中包含的 `foo` 属性会屏蔽原型链上层的所有 `foo` 属性，因为 `myObject.foo` 总是会选择原型链中最底层的 `foo` 属性。
- 如果 `foo` 不直接存在于 `myObject` 中而是存在于原型链上层时 `myObject.foo = "bar"` 会出现的三种情况。
  1. 如果在 `[[Prototype]]` 链上层存在名为 `foo` 的普通数据访问属性并且没有被标记为只读（ `writable:false` ），那就会直接在 `myObject` 中添加一个名为 foo 的新属性，它是屏蔽属性。
  2. 如果在 `[[Prototype]]` 链上层存在 `foo` ，但是它被标记为只读（ `writable:false` ），那么**无法修改已有属性或者在 myObject 上创建屏蔽属性**。如果运行在严格模式下，代码会抛出一个错误。否则，这条赋值语句会被忽略。总之，不会发生屏蔽。
  3. 如果在 `[[Prototype]]` 链上层存在 `foo` 并且它是一个 `setter`，那就一定会调用这个 `setter`。 `foo` 不会被添加到（或者说屏蔽于） `myObject` ，也不会重新定义 `foo` 这个 `setter`。

有些情况下会隐式产生屏蔽，一定要当心。思考下面的代码：

```js
var anotherObject = {
  a: 2,
}

var myObject = Object.create(anotherObject)

anotherObject.a // 2
myObject.a // 2

anotherObject.hasOwnProperty('a') // true
myObject.hasOwnProperty('a') // false

myObject.a++ // 隐式屏蔽！

anotherObject.a // 2
myObject.a // 3
myObject.hasOwnProperty('a') // true
```

> 尽管 `myObject.a++` 看起来应该（通过委托）查找并增加 `anotherObject.a` 属性，但是别忘 了 ++ 操作相当于 `myObject.a = myObject.a + 1` 。因此 ++ 操作首先会通过 [[Prototype]] 查找属性 a 并从 `anotherObject.a` 获取当前属性值 2，然后给这个值加 1，接着用 [[Put]] 将值 3 赋给 myObject 中新建的屏蔽属性 a

### 原型继承

```js
function Foo(name) {
  this.name = name
}
Foo.prototype.myName = function () {
  return this.name
}

function Bar(name, label) {
  Foo.call(this, name)
  this.label = label
}
// 我们创建了一个新的 Bar.prototype 对象并关联到 Foo.prototype
Bar.prototype = Object.create(Foo.prototype)

// 注意！现在 Bar.prototype.constructor 指向的是 Foo
// Bar.prototype.constructor === Foo // true
// 如果你需要指向Bar的话可能需要手动修复一下它
Bar.prototype.constructor = Bar

Bar.prototype.myLabel = function () {
  return this.label
}

var a = new Bar('a', 'obj a')
a.myName() // "a"
a.myLabel() // "obj a"
```

> 这段代码的核心部分就是语句 `Bar.prototype = Object.create( Foo.prototype )` 。调用 `Object.create(..)` 会凭空创建一个“新”对象并把新对象内部的 `[[Prototype]]` 关联到你 指定的对象（本例中是 `Foo.prototype` ）

声明 `function Bar() { .. }` 时，和其他函数一样， `Bar` 会有一个 `.prototype` 关联到默认的 对象，但是这个对象并不是我们想要的 `Foo.prototype` 。因此我们创建了一个新对象并把它关联到我们希望的对象上，直接把原始的关联对象抛弃掉。

下面这两种方式是常见的错误做法，实际上它们都存在一些问题：

```js
// 和你想要的机制不一样！
Bar.prototype = Foo.prototype
// 基本上满足你的需求，但是可能会产生一些副作用 :(
Bar.prototype = new Foo()
```

`Bar.prototype = Foo.prototype` 并不会创建一个关联到 `Bar.prototype` 的新对象，它只 是让 `Bar.prototype` 直接引用 `Foo.prototype` 对象。因此当你执行类似 `Bar.prototype.myLabel = ...` 的赋值语句时会直接修改 `Foo.prototype` 对象本身。显然这不是你想要的结果，否则你根本不需要 `Bar` 对象，直接使用 `Foo` 就可以了，这样代码也会更简单一些。

`Bar.prototype = new Foo()` 的确会创建一个关联到 `Bar.prototype` 的新对象。但是它使用 了 `Foo(..)` 的“构造函数调用”，如果函数 Foo 有一些副作用（比如写日志、修改状态、注册到其他对象、给 `this` 添加数据属性，等等）的话，就会影响到 `Bar()` 的“后代”，后果不堪设想。

两种把 `Bar.prototype` 关联到 `Foo.prototype` 的方法：

```js
// ES6 之前需要抛弃默认的 Bar.prototype
Bar.ptototype = Object.create(Foo.prototype)
// ES6 开始可以直接修改现有的 Bar.prototype
Object.setPrototypeOf(Bar.prototype, Foo.prototype)
```

#### 检查“类”关系 instanceof

`instanceof` 操作符的左操作数是一个普通的对象，右操作数是一个函数。 `instanceof` 回答的问题是：在 a 的整条 `[[Prototype]]` 链中是否有指向 `Foo.prototype` 的对象？

判断两个对象之间的关系：

- `b.isPrototypeOf(c)`: b 是否出现在 c 的 [[Prototype]] 链中？

```js
// 使用原型继承中的例子，Bar 继承了 Foo
var bObj = new Bar()
bObj instanceof Bar // true
bObj instanceof Foo // true
Foo.prototype.isPrototypeOf(bObj) // true
Bar.prototype.isPrototypeOf(bObj) // true
```

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
  addVertex: function (v) {
    this.vertices.push(v)
  },
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

##### class 陷阱

class 并不会像传统面向类的语言一样在声明时静态复制所有行为。如果你 （有意或无意）修改或者替换了父“类”中的一个方法，那子“类”和所有实例都会受到 影响，因为它们在定义时并没有进行复制，只是使用基于 `[[Prototype]]` 的实时委托：

```js
class People {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log('Hi, I am', this.name)
  }
}

let mei = new People('mei')
mei.sayName() // Hi, I am mei

People.prototype.sayName = function () {
  console.log('Hello, I am', this.name)
}

mei.sayName() // Hello, I am mei
```

## 执行上下文

JS 解释器在遇到**非匿名的立即执行函数**时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到 foo，但是这个值又是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数

```js
;(function foo() {
  foo = 10
  console.log(foo)
})() // -> ƒ foo() { foo = 10 ; console.log(foo) }
```

## 行为委托

回顾原型链：`[[Prototype]]` 机制就是指对象中的一个内部链接引用
另一个对象。
如果在第一个对象上没有找到需要的属性或者方法引用，引擎就会继续在 `[[Prototype]]`
关联的对象上进行查找。同理，如果在后者中也没有找到需要的引用就会继续查找它的
`[[Prototype]]`，以此类推。这一系列对象的链接被称为“原型链”。
换句话说，`JavaScript` 中这个机制的本质就是对象之间的关联关系

### 面向委托的设计

把思路从类和继承的设计模式转换到委托行为的设计模式

- 典型的（“原型”）面向对象风格

```js
function Foo(who) {
  this.me = who
}
Foo.prototype.identify = function () {
  return 'I am ' + this.me
}
function Bar(who) {
  Foo.call(this, who)
}
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.speak = function () {
  alert('Hello, ' + this.identify() + '.')
}

var b1 = new Bar('b1')
var b2 = new Bar('b2')
b1.speak()
b2.speak()
```

- 对象关联风格

```js
Foo = {
  init: function (who) {
    this.me = who
  },
  identify: function () {
    return 'I am ' + this.me
  },
}
Bar = Object.create(Foo)
Bar.speak = function () {
  alert('Hello, ' + this.identify() + '.')
}
var b1 = Object.create(Bar)
b1.init('b1')
var b2 = Object.create(Bar)
b2.init('b2')
b1.speak()
b2.speak()
```

- 类风格代码的思维模型
  ![](https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/this%20%26%20object%20prototypes/fig4.png)

- 简化版的图
  ![](https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/this%20%26%20object%20prototypes/fig5.png)

- 对象关联风格<br/>
  ![](https://github.com/getify/You-Dont-Know-JS/raw/1st-ed/this%20%26%20object%20prototypes/fig6.png)

> 图片来自 https://github.com/getify/You-Dont-Know-JS

## 其他

### 原始类型优于封装对象

1. 当对原始值提取属性和进行方法调用时，它表现得就像已经使用了对应的对象类型封装了该值一样，隐式封装

```js
console.log('hello'.toUpperCase()) // HELLO

var str = 'hello'
str.child = 'world'
console.log(str.child) // undefined
```

> 不可以对原始值设置属性，无效。因为每次隐式封装都会产生一个新的 String 对象，更新第一个封装对象并不会造成持久的影响。

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

### 一些 API

#### Object.is

```js
;-0 === 0 // true
Object.is(-0, 0) // false

NaN === NaN // false
Object.is(NaN, NaN) // true
```

##### polyfill

```js
if (!Object.is) {
  Object.defineProperty(Object, 'is', {
    value: function (x, y) {
      // SameValue algorithm
      if (x === y) {
        // return true if x and y are not 0, OR
        // if x and y are both 0 of the same sign.
        // This checks for cases 1 and 2 above.
        return x !== 0 || 1 / x === 1 / y
      } else {
        // return true if both x AND y evaluate to NaN.
        // The only possibility for a variable to not be strictly equal to itself
        // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
        // This checks for case 3.
        return x !== x && y !== y
      }
    },
  })
}
```

> 其他和 `===` 一样
> [Object.is | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

## 应用

### 复制对象

[js-clone-functions|blog](https://sluggishpj.github.io/blog/2018/03/12/js-clone-functions/)

### `Object.create` 实现

```js
function EmptyConstructor() {}

function create(O, Properties) {
  var result

  EmptyConstructor.prototype = O
  result = new EmptyConstructor()
  EmptyConstructor.prototype = null

  result.__proto__ = O

  return Properties === undefined ? result : Object.defineProperties(result, Properties)
}
```
