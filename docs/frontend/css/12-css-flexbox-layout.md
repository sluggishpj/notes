---
title: Flex 布局
---

### 容器属性

```css
.container {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse; /*默认row*/
  flex-wrap: nowrap | wrap | wrap-reverse; /*指定 flex 元素单行显示还是多行显示 。如果允许换行，这个属性允许你控制行的堆叠方向, 默认 nowrap*/
  flex-flow: <flex-direction> | <flex-wrap>; /*默认 row nowrap*/
  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### 子项的属性

```css
.item {
  order: <integer>; /*数值越小，排列越靠前，默认0*/
  flex-grow: 0; /*放大比例，默认为0，即如果存在剩余空间，也不放大*/
  flex-shrink: 1; /*缩小比例，默认为1，即如果空间不足，该项目将缩小*/
  flex-basis: auto; /*元素在主轴方向上的初始大小。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小*/
  flex: none | [ <flex-grow> <flex-shrink>? || <flex-basis> ];
  align-self: auto | flex-start | flex-end | center | baseline | stretch; /*默认值为auto，表示继承父元素的align-items属性*/
}
```

> `flex-basis` 比 `width` 具有更高的优先级

### 参考资料

> [CSS_Flexible_Box_Layout | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)

> https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
