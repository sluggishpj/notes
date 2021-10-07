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

var baz = function() {
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
  - 数字（Number），整数或浮点数，例如： 42 或者 3.14159
  - Symbol ( 在 ECMAScript 6 中新添加的类型)。一种实例是唯一且不可改变的数据类型
  - null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL 或变体完全不同
  - undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未定义时的属性
  - 任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制
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
var a = b[('r', 'g', 'b')].forEach(function(key) {
  color[key] = 255
})
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types
