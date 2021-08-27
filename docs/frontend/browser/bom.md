---
title: BOM
---

# BOM

## window

### 属性

- `window.devicePixelRatio`: 物理像素和设备独立像素的比例

### 方法

- `window.frames`: 返回当前窗口所有子窗口的数组

* `Window.getComputedStyle()`

该方法给出应用活动样式表后的元素的所有 CSS 属性的值，并解析这些值可能包含的任何基本计算。

- 语法

```js
let style = window.getComputedStyle(element, [pseudoElt])
```

> `element`:
> 用于获取计算样式的 Element
> 
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

### 全局作用域

1. 在全局作用域中声明的变量、函数都会变成 window 对象的属性和方法
2. 定义全局变量与在 window 对象上直接定义属性还是有一点差别：全局变量不能通过 delete 操作符删除，而直接在 window 对象上的定义的属性可以

```js
var age = 22
window.color = 'red'

// delete age 或
delete window.age
// false

// delete color 或
delete window.color
// true

window.age
// 22

window.color
// undefined
```

> var 语句添加的 window 属性有一个名为 [[Configurable]] 的特性，这个特性的值被设置为 false ，因此不可以通过 delete 操作符删除

## location

### 属性

`https://en.wikipedia.org/wiki/Wiki?q=test&name=wiki#Editing`

- href: `https://en.wikipedia.org/wiki/Wiki?q=test&name=wiki#Editing`
- hash: `#Editing`
- host: `en.wikipedia.org`，主机名和端口
- hostname: `en.wikipedia.org`，主机名
- origin: `https://en.wikipedia.org`
- pathname: `/wiki/Wiki`
- protocol: `https:`
- search: `?q=test&name=wiki`

> 修改 location 对象的属性可以改变当前加载的页面

### 方法

- `assign()`: 等价于 location 对象一个新值，文档就会使用新的 URL 加载

```js
// 3者等价
window.location = 'http://www.example.com'
window.location.href = 'http://www.example.com'
window.location.assign('http://www.example.com')
```

- `reload()`: 传入布尔值参数【不传默认 false】，是否强制从服务器重新加载当前页面
- `replace()`

> https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location

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

## history

### 属性

- length: 会话历史中元素的数目。在一个新的选项卡加载的一个页面中，这个属性返回 1
- state: 返回一个表示历史堆栈顶部的状态的值，就是 pushState 时传进去的 state

### 方法

- `back()`
- `forward()`
- `go()`
- `pushState()`
- `replaceState()`

> https://developer.mozilla.org/zh-CN/docs/Web/API/Window
