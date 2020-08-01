---
title: 索引集合类
---

## 数组对象

### 方法

#### sort

`sort([compareFunction])`: 默认排序顺序是在将元素转换为**字符串**，然后比较它们的 UTF-16 代码单元值序列

如果指明了 compareFunction ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：

- 如果 `compareFunction(a, b)` 小于 0 ，那么 a 会被排列到 b 之前
- 如果 `compareFunction(a, b)` 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）
- 如果 `compareFunction(a, b)` 大于 0 ， b 会被排列到 a 之前。
  `compareFunction(a, b)` 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

```js
;[80, 9, 4, 52].sort()
// [4, 52, 80, 9]
```

- 对非 ASCII 字符排序
  当排序非 ASCII 字符的字符串（如包含类似 e, é, è, a, ä 等字符的字符串）。一些非英语语言的字符串需要使用 [String.localeCompare](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)。这个函数可以将函数排序到正确的顺序。

```js
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu']
items.sort(function(a, b) {
  return a.localeCompare(b)
})

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

## 对象转基本类型

对象在转换基本类型时，首先会调用 `valueOf` 然后调用 `toString`。也可以重写 `Symbol.toPrimitive` ，该方法在转基本类型时调用优先级最高。

```js
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}
1 + a // => 3
'1' + a // => '12'
```

## 类型化数组

是类数组对象（array-like object），其提供访问原始二进制数据的机制。 可以动态增长和收缩，可以有任何 JavaScript 值。对于类型化数组，JavaScript 引擎执行优化使得这些数组访问速度快速

### 缓冲区和视图

JavaScript 类型数组被分解为缓冲(Buffer)和视图(views)。缓冲(由 `ArrayBuffer` 实现)是代表数据块的对象，它没有格式可言，并没有提供任何机制来访问其内容。为了访问包含在缓冲区中的内存，您需要使用视图。视图提供了一个上下文，即数据类型、起始偏移量和元素数，这些元素将数据转换为实际类型数组。

![FROM-MDN](https://mdn.mozillademos.org/files/8629/typed_arrays.png)

### ArrayBuffer

ArrayBuffer 是一种数据类型，用于表示一个通用的、固定长度的二进制数据缓冲区。你不能直接操纵一个 ArrayBuffer 中的内容；你需要创建一个数组类型视图或 DataView 来代表特定格式的缓冲区，并从而实现读写缓冲区的内容。

### 类型数组视图(Typed array views)

类型数组视图具有自描述性的名字，并且提供数据类型信息，例如 `Int8`, `Uint32`, `Float64` 等等。如一个特定类型数组视图 `Uint8ClampedArray`. 它意味着数据元素只包含 0 到 255 的整数值。

> MORE: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Typed_arrays