---
title: 正则表达式
---

正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript 中，正则表达式也是对象。这些模式被用于 `RegExp` 的 `exec` 和 `test` 方法, 以及 `String` 的 `match、matchAll、replace、search` 和 `split` 方法。

## 创建正则表达式

```js
var re1 = /ab+c/

var re2 = new RegExp('ab+c')
```

## 编写一个正则表达式的模式

### 断言

- `x(?=y)`: 先行断言(Lookahead assertion)。y 紧跟 x 的情况下匹配 x
- `x(?!y)`: 负向先行断言(Negative lookahead assertion)。x 后无 y 紧随的情况下匹配 x
- `(?<=y)x`: 后行断言(Lookbehind assertion)。x 紧随 y 的情况下匹配 x
- `(?<!y)x`: 负向后行断言(Negative lookbehind assertion)。x 不紧随 y 的情况下匹配 x

```js
var str1 = 'Java'
var str2 = 'JavaCva'

// 先行断言
var laReg = /Ja(?=vaCva)/
laReg.test(str1) // false
laReg.test(str2) // true

// 负向先行断言
var nlaReg = /Java(?!Cva)/
nlaReg.test(str1) // true
nlaReg.test(str2) // false

// 后行断言
var lbReg = /(?<=Java)Cva/
lbReg.test(str1) // false
lbReg.test(str2) // true

var nlbReg = /(?<!Ja)va/
nlbReg.test(str1) // false
nlbReg.test(str2) // true
```

> 组和范围：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges

### 边界

- `^`: 匹配输入的开头。如果多行模式设为 true，那么也匹配换行符后紧跟的位置
- `$`: 匹配输入的结束。如果多行模式设为 true，那么也匹配换行符前的位置
- `\b`: 匹配单词边界。这个位置 往前都没有单词 或者 往后都没有单词
  - `/\bm/` matches the "m" in "moon"
  - `/oo\b/` does not match the "oo" in "moon"
  - `/\w\b\w/` will never match anything, because a word character can never be followed by both a non-word and a word character
- `\B`: 匹配非单词边界。

### 字符类别

- `.`: 匹配除了 **行终止符**（`\n`, `\r`, `\u2028`, `\u2029`）的 所有**单字符**
  > ES2018 后，可以在添加 s 标识符，让 `.`也能匹配到**行终止符**
- `\d`: 匹配阿拉伯数字，等价于 `[0-9]`
- `\D`: 匹配 非阿拉伯数字，等价于 `[^0-9]`
- `\w`: 等价于 `[A-Za-z0-9_]`
- `\W`: 等价于 `[^A-Za-z0-9_]`
- `\s`: 匹配单个空白字符，包括 空格, tab, 换页符(`\f`), 换行符(`\n`)，其他 Unicode 空白符。等价于 `[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`
- `\S`: 匹配单个 非空白符。等价于 `[^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`
- `\t`: 水平 tab 缩进符
- `\r`: 回车符
- `\n`: 换行符
- `\v`: 垂直 tab 缩进符
- `\f`: 换页符
- `[\b]`: 匹配 退格符（backspace）。可对比边界中的 `\b`
- `\0`: 匹配 空字符 ( Null character)
- `\cX`: Matches a control character using [caret notation](https://en.wikipedia.org/wiki/Caret_notation), where "X" is a letter from A–Z (corresponding to codepoints `U+0001`–`U+001F`). For example, `/\cM/` matches "\r" in "\r\n"
- `\xhh`: 匹配 Unicode 为 `hh`(2 个 16 进制数字)的字符
- `\uhhhh`: Matches a UTF-16 code-unit with the value `hhhh` (4 个 16 进制数字)
- `\u{hhhh}` 或 `\u{hhhhh}`: (Only when the `u` flag is set.) Matches the character with the Unicode value `U+hhhh` or `U+hhhhh` (16 进制)
- `\`: 将后面的字符特别对待 或 进行转义。
  - `/b/` 匹配 'b', `/\b/` 匹配单词边界
  - `/a*/` 匹配 0 或多个 'a', `/a\*/` 匹配 'a\*'
  - 如果你想将字符串传递给 RegExp 构造函数，不要忘记在字符串字面量中反斜杠是转义字符。所以为了在模式中添加一个反斜杠，你需要在字符串字面量中转义它。`/[a-z]\s/i` 和 `new RegExp("[a-z]\\s", "i")` 创建了相同的正则表达式。`/[a-z]:\\/i`和 `new RegExp("[a-z]:\\\\","i")` 会创建相同的表达式

```js
// 转义
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  //$&表示整个被匹配的字符串
}
```

### 组和范围

- `x|y`: 匹配 x 或 y
- `[xyz]`, `[a-c]`: 匹配 x 或 y 或 z, 匹配 a 或 b 或 c。`[abc]` 等价于 `[a-c]`
- `[^xyz]`, `[^a-c]`: 匹配不是 x/y/z 的其他字符, 匹配不是 a/b/c 的其他字符。`[^abc]` 等价于 `[^a-c]`
- `(x)`: 捕获组。一个正则表达式可能有多个捕获组，通过 match 返回的捕获组顺序和 捕获组中左括号出现的顺序一致【从左到右】。
  > `String.match()` won't return groups if the `/.../g` flag is set. However, you can still use `String.matchAll()` to get all matches.
- `\n`: n 是正整数。`\n` 代表 第 n 个捕获组 的引用。
  > eg. `/apple(,)\sorange\1/` matches "apple, orange," in "apple, orange, cherry, peach"
- `(?:x)`: 不捕获组。
- `(?<Name>x)`: 命名捕获组。

```js
const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/

console.log(RE_DATE.exec('1999-12-31').groups)
//  { year: '1999', month: '12', day: '31' }

console.log('2000-02-20'.match(RE_DATE).groups)
//  { year: '2000', month: '02', day: '20' }
```

### 量词

- `x*`: 匹配 'x' 0 或 多次
- `x+`: 匹配 'x' 1 或 多次
- `x?`: 匹配 'x' 0 或 1 次
- `x{n}`: 匹配 n 个 'x'
- `x{n,}`: 匹配 >=n 个 'x'
- `x{n, m}`: 匹配 >=n 且 <=m 个 'x'
- `x*?`, `x+?`, `x??`, `x{n}?`, `x{n,}?`, `x{n,m}?`: `*` 和 `+` 默认是"贪婪的"也就是会尽可能匹配更多。加上`?`后会让其变为"不贪婪"，也就是一匹配到就结束。

```js
var str = 'some <foo> <bar> new </bar> </foo> thing'
var reg1 = /<.*>/
var reg2 = /<.*?>/

console.log(str.match(reg1)[0])
// <foo> <bar> new </bar> </foo>

console.log(str.match(reg2)[0])
// <foo>
```

### Unicode 属性转义 (Unicode Property Escapes)

- 语法

```js
// Non-binary values
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}

// Binary and non-binary values
\p{UnicodeBinaryPropertyName}

// Negation: \P is negated \p
\P{UnicodePropertyValue}
\P{UnicodeBinaryPropertyName}
```

> UnicodeBinaryPropertyName: [table-binary-unicode-properties | tc39](https://tc39.es/ecma262/#table-binary-unicode-properties)
>
> UnicodePropertyName: The name of a non-binary property: `General_Category` (gc), `Script` (sc), or `Script_Extensions` (scx)
>
> UnicodePropertyValue: 跟 `UnicodePropertyName` 对应。

```js
const sentence = 'A ticket to 大阪 costs ¥2000 👌.'

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu
console.log(sentence.match(regexpEmojiPresentation))
// ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu
console.log(sentence.match(regexpNonLatin))
// [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu
console.log(sentence.match(regexpCurrencyOrPunctuation))
// ["¥", "."]
```

> 为了使 Unicode 属性转义起作用，正则表达式必须加上 `u` 标志(flags)，并在 `\p{}`或`\P{}`花括号内声明 Unicode 字符属性

- eg. General categories

对 Unicode 字符进行分类

```js
// 查找字符串中的所有字母
let story = 'It’s the Cheshire Cat: now I shall have somebody to talk to.'

// 最细的写法
story.match(/\p{General_Category=Letter}/gu)

// UnicodePropertyName 可以不写，等价上面的正则表达式
story.match(/\p{Letter}/gu)

// 使用别名，等价上面的正则表达式
story.match(/\p{L}/gu)

// 同样等价，使用子类别（别名形式）
story.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu)
```

> MORE: [General_Category_Property | unicode](https://unicode.org/reports/tr18/#General_Category_Property)

- eg. Script and script extensions

Some languages use different scripts for their writing system. The Script and Script_Extensions Unicode properties allow regular expression to match characters according to the script they are mainly used with (Script) or according to the set of scripts they belong to (Script_Extensions).

For example, 'a' belongs to the Latin script and 'ε' to the Greek script.

```js
let mixedCharacters = 'aεЛ'

// Using the canonical "long" name of the script
mixedCharacters.match(/\p{Script=Latin}/u) // a

// Using a short alias for the script
mixedCharacters.match(/\p{Script=Grek}/u) // ε

// Using the short name Sc for the Script property
mixedCharacters.match(/\p{Sc=Cyrillic}/u) // Л
```

> MORE: [table-unicode-script-values | tc39](https://tc39.es/ecma262/#table-unicode-script-values)

## 使用正则表达式

### 方法

正则表达式可以被用于 `RegExp` 的 `exec` 和 `test` 方法以及 `String` 的 `match`、`replace`、`search` 和 `split` 方法

| 方法       | 描述                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| `exec`     | 一个在字符串中执行查找匹配的 RegExp 方法，它返回一个数组（未匹配到则返回 null）。                    |
| `test`     | 一个在字符串中测试是否匹配的 RegExp 方法，它返回 true 或 false。                                     |
| `match`    | 一个在字符串中执行查找匹配的 String 方法，它返回一个数组，在未匹配到时会返回 null。                  |
| `matchAll` | 一个在字符串中执行查找所有匹配的 String 方法，它返回一个迭代器（iterator）。                         |
| `search`   | 一个在字符串中测试匹配的 String 方法，它返回匹配到的位置索引，或者在失败时返回-1。                   |
| `replace`  | 一个在字符串中执行查找匹配的 String 方法，并且使用替换字符串替换掉匹配到的子字符串。                 |
| `split`    | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。 |

### 标志

| 标志 | 描述                                                             |
| ---- | ---------------------------------------------------------------- |
| `g`  | 全局搜索                                                         |
| `i`  | 不区分大小写搜索                                                 |
| `m`  | 多行搜索                                                         |
| `s`  | 允许 `.` 匹配换行符                                              |
| `u`  | 使用 unicode 码的模式进行匹配                                    |
| `y`  | 执行“粘性”搜索,匹配从目标字符串的当前位置开始，可以使用 `y` 标志 |
