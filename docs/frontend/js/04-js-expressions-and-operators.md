---
title: 表达式和运算符
---

## 四则运算

只有当**加法**运算时，其中一方是字符串类型，就会把另一个也转为字符串类型。**其他运算**只要其中一方是数字，那么另一方就转为数字。并且加法运算会触发三种类型转换：将值转换为原始值，转换为数字，转换为字符串。

```js
1 + '1' // '11'
2 * '2' // 4
;[1, 2] + [2, 1] // '1,22,1'
// [1, 2].toString() -> '1,2'
// [2, 1].toString() -> '2,1'
// '1,2' + '2,1' = '1,22,1'
```

## 相等操作符

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

## 赋值运算符

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

## 位运算符

### 位逻辑运算工作流程

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

## 一元运算符

### delete

删除一个对象或一个对象的属性或者一个数组中某一个键值。语法如下

```js
delete objectName
delete objectName.property
delete objectName[index]
delete property // 只在with声明的状态下是合法的， 从对象中删除一个属性
```

如果 delete 操作成功，属性或者元素会变成 undefined。如果 delete 可行会返回 true，如果不成功返回 false

#### 删除数组元素

删除数组中的元素时，数组的长度是不变的，但这个元素就不在数组中了。例如，`trees[3]`被删除，`trees[3]` 仍然可寻址并返回 `undefined`

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

### typeof

- 语法

```js
typeof operand
```

> 括号可选

- 例子

```js
var str = 'round'
var boo = true
var sym = Symbol()
var obj = {}
var fun = new Function('5 + 2')
var undef1 = undefined
var num = 1

typeof str // "string"
typeof boo // "boolean"
typeof sym // "symbol"
typeof obj // "object"
typeof fun // "function"
typeof undef1 // "undefined"
typeof num // "number"

typeof undef2 // "undefined"
typeof null // "object"
```

### void

- 使用方法

```js
void expression
```

> expression 是 javaScript 表达式

```js
<a href="javascript:void(0)">Click here to do nothing</a>
```

当用户单击该文本时，不会有任何效果

## 关系操作符

### in

如果所指定的属性确实存在于所指定的对象中，则会返回 true

```js
var mycar = { make: 'Honda', model: 'Accord', year: 1998 }
'make' in mycar // returns true
```
