---
title: 浮动
---

## 浮动布局

浮动元素应沿其容器的左侧或右侧放置(或者碰到另外一个浮动的元素)，允许文本和内联元素环绕它。该元素从网页的正常流动(文档流)中移除，当依旧是文档流的一部分。

```css
float: left;
float: right;
float: none;
```

由于 float 意味着使用块布局，它在某些情况下修改 display 值的计算值：

比如

- `inline` => `block`
- `inline-block` => `block`
- `inline-table` => `table`
- `inline-flex` => `flex`
- `inline-grid` => `grid`

> 更多可查看：[float | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

## 清除浮动 clear

```css
clear: none;
clear: left; /*元素被向下移动用于清除之前的左浮动，也就是左边不相邻浮动元素。*/
clear: right;
clear: both;
```

> 如果一个元素里只有浮动元素，那它的高度会是 0。如果你想要它自适应即包含所有浮动元素，那你需要清除它的子元素。

```css
#container::after {
  content: '';
  display: block;
  clear: both;
}
```
