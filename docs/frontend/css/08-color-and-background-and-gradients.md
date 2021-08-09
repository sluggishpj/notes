---
title: 颜色，背景，渐变
---

## 颜色

```css
color: currentcolor;

color: red;

color: #090; /*#RGB*/
color: #009900;

color: #090a; /*#RGBA*/
color: #009900aa; /*#RRGGBBAA*/

/* rgb[a](R, G, B[, A]) */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);

/*rgb[a](R G B[ / A])*/
color: rgb(34 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* hsl[a](H, S, L[, A]) */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);

/* hsl[a](H S L[ / A]) */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);

/* Global values */
color: inherit;
color: initial;
color: revert;
color: unset;
```

### currentColor

`currentColor` 关键字指代当前元素的 color 值。如果没有设置则使用其继承的 color 值

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value

## 背景

## 渐变

## 其他关键字

[Style origin](https://developer.mozilla.org/en-US/docs/Glossary/Style_origin): 页面样式最终由以下样式决定，统称为 `style origins`

- **User-agent origin**：浏览器自身的样式
- **User origin**: 用户自行加的【通过插件等】
- **Author origin**：网站程序员编写的样式文件

### revert

**Author origin** -> **User origin** -> **User-agent origin** -> `unset`

在 **Author origin** 中应用 `revert`，则其属性值回退到 **User origin**，如果没有则往右找，如果 **User-agent origin** 也没有，则表现和 `unset` 一致。在其他 origin 设置也同理往右。

### unset

-> `inherit` -> `initial`

属性值为 `unset` 时，且有继承的属性值时，则等价于 `inherit`。如果没有相应的继承值, 则等价于 `initial`

`revert`和 `unset`在很多场景下表现一致，唯一不同的就是 `revert` 会用 用户/浏览器的回退样式。

> `div` 的 initial 样式是 `inline`，但在 **User-agent origin** 中是 `block`

