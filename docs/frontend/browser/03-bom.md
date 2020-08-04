---
title: BOM
---

## window

### 属性

### 方法

#### `Window.getComputedStyle()`

该方法给出应用活动样式表后的元素的所有 CSS 属性的值，并解析这些值可能包含的任何基本计算。

- 语法

```js
let style = window.getComputedStyle(element, [pseudoElt])
```

> `element`:
> 用于获取计算样式的 Element

> `pseudoElt` 可选
>
> 指定一个要匹配的伪元素的字符串。必须对普通元素省略（或 null）。
>
> 返回的样式是一个实时的 `CSSStyleDeclaration` 对象，当元素的样式更改时，它会自动更新本身。该对象提供一个名为`getPropertyValue()`的方法，接受 CSS 属性名称（如 font-size 和 background-color），而不是“驼峰式”格式的名称。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>测试getComputedStyle方法</title>
    <style>
      #box {
        font-size: 16px;
      }
    </style>
  </head>

  <body>
    <div id="box">我是box</div>

    <script>
      var oBox = document.getElementById('box')
      var compSty = window.getComputedStyle(oBox)

      console.log(compSty.getPropertyValue('font-size')) // 16px

      oBox.style.fontSize = '14px'
      console.log(compSty.getPropertyValue('font-size')) // 14px
    </script>
  </body>
</html>
```

## location

## navigator

### 属性

- navigator.userAgent：用户代理

```js
// 检验是否微信中打开
function isWX() {
  var ua = navigator.userAgent.toLowerCase()
  return /micromessenger/.test(ua) ? true : false
}
```

> https://developer.mozilla.org/zh-CN/docs/Web/API/Window
