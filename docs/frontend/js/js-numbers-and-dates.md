---
title: 数字和日期
---

# 数字和日期

## 数字

在 JavaScript 里面，数字均为[双精度浮点类型](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)。使用 64 位来存储一个浮点数。
（也就是说，一个介于 ±2^1023 和 ±2^1024 之间的数字，数字精度为 53 位）。
整数数据在运算完毕后，其值在 ±(253 − 1)内 可以认为是准确的，超出此范围后，数据已无法保证正确性。

![](https://upload.wikimedia.org/wikipedia/commons/7/76/General_double_precision_float.png)

> 符号占 1 位：0 代表数值为正，1 代表数值为负
>
> 指数占 11 位
>
> 尾数占 52 位
>
> 看中文版的 wiki 比较容易理解 :joy:

### 十进制

```js
42

// 以零开头的数字的注意事项：

0888 // 888 将被当做十进制处理
0777 // 在非严格格式下会被当做八进制处理 (用十进制表示就是511)
```

> 十进制可以以 0 开头，后面接其他十进制数字，但是假如下一个接的十进制数字小于 8，那么该数字将会被当做八进制处理。

### 二进制

二进制数字语法是以 `0b` 或 `0B`开头。 假如 0b 后面的数字不是 0 或者 1 则会报错

```js
var a = 0b10
// a === 2

var b = 0b11
// b === 3

var c = 0b12
// Uncaught SyntaxError: Invalid or unexpected token
```

### 八进制

在 ECMAScript 5 严格模式下禁止使用八进制语法。
在 ECMAScript 6 中使用八进制数字是需要给一个数字添加前缀 "0o"。

```js
var a = 0o10
// a === 8
```

### 十六进制

以 `0x` 或者 `0X` 开头

```js
var a = 0xa
// 10
```

### 数字对象

数字的属性

- `Number.MAX_VALUE`: 可表示的最大值
- `Number.MIN_VALUE`: 能表示的最小的正值
- `Number.NaN`: 非数字
- `Number.NEGATIVE_INFINITY`: 特指“负无穷”;在溢出时返回
- `Number.POSITIVE_INFINITY`: 特指“正无穷”;在溢出时返回
- `Number.EPSILON`: 表示 1 和比最接近 1 且大于 1 的最小 Number 之间的差别
- `Number.MIN_SAFE_INTEGER`: JavaScript 最小安全整数
- `Number.MAX_SAFE_INTEGER`: JavaScript 最大安全整数
- `Number.EPSILON`: 表示 1 与 Number 可表示的 大于 1 的最小的浮点数之间的差值

判断小数是否相等

```js
Number.EPSILON = (function() {
  //解决兼容性问题
  return Number.EPSILON ? Number.EPSILON : Math.pow(2, -52)
})()

//上面是一个自调用函数，当JS文件刚加载到内存中，就会去判断并返回一个结果
function numbersequal(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}

//接下来再判断
const a = 0.1 + 0.2
const b = 0.3
console.log(numbersequal(a, b))
//这里就为true了
```

> https://segmentfault.com/a/1190000023312663
>
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON

### 数字的方法

- `Number.parseFloat()`: 把字符串参数解析成浮点数，和全局方法 `parseFloat()` 作用一致
- `Number.parseInt()`: 把字符串解析成特定基数对应的整型数字，和全局方法 `parseInt()` 作用一致
- `Number.isFinite()`: 判断传递的值是否为有限数字
- `Number.isInteger()`: 判断传递的值是否为整数
- `Number.isNaN()`: 判断传递的值是否为 `NaN`
- `Number.isSafeInteger()`: 判断传递的值是否为安全整数

数字类型原型上的一些方法

- `toExponential()`: 返回一个数字的**指数形式**的字符串，形如：`1.23e+2`
- `toFixed()`: 返回指定**小数位数**的表示形式
- `toPrecision()`: 返回一个指定精度的数字

```js
var a = 123
a.toFixed(2) // "123.00"

var b = 123
b.toPrecision(2) // "1.2e+2"
```

```js
;['1', '2', '3'].map(parseInt)
//  parseInt('1', 0) -> 1
//  parseInt('2', 1) -> NaN
//  parseInt('3', 2) -> NaN
```

### 数学对象

```js
Math.abs() // 绝对值
Math.pow(a, b) // 指数, a**b
Math.exp(n) // Math.E**n
Math.floor() // 向下取整
Math.ceil() // 向上取整
Math.min() // 返回一个以逗号间隔的数字参数列表中的最小值
Math.max()
Math.random() // 返回0和1之间的随机数
Math.round() // 四舍五入整数
Math.fround() // 最接近的浮点数
Math.fround(0.3) // 0.30000001192092896

Math.trunc() // 获取给定数字的整数部分
Math.trunc(1.2) // 2

Math.sqrt() // 平方根
Math.sqrt(2) // 1.4142135623730951
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math

### 为什么 0.1 + 0.2 != 3

因为 JS 采用 IEEE 754 双精度版本（64 位），并且只要采用 IEEE 754 的语言都有该问题。

$(-1)^{sign}*2^{(exponent-0x3ff)}*1.mantissa$

```js
// (0011) 表示循环
0.1 = (2 ^ -4) * 1.10011(0011)
0.2 = (2 ^ -3) * 1.10011(0011)

// 因为 0.1 和 0.2 都是无限循环的二进制了
// 所以在小数位末尾处需要判断是否进位（就和十进制的四舍五入一样）

// 因为尾数为52位，所以在JS中
// 0.1 = 0.00011001100110011001100110011001100110011001100110011010
// 0.2 = 0.0011001100110011001100110011001100110011001100110011010
// 相加可得
// 0.3 = 0.010011001100110011001100110011001100110011001100110100

// 转换位10进制就是：0.30000000000000004
```

## 日期对象

Date 对象的范围是相对距离 UTC 1970 年 1 月 1 日 的前后 100,000,000 天

```js
new Date()

// value: Unix 时间戳，整数值
new Date(value)

// dateString: 表示日期的字符串值。该字符串应该能被 Date.parse() 正确方法识别
new Date(dateString)
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date

### Date 方法

- `Date.now()`: 返回自 1970-1-1 00:00:00 UTC（世界标准时间）至今所经过的毫秒数
- `Date.parse()`: 解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。
- `Date.UTC()`: 接受和构造函数最长形式的参数相同的参数（从 2 到 7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。

### Date 对象的方法

处理日期时间的 Date 对象方法可分为以下几类：

- "get" 方法,用于获取 Date 对象的日期和时间的值。

  - `getFullYear()`: 返回指定日期对象的年份（四位数年份时返回四位数字）
  - `getMonth()`: 返回指定日期对象的月份（0-11）
  - `getDate()`: 返回指定日期对象的月份中的第几天（1-31）
  - `getDay()`: 返回指定日期对象的星期中的第几天（0-6）
  - `getHours()`: 返回指定日期对象的小时（0-23）
  - `getMinutes()`: 返回指定日期对象的分钟（0-59）
  - `getSeconds()`: 返回指定日期对象的秒数（0-59）
  - `getMilliseconds()`: 返回指定日期对象的毫秒（0-999）
  - `getTime()`: 返回从 1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于 1970-1-1 00:00:00 UTC 之前的时间返回负值

  - `getUTCFullYear()`: 根据世界时返回特定日期对象所在的年份（4 位数）
  - `getUTCMonth()`: 根据世界时返回特定日期对象的月份（0-11）
  - 其他同理

  - `getTimezoneOffset()`: 返回当前时区的时区偏移，没有对应的 set。[20200508]

- "set" 方法, 用于设置 Date 对象的日期和时间的值。和 get 对应，区别是没有

  - `setFullYear()`: 根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）
  - 其他同理

- "to" 方法,用于返回 Date 对象的字符串格式的值

  - `toISOString()`: 把一个日期转换为符合 ISO 8601 扩展格式的字符串。比如 `"2020-05-08T02:47:17.127Z"`
  - `toUTCString()`: 把一个日期对象转换为一个以 UTC 时区计时的字符串
  - `toLocaleString()`: 返回一个表示该日期对象的字符串，该字符串与系统设置的地区关联，比如`"2020/5/8 上午10:47:17"`

- "parse" 方法 用于解析 `Date` 字符串
  - `Date.parse(dateString)`: 解析一个表示某个日期的字符串，并返回从 1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的 UTC 时间）的毫秒数，如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值，则返回值为 NaN。
  - 相当于 `new Date(dateString).getTime()`

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Numbers_and_dates
