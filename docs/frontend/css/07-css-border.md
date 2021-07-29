---
title: 边框
---

## border

- `border: <line-width> || <line-style> || <color>`

> 可以针对各边设置 `border-top/right/bottom/left`

通过调整 四边的 border，可以绘制出 三角形，梯形等

> [css-shapes | CSS-TRICKS](https://css-tricks.com/the-shapes-of-css/)

## border-radius

```
border-radius: <length-percentage>{1,4} [ / <length-percentage>{1,4} ]?
where
<length-percentage> = <length> | <percentage>
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* 等价于： */

border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

> [border-radius | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)
