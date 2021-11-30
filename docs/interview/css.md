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

## 有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）

这些方法与可访问性（a11y）有关。

- `width: 0; height: 0`：使元素不占用屏幕上的任何空间，导致不显示它。
- `position: absolute; left: -99999px`： 将它置于屏幕之外。
- `text-indent: -9999px`：这只适用于 block 元素中的文本。
- [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)：如何增加网页可访问性的 W3C 技术规范。

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
```

## 编写高效 CSS

首先，浏览器**从最右边**的选择器，即关键选择器（key selector），**向左**依次匹配。根据关键选择器，浏览器从 DOM 中筛选出元素，然后向上遍历被选元素的父元素，判断是否匹配。选择器匹配语句链越短，浏览器的匹配速度越快。避免使用标签和通用选择器作为关键选择器，因为它们会匹配大量的元素，浏览器必须要进行大量的工作，去判断这些元素的父元素们是否匹配。

BEM (Block Element Modifier)原则上建议为独立的 CSS 类命名，并且在需要层级关系时，将关系也体现在命名中，这自然会使选择器高效且易于覆盖。eg. `.el-radio__input--small`

搞清楚哪些 CSS 属性会触发重新布局（reflow）、重绘（repaint）和合成（compositing）。在写样式时，避免触发重新布局的可能。

## 描述伪元素及其用途

CSS 伪元素是添加到**选择器**的关键字，去**选择元素的特定部分**。它们可以用于装饰（`:first-line`，`:first-letter`）或将元素添加到标记中（与 `content:...`组合），而不必修改标记（`:before`，`:after`）。

## block vs inline-block vs inline

|                                 | `block`                                                     | `inline-block`                             | `inline`                                                                                                               |
| ------------------------------- | ----------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 大小                            | 填充其父容器的宽度。                                        | 取决于内容。                               | 取决于内容。                                                                                                           |
| 定位                            | 从新的一行开始，并且不允许旁边有 HTML 元素（除非是`float`） | 与其他内容一起流动，并允许旁边有其他元素。 | 与其他内容一起流动，并允许旁边有其他元素。                                                                             |
| 能否设置`width`和`height`       | 能                                                          | 能                                         | 不能。 设置会被忽略。                                                                                                  |
| 可以使用`vertical-align`对齐    | 不可以                                                      | 可以                                       | 可以                                                                                                                   |
| 边距（margin）和填充（padding） | 各个方向都存在                                              | 各个方向都存在                             | **只有水平方向**存在。垂直方向会被忽略。 尽管`border`和`padding`在`content`周围，但垂直方向上的空间取决于`line-height` |
| 浮动（float）                   | -                                                           | -                                          | 就像一个`block`元素，可以设置垂直边距和填充。                                                                          |

## `position`各个值区别

## REF

> https://github.com/yangshun/front-end-interview-handbook
