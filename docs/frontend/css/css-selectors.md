---
title: 选择器
---

# 选择器

## 基本选择器

- 通用选择器: `* { style properties }`
- 元素选择器: `element { style properties }`
- ID 选择器: `#id_value { style properties }`
- 类选择器: `.class_name { style properties }`
- 属性选择器: 参照下一子类

### 属性选择器

- `[attr]`: 带有以 attr 命名的属性的元素
- `[attr=value]`: 带有以 attr 命名的属性，且属性值为 value 的元素
- `[attr~=value]`: 带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value
- `[attr|=value]`:带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀（"`-`"为连字符，Unicode 编码为 U+002D）开头
- `[attr^=value]`: 带有以 attr 命名的属性，且属性值是以 value 开头的元素
- `[attr$=value]`: 表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素
- `[attr*=value]`: 表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素
- `[attr operator value i]`: 在属性选择器的右方括号前添加一个用空格隔开的字母 i（或 I），可以在匹配属性值时忽略大小写（支持 ASCII 字符范围之内的字母）

```css
/* 匹配 lang="en", lang="en-US" 等 */
*[lang|='en'] {
  color: white;
}

/* Internal links, beginning with "#" */
a[href^='#'] {
  background-color: gold;
}

/* Links with "example" anywhere in the URL */
a[href*='example'] {
  background-color: silver;
}

/* Links with "insensitive" anywhere in the URL,
   regardless of capitalization */
a[href*='insensitive' i] {
  color: cyan;
}

/* Links that end in ".org" */
a[href$='.org'] {
  color: red;
}

/* Links that start with "https" and end in ".org" */
a[href^='https'][href$='.org'] {
  color: green;
}
```

## 分组选择器

- `element, element, element { style properties }`

## 组合器(Combinators)

- 后代组合器: `selector1 selector2 {style properties}`
- 直接子代组合器: `selector1 > selector2 { style properties }`
- 一般兄弟组合器: `former_element ~ target_element { style properties }`, `former_element` 和 `target_element` 都是在同一父元素下，匹配`former_element`后的所有 `target_element` 元素
- 紧临兄弟选择器: `former_element + target_element { style properties }`, 同一父元素下，紧跟 `former_element` 后的 `target_element` 元素

## 伪选择器

- 伪类: 伪类 是添加到选择器的关键字，指定要选择的元素的特殊状态。例如，`:hover` 可被用于在用户将鼠标悬停在按钮上时改变按钮的颜色。
- 伪元素: 伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。例如， `::first-line` 伪元素可改变段落首行文字的样式。

> 一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。
> 注意：按照规范，伪元素应该使用双冒号（::）而不是单个冒号（:），以便区分伪类和伪元素。但是，由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素。

## `attr()`

`attr()` 理论上能用于获取选中标签的 CSS 属性，但目前支持的仅有伪元素的 `content` 属性

```html
<style>
  p:before {
    content: attr(data-foo) ' ';
  }
</style>

<p data-foo="hello">world</p>
```

> 渲染结果是 `hello world`

## 应用

### 自定义复选框

```css
/* 隐藏原来的复选框，不使用 display:none 是让 tab 键能聚焦到 */
input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

/* 未选中样式 */
input[type="checkbox"] + label::before {
  content: "\a0"; /* 不换行空格 */
  display: inline-block;
}

/* 选中样式 */
input[type="checkbox"]:checked + label::before {
  content: "\2713"; /* 对勾 */
  background: yellowgreen;
}

/* 聚焦样式 */
input[type="checkbox"]:focus + label::before {
  /* style content */
}

/* 禁用样式 */
input[type="checkbox"]:disabled + label::before {
  /* style content */
}

```

<iframe height="300" style="width: 100%;" scrolling="no" title="css-secrect-自定义复选框" src="https://codepen.io/rinxu/embed/zYzRQEK?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/zYzRQEK">
  css-secrect-自定义复选框</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## REF

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors
