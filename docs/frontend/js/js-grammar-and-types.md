---
title: 语法与数据类型
---

# 语法与数据类型

## 注释

```js
// 单行

/*
多行
*/
```

> `<!-- 注释 -->` 这种注释在 JS 中也可以。不规范。(2020-05-03, browser, node)

## 声明

### 变量声明

- 变量的名字又叫做标识符。一个 JavaScript 标识符必须以**字母、下划线（\_）或者美元符号（\$）**开头，其他字符可以是字母、下划线、美元符号或数字。
- 在同一作用域中，let/const 不能使用与变量名或函数名相同的名字来命名常量。

```js
// 这会造成错误
function f() {}
const f = 5

// 这也会造成错误
function f() {
  const g = 5
  var g

  //语句
}
```

### 变量**声明**提升

- var 变量的作用域是整个函数，但仅在 var 语句出现的位置进行赋值

```js
console.log('The value of b is ' + b) // b 的值是 undefined
var b = 2

console.log('The value of c is ' + c) // 未捕获的引用错误： c 未被定义

let x
console.log('The value of x is ' + x) // x 的值是 undefined

console.log('The value of y is ' + y) // 未捕获的引用错误： y 未被定义
let y
```

> 访问一个**未声明**的变量会导致抛出一个引用错误（ReferenceError）异常

### 变量的作用域

- 全局变量：在函数之外声明的变量
- 局部变量：在函数内部声明的变量

ECMAScript 6 之前的 JavaScript 没有 语句块 作用域；相反，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。

```js
if (true) {
  var x = 5
}
console.log(x) // 5
```

如果使用 ECMAScript 6 中的 `let/const` 声明，上述行为将发生变化。

```js
if (true) {
  let y = 5
}
console.log(y) // ReferenceError: y 没有被声明
```

### 函数提升

对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会被提升

```js
/* 函数声明 */

foo() // "bar"

function foo() {
  console.log('bar')
}

/* 函数表达式 */

baz() // 类型错误：baz 不是一个函数

var baz = function () {
  console.log('bar2')
}
```

#### 函数优先提升

函数声明和变量声明都会被提升，但是**函数会首先被提升**，然后才是变量

```js
foo() // 1
var foo

function foo() {
  console.log(1)
}

foo = function () {
  console.log(2)
}
```

## 数据结构和类型

### 数据类型

8 种数据类型

- 七种基本数据类型:
  - 字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy"
  - 布尔值（Boolean），有 2 个值分别是：true 和 false
  - 任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制
  - Symbol ( 在 ECMAScript 6 中新添加的类型)。一种实例是唯一且不可改变的数据类型
  - 数字（Number），整数或浮点数，例如： 42 或者 3.14159
  - undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未定义时的属性
  - null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL 或变体完全不同
- 以及对象（Object）
  - `Function`
  - `Array`
  - `Date`
  - `RegExp`

> 给字符串，布尔值，数字，Symbol，BigInt 添加属性，不会导致错误，但也不会添加成功

```js
const name = 'Megumin'
name.age = 14
console.log(name.age) // undefined
```

#### BigInt

通过引入 BigInt，您可以操作超过 `Number.MAX_SAFE_INTEGER` 的数字

```js
const x = 2n ** 53n
// 9007199254740992n
const y = x + 1n
// 9007199254740993n

const x2 = 2 ** 53
// 9007199254740992

const y = x + 1
// 9007199254740992
```

#### undefined 和 undeclared

- 在作用域中声明但还没有赋值的变量，是 `undefined`
- 还没有在作用域中声明过的变量，是 `undeclared` 的

```js
var a
a // undefined
b // ReferenceError: b is not defined
```

#### null vs undefined

- `null` 是一个**特殊关键字**，不是标志符，不能当作变量来使用和赋值。`undefined`是一个**标识符**，可以作为变量来使用和赋值
- 通过 `void` 运算符即可得到 `undefined`

> 永远不要重新定义 `undefined`

##### 运算

- 以下操作符可以和 `BigInt` 一起使用： `+`、`*`、`-`、`**`、`%` 。除 `>>>` （无符号右移）之外的 位操作 也可以支持。因为 `BigInt` 都是有符号的， `>>>` （无符号右移）不能用于 `BigInt`
- 当使用 `BigInt` 时，带小数的运算会被取整

```js
const expected = 4n / 2n
// 2n

const rounded = 5n / 2n
// 2n, not 2.5n
```

##### 比较

`BigInt` 和 `Number` 不是严格相等的，但是宽松相等的

```js
0n === 0
// false

0n == 0
// true
```

`Number` 和 `BigInt` 可以进行比较

```js
1n < 2
// true

2n > 1
// true
```

> MORE: [BigInt-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

## 原生函数

### 内部属性[[Class]]

所有 typeof 返回值为 "object" 的对象（如数组）都包含一个内部属性 [[Class]]（我们可以把它看作一个内部的分类，而非传统的面向对象意义上的类）。这个属性无法直接访问，一般通过 `Object.prototype.toString(..)` 来查看

```js
Object.prototype.toString.call([1, 2, 3])
// "[object Array]"
Object.prototype.toString.call(/regex-literal/i)
// "[object RegExp]"

// !!!
Object.prototype.toString.call(null)
// "[object Null]"
Object.prototype.toString.call(undefined)
// "[object Undefined]"
```

> 虽然 `Null()` 和 `Undefined()` 这样的原生构造函数并不存在，但是内部 [[Class]] 属性值仍 然是 "Null" 和 "Undefined"。

### 封装对象包装

由 于 基 本 类 型 值 没 有 `.length` 和 `.toString()` 这样的属性和方法，需要通过封装对象才能访问，此时 JavaScript 会自动为基本类型值包装（box 或者 wrap）一个封装对象。

一般情况下，我们不需要直接使用封装对象。最好的办法是让 JavaScript 引擎自己决定什
么时候应该使用封装对象。

```js
var a = new Boolean(false)
if (!a) {
  console.log('Oops') // 执行不到这里
}
```

```js
var a = 'abc'
var b = new String(a)
var c = Object(a)
typeof a // "string"
typeof b // "object"
typeof c // "object"
b instanceof String // true
c instanceof String // true
Object.prototype.toString.call(b) // "[object String]"
Object.prototype.toString.call(c) // "[object String]"
```

#### 拆封

使用 `valueOf()` 函数

```js
var a = new String('abc')
var b = new Number(42)
var c = new Boolean(true)
a.valueOf() // "abc"
b.valueOf() // 42
c.valueOf() // true
```

在需要用到封装对象中的基本类型值的地方会发生隐式拆封

```js
var a = new String('abc')
var b = a + '' // b的值为"abc"
typeof a // "object"
typeof b // "string"
```

## 字面量

### 数组字面量

#### 数组字面值中的多余逗号

若在同一行中连写两个逗号 `,`，数组中就会产生一个没有被指定的元素，其初始值是 undefined。

```js
var fish = ['Lion', , 'Angel']
fish[1] // undefined
fish.length // 3
```

> 如果你在元素列表的尾部添加了一个逗号，它将会被忽略

### 整数

整数可以用十进制（基数为 10）、十六进制（基数为 16）、八进制（基数为 8）以及二进制（基数为 2）表示。

- 十进制整数字面量由一串数字序列组成，且没有前缀 0。
- 八进制的整数以 0（或 0O、0o）开头，只能包括数字 0-7。【严格模式下，八进制整数字面量必须以 0o 或 0O 开头，而不能以 0 开头。】
- 十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。
- 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1。

### 对象字面量

对象属性名字可以是任意字符串，包括空串。

### 字符串字面量

要在字符串中插入 `\` 字面值，必须转义反斜线。例如，要把文件路径 c:\temp 赋值给一个字符串，可以采用如下方式:

```js
var home = 'c:\\temp'
```

也可以在换行之前加上反斜线以转义换行（译注：实际上就是一条语句拆成多行书写），这样反斜线和换行都不会出现在字符串的值中。

```js
var str =
  'this string \
is broken \
across multiple\
lines.'
console.log(str) // this string is broken across multiplelines.
```

换行

```js
// 方式1
var poem =
  'Roses are red,\n\
Violets are blue.\n\
Sugar is sweet,\n\
and so is foo.'

// 方式2，使用模板字面量
var poem = `Roses are red,
Violets are blue.
Sugar is sweet,
and so is foo.`
```

## 其他

### 分号插入的局限

5 个明确有问题的字符需要密切注意：`(`、`[`、`+`、`-`和`/`，每一个字符都能作为一个表达式运算符或者一条语句的前缀。如果下一行以这 5 个字符之一开始，那么本行不会自动插入分号。

```txt
var color = {}
var b = 3
var a = b
[('r', 'g', 'b')].forEach(function(key) {
  color[key] = 255
})

// 报错：
// [('r', 'g', 'b')].forEach(function (key) {
//                   ^
// TypeError: Cannot read property 'forEach' of undefined
```

> 原因在于第 4 行以[开始，因此和第三行一起被解析为一条语句，等价于：

```js
var a = b[('r', 'g', 'b')].forEach(function (key) {
  color[key] = 255
})
```

## 强制类型转换

### 抽象值操作

#### toString

对普通对象来说，除非自行定义，否则 `toString()`（`Object.prototype.toString()`）返回
内部属性 [[Class]] 的值（参见第 3 章），如 "[object Object]"。

数组默认的`toString()`方法经过重新定义，将所有单元字符串化后再用','连接起来

```js
var a = [1, 2, 3]
a.toString() // 1,2,3
```

##### JSON 字符串化

对大多数简单值来说，JSON 字符串化和 toString() 的效果基本相同，只不过序列化的结
果总是字符串：

```js
JSON.stringify(42) // "42"
JSON.stringify('42') // ""42"" （含有双引号的字符串）
JSON.stringify(null) // "null"
JSON.stringify(true) // "true
```

- 所有安全的 JSON 值（JSON-safe）都可以使用 `JSON.stringify(..)` 字符串化。安全的 JSON 值是指能够呈现为有效 JSON 格式的值。不安全的 JSON 值有 `undefined`、`function`、`symbol`
  （ES6+）和 **包含循环引用的对象**。
- `JSON.stringify(..)` 在对象中遇到 `undefined`、`function` 和 `symbol` 时会自动将其忽略，在数组中则会返回 `null`（以保证单元位置不变）
- 可以在对象定义 `toJSON()` 方法，JSON 字符串化时会首先调用该方法，然后用它的返回值来进行序列化。

```js
var o = {}
var a = {
  b: 42,
  c: o,
  d: function () {},
}
// 在a中创建一个循环引用
o.e = a
// 循环引用在这里会产生错误
// JSON.stringify( a );
// 自定义的JSON序列化
a.toJSON = function () {
  // 序列化仅包含b
  return { b: this.b }
}
JSON.stringify(a) // "{"b":42}"
```

可以向 `JSON.stringify(..)` 传递一个可选参数 replacer，它可以是数组或者函数，用
来指定对象序列化过程中哪些属性应该被处理，哪些应该被排除。如果 replacer 是一个数组，那么它必须是一个字符串数组，其中包含序列化要处理的对象的属性名称，除此之外其他的属性则被忽略。如果 replacer 是一个函数，它会对对象本身调用一次，然后对对象中的每个属性各调用一次，每次传递两个参数，键和值。如果要忽略某个键就返回 `undefined`，否则返回指定的值。

```js
var a = {
  b: 42,
  c: '42',
  d: [1, 2, 3],
}
JSON.stringify(a, ['b', 'c']) // "{"b":42,"c":"42"}"
JSON.stringify(a, function (k, v) {
  if (k !== 'c') return v
})
// "{"b":42,"d":[1,2,3]}"
```

> 由于字符串化是递归的，因此数组 [1,2,3] 中的每个元素都会通过参数 v 传递给 replacer，即 1、2 和 3，参数 k 是它们的索引值，即 0、1 和 2。

`JSON.stringify()` 还有 1 个可选参数，用于指定每一级缩进的字符数

#### ToBoolean

JavaScript 中的值可以分为以下两类：

- 可以被强制类型转换为 `false` 的值
- 其他（被强制类型转换为 `true` 的值）

以下这些是假值，布尔强制类型转换结果为 `false`

- undefined
- null
- false
- +0, -0 和 NaN
- 0n, -0n
- "", '', ``

> https://developer.mozilla.org/en-US/docs/Glossary/Falsy

### 显式强制类型转换

#### 字符串和数字之间的显式转换

##### ~ 取反运算符(字位操作“非”)

位运算符只适用于 **32 位整数**，运算符会强制操作数使用 32 位格式。首先执行 ToNumber 强制类型转换，比如 "123" 会先被转换为 123，然后再执行 ToInt32。

但字位运算符（如 | 和 ~）和某些特殊数字一起使用时会产生类似强制类型转换的效果，返回另外一个数字。

例如 | 运算符（字位操作“或”）的空操作（no-op）0 | x，它仅执行 ToInt32 转换

```js
0 | -0 // 0
0 | NaN // 0
0 | Infinity // 0
0 | -Infinity // 0
```

> 以上这些特殊数字无法以 32 位格式呈现（因为它们来自 64 位 IEEE 754 标准），因此 ToInt32 返回 0。

~x 大致等同于 -(x+1)

```js
~42 // -(42+1) => -43
```

`~x` 中唯一能得到 0 的 x 值为-1，可以和 `indexOf` 配合使用

```js
var a = 'Hello World'
if (~a.indexOf('lo')) {
  // true
  // 找到匹配！
}
~a.indexOf('lo') // 0
```

##### 字位截除

~~ 中第一个~执行 ToInt32 并反转字位，然后第二个 ~ 再进行一次字位反转，即将所有字位反转回原值，最后得到的仍然是 ToInt32 的结果。

首先它只适用于 32 位数字，更重要的是它对负数的处理与 `Math.floor(..)` 不同。

```js
Math.floor(-49.6) // -50
~~-49.6 // -49
~~49.6 // 49
```

`~~x` 能将值截除为一个 32 位整数，`x | 0` 也可以，而且看起来还更简洁。

### 显式解析数字字符串

```js
var a = '42'
var b = '42px'

Number(a) // 42
parseInt(a) // 42
Number(b) // NaN
parseInt(b) // 42
```

> `parseInt()` 允许字符串中含有非数字字符，解析按从左到右的顺序，如果遇到非数字字符就停止。而`Number()`不允许出现非数字字符，否则会失败并返回 `NaN`。
>
> `parseInt()` 针对的是字符串。传递其他类型的参数会先被强制类型转换为字符串
>
> `parseInt()`如果没有第二个参数来指定转换的基数（又称为 radix），则会根据字符串的第一个字符来自行决定基数。如果第一个字符是 x 或 X，则转换为十六进制数字。ES5 之前，如果第一个字符是 0，则转换为八进制数字。ES5 之后如果是 0，也是 10 进制。建议总是指定一个基数

```js
parseInt(Infinity, 19) // 18
parseInt(0.000008) // 0 ("0" 来自于 "0.000008")
parseInt(0.0000008) // 8 ("8" 来自于 "8e-7")
parseInt(false, 16) // 250 ("fa" 来自于 "false")
parseInt(parseInt, 16) // 15 ("f" 来自于 "function..")
parseInt('0x10') // 16
parseInt('103', 2) // 2
```

#### 显式转换为布尔值

`Boolean()` 或 `!!`

### 隐式强制类型转换

#### 字符串和数字之间的隐式强制类型转换

如果某个操作数是字符串或者能够通过以下步骤转换为字符串的话，+ 将进行拼接操作。如果其中一个操作数是对象（包括数组），则首先对其调用 ToPrimitive 抽象操作，该抽象操作再调用 [[DefaultValue]]，以数字作为上下文。
这与 ToNumber 抽象操作处理对象的方式一样。因为数组的`valueOf()` 操作无法得到简单基本类型值，于是它转而调用 `toString()`

```js
var a = [1, 2]
var b = [3, 4]
a + b // "1,23,4"
```

<!-- prettier-ignore -->
```js
;[] + {}; // "[object Object]"
;{}+[] // 0
```

> 第 1 行，`{}` 出现在 + 运算符表达式中，因此它被当作一个值（空对象）来处理。
> 第 2 行，`{}` 被当作一个独立的空代码块（不执行任何操作）。代码块结尾不需要分号，所以这里不存在语法上的问题。最后 `+ []` 将 `[]` 显式强制类型转换为 0。

```js
var a = {
  valueOf: function () {
    return 42
  },
  toString: function () {
    return 4
  },
}
a + '' // "42"
String(a) // "4"
```

> `a + ""` 会对 a 调用 `valueOf()` 方法，然后通过 `ToString` 抽象操作将返回值转换为字符串。而 `String(a)` 则是直接调用 `ToString()`。

字符串强制类型转换为数字的情况

`-` 是数字减法运算符，因此 `a - 0` 会将 a 强制类型转换为数字。也可以使用 `a * 1` 和 `a / 1`，因为这两个运算符也只适用于数字

```js
var a = '3.14'
var b = a - 0
b // 3.14
```

```js
var a = [3]
var b = [1]
a - b // 2
```

> 为了执行减法运算，a 和 b 都需要被转换为数字，它们首先被转换为字符串（通过`toString()`），然后再转换为数字

#### 布尔值到数字的隐式强制类型转换

判断多个值是否只有 1 或 N 个为 真值

```js
function onlyNTruesy(...args, n = 1) {
  var sum = 0
  for (var i = 0; i < args.length; i++) {
    // 跳过假值，和处理0一样，但是避免了NaN
    if (args[i]) {
      sum += Number(!!args[i])
    }
  }
  return sum == n
}

var a = true
var b = false
onlyNTruesy(b, a) // true
onlyNTruesy(b, a, b, b, b) // true
onlyNTruesy( b, b ); // false
onlyNTruesy( b, a, b, b, b, a ); // false
```

#### 隐式强制类型转换为布尔值

- `if(...)`
- `for(..;..;..)` 中条件判断表达式（第二个）
- `while(..)` 和 `do..while(..)` 中条件判断表达式
- `? :`中的条件判断表达式
- `||`, `&&` 左边的操作数（作为条件判断表达式）

#### Symbol 的强制类型转换

ES6 允许从符号到字符串的显式强制类型转换，然而隐式强制类型转换会产生错误

```js
var s1 = Symbol('cool')
String(s1) // "Symbol(cool)"
var s2 = Symbol('not cool')
s2 + '' // TypeError
```

### 抽象关系比较

比较双方首先调用 ToPrimitive，如果结果出现非字符串，就根据 ToNumber 规则将双方强制类型转换为数字来进行比较。如果比较双方都是字符串，则按字母顺序来进行比较。

```js
var a = { b: 42 }
var b = { b: 43 }
a < b // false
a == b // false
a > b // false
a <= b // true
a >= b // true
```

> 根据规范 `a <= b` 被处理为 `b < a`，然后将结果**反转**。因为 `b < a` 的结果是 false，所以 `a <= b` 的结果是 true。

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types
