---
title: 颜色，背景，渐变
---

# 颜色，背景，渐变

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

### HSLA

- H: Hue(色调)。0(或 360)表示红色，120 表示绿色，240 表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360
- S: Saturation(饱和度)。取值为：0.0% - 100.0%
- L: Lightness(亮度)。取值为：0.0% - 100.0%
- A: **不透明度**。取值 0~1 之间。(0 透明)

### currentColor

`currentColor` 关键字指代当前元素的 color 值。如果没有设置则使用其继承的 color 值

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value

## 背景

```css
background-color: #fff;
background-image: url('test.jpg');
background-attachment: local or scroll or fixed;
background-clip:
background-origin:
background-position:
background-repeat:
background-size:
```

### background-attachment

- `background-attachment: fixed`: 背景相对于**视口固定**。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
- `background-attachment: local`: 背景相对于**元素的内容固定**。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动， 并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。
- `background-attachment: scroll`: 背景相对于**元素本身固定**， 而不是随着它的内容滚动（对元素边框是有效的）

如果有多个背景，则用逗号隔开分别应用到各个背景

```css
background-image: url('bg1.png'), url('bg2.png');
background-attachment: scroll, local;
```

> [background-attachment | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)

### background-clip

```css
background-clip: border-box; /*背景延伸至边框外沿（但是在边框下层）*/
background-clip: padding-box; /*背景延伸至内边距（padding）外沿。不会绘制到边框处。*/
background-clip: content-box; /*背景被裁剪至内容区（content box）外沿*/

background-clip: text; /*背景被裁剪成文字的前景色*/
color: transparent;
-webkit-background-clip: text; /*兼容webkit*/
```

> [background-clip | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip)

### background-origin

```css
background-origin: border-box; /*背景图片的定位以 border 区域为参考*/
background-origin: padding-box; /*背景图片的定位以 padding区域为参考*/
background-origin: content-box; /*背景图片的定位以 content 区域为参考*/
```

> 当使用 `background-attachment: fixed`时，该属性将被忽略不起作用

### background-position

```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;
```

### background-repeat

```css
/* Keyword values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;
```

> [background-repeat | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)

### background-size

```css
/* Keyword values */
background-size: cover;
background-size: contain;

/* One-value syntax */
/* the width of the image (height becomes 'auto') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Two-value syntax */
/* first value: width of the image, second value: height */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Multiple backgrounds */
background-size: auto, auto; /* Not to be confused with `auto auto` */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;
```

> [background-size | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

## 渐变

```css
background: linear-gradient(#f69d3c, #3f87a6);
background: radial-gradient(#f69d3c, #3f87a6);
background: repeating-linear-gradient(#f69d3c, #3f87a6 50px);
background: repeating-radial-gradient(#f69d3c, #3f87a6 50px);
background: conic-gradient(#f69d3c, #3f87a6);
```

> [gradient | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient)

### linear-gradient

```css
background: linear-gradient(0turn, #3f87a6, #ebf8e1, #f69d3c);
background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(
    127deg,
    rgba(0, 255, 0, 0.8),
    rgba(0, 255, 0, 0) 70.71%
  ), linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
```

> [linear-gradient | MDN](<https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient()>)

### radial-gradient

```css
background: radial-gradient(#e66465, #9198e5);
background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
background: radial-gradient(circle at 50%, #333, #333 50%, #eee 75%, #333 75%);
background: radial-gradient(ellipse at top, #e66465, transparent), radial-gradient(ellipse at bottom, #4d9f0c, transparent);
```

> [radial-gradient | MDN](<https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient()>)

### conic-gradient

```css
background: conic-gradient(red, orange, yellow, green, blue);
background: conic-gradient(from 0.25turn at 50% 30%, #f69d3c, 10deg, #3f87a6, 350deg, #ebf8e1);
background: conic-gradient(from 3.1416rad at 10% 50%, #e66465, #9198e5);
background: conic-gradient(
  red 6deg,
  orange 6deg 18deg,
  yellow 18deg 45deg,
  green 45deg 110deg,
  blue 110deg 200deg,
  purple 200deg
);
```

![](<https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient()/screenshot_2018-11-29_21.09.19.png>)

> image from [conic-gradient](<https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient()>)

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

## 应用

### 条纹背景

```css
background: linear-gradient(to bottom, red 25%, orange 0, orange 50%, yellow 0, yellow 75%, blue 75%);
```

> red 25%表示结束位置是在 25%，因为是第一个颜色，所以开始位置默认是 0%
> 如果某个色标的位置比整个列表中它之前的色标的位置都要小，则该色标的位置会被设置为它前面所有色标位置值的最大值。所以上面的 orange 0 相当于 orange 25%
> orange 0 此处表示开始位置为 25%
> orange 50%表示结束为值为 50%
> yellow 0 此处表示开始位置为 50%
> yellow 75%表示结束为值为 75%
> blue 75%表示开始位置为 75%，又因为是最后一个，其结束位置为 100%

<iframe height="300" style="width: 100%;" scrolling="no" title="css-secrect-条纹背景" src="https://codepen.io/rinxu/embed/ExXQGYG?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/ExXQGYG">
  css-secrect-条纹背景</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> [更多复杂条纹背景](https://projects.verou.me/css3patterns/)

### 切角效果

表现：缺失了一个角

方案 1：使用背景渐变。通过调整 背景渐变 的角度，以及一段透明渐变 达到目的
方案 2：使用 `clip-path`

<!-- prettier-ignore -->
``` scss
@mixin beveled-corners($bg, $tl: 0, $tr: $tl, $br: $tl, $bl: $tr) {
  background: $bg;
  background: linear-gradient(135deg, transparent $tl, $bg 0) top left,
    linear-gradient(225deg, transparent $tr, $bg 0) top right,
    linear-gradient(-45deg, transparent $br, $bg 0) bottom right,
    linear-gradient(45deg, transparent $bl, $bg 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}

.wrapper {
  width: 200px;
  height: 120px;

  @include beveled-corners(#fcd000, 10px, 20px, 30px, 40px);
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="css-secrect-直角切角" src="https://codepen.io/rinxu/embed/xxrYBXJ?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/xxrYBXJ">
  css-secrect-直角切角</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 滚动阴影提示

原理：两层背景，一层用来生成那条阴影，另一层基本上就是一个用来遮挡阴影的白色矩形，其作用类似于遮罩层。

生成阴影的那层背景将具有默认的 `background-attachment: scroll`，因为它总是保持在原位。把遮罩背景的`background-attachment`属性设置为`local`，这样它就会在我们滚动到最顶部时盖住阴影，在向下滚动时跟着滚动，从而露出阴影。

<!-- prettier-ignore -->
```css
.wrapper {
  width: 400px;
  height: 300px;
  border: 1px dashed #ccc;
  overflow-y: scroll;
  position: relative;

  background: linear-gradient(white 30%, transparent),
    radial-gradient(at 50% 0, rgba(0, 0, 0, 0.2), transparent 70%),
    linear-gradient(transparent 30%, white),
    radial-gradient(at 50% 100%, rgba(0, 0, 0, 0.2), transparent 70%);
  background-repeat: no-repeat;
  background-size: 100% 50px, 100% 15px, 100% 50px, 100% 15px;
  background-attachment: local, scroll, local, scroll;
  background-position: top, top, bottom, bottom;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="css-secrect-滚动阴影提示" src="https://codepen.io/rinxu/embed/WNOMqpw?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/WNOMqpw">
  css-secrect-滚动阴影提示</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
