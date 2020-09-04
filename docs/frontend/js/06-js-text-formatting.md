---
title: 字符串与文本
---

## 字符串

JavaScript 的字符串类型用于表示文本数据。它是一组 16 位的无符号整数值的“元素”。在字符串中的每个元素占据了字符串的位置。

### String 字面量

#### 16 进制转义序列

`\x` 之后的数值将被认为是一个 16 进制数

```js
'\xA9' // "©"
```

#### Unicode 转义序列

Unicode 转义序列在`\u` 之后需要至少 4 个字符

```js
'\u00A9' // "©"
```

#### Unicode code point escapes

ECMAScript 6 中的新特性。任何字符都可以用 16 进制数转义, 这使得通过 Unicode 转义表示大于 `0x10FFFF` 的字符成为可能。使用简单的 Unicode 转义时通常需要分别写字符相应的两个部分（译注：大于 `0x10FFFF` 的字符需要拆分为相应的两个小于 `0x10FFFF` 的部分）来达到同样的效果。

- `String.fromCodePoint()`
- `String.prototype.codePointAt()`

```js
'😂'.length // 2
'😂'.charCodeAt(0) // 55357 [即 0xD83D]
'😂'.charCodeAt(1) // 56834 [即 0xDE02]
'😂'.codePointAt(0) // 128514 [即 0x1F602]
;('\u{1F602}') // 😂
;('\uD83D\uDE02') // 😂
String.fromCodePoint(0x1F602) // 😂
'\u{1F602}'[0] === '\uD83D' // true
```

> 每个元素都被认为是一个单独的 UTF-16 码元。无论这是否是字符串的实际存储格式，字符串中的字符都是通过其初始码元元素位置进行编号的，就像使用 UTF-16 表示一样。

## 其他

### 识别一个字符是由 1 个字节还是 2 个字节组成

```js
function is32Bit(c) {
  return c.codePointAt(0) > 0xffff
}

console.log(is32Bit('😂')) // true
console.log(is32Bit('a')) // false
```

> ref: https://github.com/qdlaoyao/js-book/blob/master/04.md

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Text_formatting
