---
title: 定位
---

## 定位 position

```css
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

### 粘性定位 sticky

元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括 table-related 元素，基于 top, right, bottom, 和 left 的值进行偏移。偏移值不会影响任何其他元素的位置。

粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。

## z-index

对于一个已经定位的盒子（即其 `position` 属性值不是 `static`，这里要注意的是 CSS 把元素看作盒子），`z-index` 属性指定：

- 盒子在当前堆叠上下文中的堆叠层级
- 盒子是否创建一个本地堆叠上下文

```css
z-index: auto;
z-index: <integer>;
```

`<integer>`（整型数字）是生成的盒子在当前堆叠上下文中的堆叠层级。此盒子也会创建一个堆叠层级为 0 的本地堆叠上下文。这意味着后代（元素）的 `z-indexes` 不与此元素的外部元素的 `z-indexes` 进行对比。
