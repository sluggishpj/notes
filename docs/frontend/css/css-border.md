---
title: 边框
---

# 边框

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

border-top-left-radius: 4px 2px; /*水平 垂直，下同*/
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

> [border-radius | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

## box-shadow

```css
/* Keyword values */
box-shadow: none;

/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */ /*内侧阴影*/
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */ /*多个阴影*/
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

## 应用

### 多重边框

#### box-shadow 方案

```css
.mydiv {
  box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink;
}
```

#### outline 方案

- `box-shadow`只能模拟实线边框
- `outline`可以模拟虚线边框
  - `outline-offset`控制元素与元素边缘的间距
  - 只适用于双层“边框”场景，不支持逗号分隔的多个值

### 边框内圆角

思路：`box-shadow` 和 `outline` 叠加。

`box-shadow` 会跟着元素的圆角走，`outline`不会

```css
.container {
  background: tan;
  border-radius: 0.8em;
  padding: 1em;
  box-shadow: 0 0 0 0.6em #655;
  outline: 0.6em solid #655;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="css-secrect-边框内圆角" src="https://codepen.io/rinxu/embed/vYZdQoO?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/vYZdQoO">
  css-secrect-边框内圆角</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 椭圆/半椭圆

通过 border-radius 控制每个角的弧度

<iframe height="300" style="width: 100%;" scrolling="no" title="css-secrect-椭圆&amp;半椭圆" src="https://codepen.io/rinxu/embed/oNwEmqo?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/oNwEmqo">
  css-secrect-椭圆&amp;半椭圆</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 单侧投影

应用一个负的扩张半径，而它的值刚好等于模糊半径

```css
box-shadow: 0 5px 4px -4px black;
```

<iframe height="300" style="width: 100%;" scrolling="no" title="css-secrect-单侧投影" src="https://codepen.io/rinxu/embed/oNwEOLN?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/oNwEOLN">
  css-secrect-单侧投影</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 不规则投影

因为 `border-radius` 会忽略透明的部分，所以`box-shadow`无法完美围绕元素周围。这类情况包括：

- 半透明图像、背景图像、或者 border-image
- 点状、虚线或半透明的边框，但没有背景（或者当 backgroud-clip 不是 border-box 时）
- 对话气泡
- 切角形状
- 折角效果
- 菱形图片

解决方法：通过 `filter` 指定 `drop-shadow` 滤镜

```css
filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.5));
```

### 扩大点击区域

扩大点击区域的同时，不影响原来元素的大小。
方案：可以为其设置一圈透明边框，因为鼠标对元素边框的交互也会触发鼠标事件。同时使用 box-shadow 模拟边框。

```css
border: 10px solid transparent;
background-clip: padding-box; /* 避免背景色扩张到边框 */
box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3) inset; /* 使用box-shadow模拟实线边框 */
```
