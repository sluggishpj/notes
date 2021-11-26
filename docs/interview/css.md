---
title: CSS
---

## 选择器优先级

`!important` > 内联 > ID 选择器 > 类选择器 > 元素选择器

## reset vs normalize

- reset: 除去所有的浏览器默认样式。对于页面所有的元素，像 `margin`、`padding`、`font-size`这些样式全部置成一样。你将必须重新定义各种元素的样式。
- normalize: 标准化没有去掉所有的默认样式，而是保留了有用的一部分，同时还纠正了一些常见错误。

## 清除浮动

有以下 4 个方法：

- 父级容器也一块浮动
- 父级容器设置 `overflow: auto/hidden`
- 添加伪元素 `clear:both`

```css
.clearfix::before,
.clearfix::after {
  content: ' ';
  display: table;
}
.clearfix::after {
  clear: both;
}
.clearfix {
  zoom: 1; /* For IE 6/7 (trigger hasLayout) */
}
```

- 父容器设置 `display: flow-root`

<iframe height="300" style="width: 100%;" scrolling="no" title="css-clear-fix" src="https://codepen.io/rinxu/embed/gOxZKoM?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/gOxZKoM">
  css-clear-fix</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## `z-index` 如何形成层叠上下文(stacking context)

- `z-index` 只能影响`position`值不是`static`的元素

没有定义`z-index`的值时，元素按照它们出现在 DOM 中的顺序堆叠（层级越低，出现位置越靠上）。非静态定位的元素（及其子元素）将始终覆盖静态定位（static）的元素，而不管 HTML 层次结构如何。

层叠上下文是包含一组图层的元素。 在一组层叠上下文中，其子元素的`z-index`值是相对于其**父元素**而不是 document root 设置的。每个层叠上下文完全独立于它的兄弟元素。如果元素 B 位于元素 A 之上，则即使元素 A 的子元素 C 具有比元素 B 更高的`z-index`值，元素 C 也永远不会在元素 B 之上.

每个层叠上下文是自包含的：当元素的内容发生层叠后，整个该元素将会在父层叠上下文中按顺序进行层叠。少数 CSS 属性会触发一个新的层叠上下文，例如 `opacity` 小于 1，`filter` 不是 none，`transform` 不是 none。

## 格式化上下文（BFC, Block Formatting Context）及其工作原理

块格式化上下文（Block Formatting Context，BFC） 是 Web 页面的可视 CSS 渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

一个 HTML 盒（Box）满足以下任意一条，会创建块格式化上下文：

- `float` 的值不是 `none`.
- `position` 的值不是 `static` 或 `relative`.
- `display` 的值是 `table-cell`、`table-caption`、`inline-block`、`flex`、或 `inline-flex`、或 `grid`、`inline-grid` 或 **`flow-root`**。
- `overflow` 的值不是 `visible`。

应用：

- 浮动定位和清除浮动时只会应用于同一个 BFC 内的元素。浮动不会影响其它 BFC 中元素的布局，而清除浮动只能清除同一 BFC 中在它前面的元素的浮动。
- 外边距折叠（Margin collapsing）也只会发生在属于同一 BFC 的块级元素之间。

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/rinxu/embed/WNEVOZQ?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/WNEVOZQ">
  Untitled</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> 看 [示例](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context#specifications) 更好理解。个人理解：一个 BFC 会把自己的孩子包裹住，不管孩子是否浮动。

## REF

> https://github.com/yangshun/front-end-interview-handbook
