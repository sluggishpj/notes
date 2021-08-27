---
title: 形状
---

# 形状

## shape

在 [Level 1 specification](https://drafts.csswg.org/css-shapes/) 中，CSS Shapes 可以应用在浮动元素上，可以通过设置一些属性，使浮动元素周围元素不再是矩形围绕该元素。

规范定义了 3 种新的属性用来控制形状

- [`shape-outside`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside): 允许定义基本形状，比如圆形, 椭圆形等
- [`shape-image-threshold`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-image-threshold): 设定一个 alpha 通道的界限值来提取 `shape-outside` 值为图像/渐变时 的形状
- [`shape-margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-margin): 调整（浮动元素的）形状边缘与环绕内容之间的距离

> [CSS_Shapes | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes)

### shape-outside

- 定义基本形状

```css
shape-outside: <basic-shape>;
```

> [basic-shape|MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/basic-shape)

eg.

```css
shape-outside: inset(22% 12% 15px 35px);
shape-outside: shape-outside: circle(50%);
shape-outside: ellipse(115px 55px at 50% 40%);
shape-outside: polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%, 50% 81.3%, 80.9% 97.6%, 75% 63.1%, 100% 38.8%, 65.5% 33.8%);
```

- 使用 CSS 盒子模型中的值

```css
shape-outside: content-box;
shape-outside: padding-box;
shape-outside: border-box;
shape-outside: margin-box;
```

> 可以结合 `border-radius`

- 其他

```css
/* <url> value */
shape-outside: url(image.png);

/* <gradient> value */
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);
```

### shape-image-threshold

```css
shape-outside: linear-gradient(50deg, rgb(77, 26, 103), transparent 80%, transparent);
shape-image-threshold: 0.2;
```

### shape-margin

作用和 margin 类似，控制形状和周围元素的间距

```css
/* <length> values */
shape-margin: 10px;
shape-margin: 20mm;

/* <percentage> value */
shape-margin: 60%;
```

### 与 clip-path 的关系

`clip-path` 是裁剪出可视区域，对原来的周边元素位置不影响。
形状 控制的是 自身元素的显示区域，会影响周边元素的围绕.

## clip-path

使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。

```css
/* Keyword values */
clip-path: none;

/* <clip-source> values */
clip-path: url(resources.svg#c1);

/* <geometry-box> values */
clip-path: margin-box;
clip-path: border-box;
clip-path: padding-box;
clip-path: content-box;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* <basic-shape> values */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: ellipse(50px 60px at 0 10% 20%);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
clip-path: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z');

/* Box and shape values combined */
clip-path: padding-box circle(50px at 0 100px);
```

> [clip-path | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)
