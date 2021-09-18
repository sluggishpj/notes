# 变换 transforms

## 2D 变换

### transform-origin

```css
/* One-value syntax */
transform-origin: 2px; /* 等价于 2px center */
transform-origin: bottom; /* 等价于 center 100%*/

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;
```

### transform

```css
/* Keyword values */
transform: none;

/* Function values */
transform: <transform-function>[ <transform-function>] *;
```

### `<transform-function>`

> REF: [`<transform-function>`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function)

#### matrix

`matrix(a, b, c, d, tx, ty)` 各个值的变换如下 `matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`

#### perspective

设置用户和 z=0 平面的距离

`transform: perspective(d)` 应用在具体的某个元素上，跟 下文 3D 变换中的 `perspective` 不太一样。

## 3D 变换

以下属性应用在 已变换元素 的父级容器上

### transform-style

用于设置**子元素**是位于 3D 空间中，还是平面中

```css
/* Keyword values */
transform-style: flat;
transform-style: preserve-3d;
```

- `falt`: 子元素忽略了 z 轴的前后叠加，直接按 DOM 的先后顺序叠加
- `preserve-3d`: 子元素前后就取决于各自 z 轴位置

结合[参考文章中的例子](https://css-tricks.com/how-css-perspective-works/#lets-talk-about-transform-style)加深理解

### perspective-origin

设置观看的视角，左上角为原点坐标，默认值是 50% 50%，也就是中心位置

```css
/* One-value syntax */
perspective-origin: x-position;
perspective-origin: center;
perspective-origin: top;

/* Two-value syntax */
perspective-origin: x-position y-position;
perspective-origin: 100% 100%; /*右下角*/

/* x-position 和 y-position 都是关键字*/
perspective-origin: y-position x-position;
perspective-origin: bottom right;
```

> [perspective-origin | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin)

### perspective

指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。

如果元素没有设置 `perspective`属性，也没有设置 `transform:perspective(xx)`，那么就不会有透视效果，也没有 3D 空间的效果（近大远小）

> 参考这个[示例](https://css-tricks.com/how-css-perspective-works/#the-basics-of-perspective)

#### perspective:xx 属性 vs transform: perspective(xx)

在设置了 `transform-style: preserve-3d` 的情况下

```css
perspective: val;
perspective-origin: originVal;
```

等价于

```css
transform: perspective(val);
transform-origin: originVal;
```

### backface-visibility

在 3D 空间内，控制 元素的被遮挡的背面 是否可见。(2D 空间内该属性无效)

```css
/* Keyword values */
backface-visibility: visible;
backface-visibility: hidden;
```

## 应用

### 平行四边形

需要保持文字不变形。

思路 1：嵌套元素，外部元素通过 `skew` 变形，内部元素从反方向`skew`变形
思路 2：通过伪元素绝对定位，直接变换伪元素

```scss
// 嵌套元素
.wrapper {
  background: #6c9bc2;
  transform: skew(-45deg);
  .content {
    // 内容反方向变化
    transform: skew(45deg);
  }
}

// 伪元素
.no-wrapper {
  position: relative;

  &::after {
    content: '';
    transform: skew(-45deg);
    z-index: -1;
    background: #6c9bc2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="css-secrect-平行四边形" src="https://codepen.io/rinxu/embed/LYLQqXe?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/LYLQqXe">
  css-secrect-平行四边形</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 菱形图片

- 方案 1：思路跟上面差不多，通过 `rotate` 外部容器，但是如果内部是图片的话，图片的宽度也需要进行 `scale` 1.42（√2） 倍，否则会填不满
- 方案 2：使用 `clip-path`，具体查看 [css-shape 笔记](./css-shapes) 中的应用

### 梯形

思路：对伪元素使用 3D 变形（因为对自身元素使用 3D 变形，其内部元素不可逆转）

```css
.tab {
    position: relative;
    display: inline-block;
    padding: .5em 1em .35em;
    color: white;
}
.tab::before {
    content:''; /* 用伪元素生成一个矩形 */
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    background: #58a;
    /* 旋转后高度会变小，需适当放大 */
    transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom; /* 旋转时底边固定住 */
```

<iframe height="300" style="width: 100%;" scrolling="no" title="css-secrect-梯形" src="https://codepen.io/rinxu/embed/OJgQqqX?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/OJgQqqX">
  css-secrect-梯形</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## REF

> [how-css-perspective-works | CSS-TRICKS](https://css-tricks.com/how-css-perspective-works/)
>
> [transforms | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
