---
title: 移动Web
---

## 基础概念

### 设备像素比

- JS 获取

```js
const dpr = window.devicePixelRatio
```

- CSS 媒体查询

```css
@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
  /* content */
}
```

- SCSS Mixin

```scss
// 根据dpr自动填入@media前缀
@mixin dpr($dpr) {
  @media only screen and (-webkit-min-device-pixel-ratio: $dpr),
    only screen and (min--moz-device-pixel-ratio: $dpr),
    only screen and (-o-min-device-pixel-ratio: $dpr/1),
    only screen and (min-device-pixel-ratio: $dpr) {
    /* Retina-specific stuff here */
    @content;
  }
}

// 使用方法
// @include drp(3) {
//     background-image: url('xxx@3x.png')
// }
```

### 视口

![](https://raw.githubusercontent.com/sluggishpj/assets/main/images/h5-viewport.svg)

### Meta viewport

```html
<meta
  name="viewport"
  content="width=device-width; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;"
/>
```

| Value         | 可能值                    | 描述                                                    |
| ------------- | ------------------------- | ------------------------------------------------------- |
| width         | 正整数或 device-width     | 以 pixels（像素）为单位， 定义布局视口的宽度。          |
| height        | 正整数或 device-height    | 以 pixels（像素）为单位， 定义布局视口的高度。          |
| initial-scale | 0.0 - 10.0                | 定义页面初始缩放比率。                                  |
| minimum-scale | 0.0 - 10.0                | 定义缩放的最小值；必须小于或等于 maximum-scale 的值。   |
| maximum-scale | 0.0 - 10.0                | 定义缩放的最大值；必须大于或等于 minimum-scale 的值。   |
| user-scalable | 一个布尔值（yes 或者 no） | 如果设置为 no，用户将不能放大或缩小网页。默认值为 yes。 |

#### 缩放

`width` 可以决定布局视口的宽度，实际上它并不是布局视口的唯一决定性因素，设置 `initial-scale` 也有肯能影响到布局视口，因为**布局视口宽度取的是 `width` 和视觉视口宽度的最大值**。
例如：若手机的理想视口宽度为 `400px`，设置 `width=device-width，initial-scale=2`，此时 `视觉视口宽度 = 理想视口宽度 / initial-scale` 即 `200px`，布局视口取两者最大值即 `device-width` `400px`。
若设置 `width=device-width，initial-scale=0.5`，此时`视觉视口宽度 = 理想视口宽度 / initial-scale` 即 `800px`，布局视口取两者最大值即 `800px`。

## CSS 实现 1px 效果

问题描述：在设备像素比大于 1 的屏幕上，我们写的 1px 实际上是被多个物理像素渲染，这就会出现 1px 在有些屏幕上看起来很粗的现象。

### `border-image`

原理：`border-image-slice` 会切割背景图片中的部分，显示在边框区域中。将高度为 2px 图片 塞进 1px 边框中，相当于缩小了一半。加上一半是透明的，表现效果就是 0.5px 的线

```css
.border-1px-with-border-image {
  border-bottom: 1px solid #000;
}

@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .border-1px-with-border-image {
    border-bottom: 1px solid transparent;
    /* 上部分透明，下部分黑色 */
    /* 使用图片 */
    /* border-image-source: url('@/assets/images/1x2-half-black.svg'); */
    /* 使用渐变 */
    border-image-source: linear-gradient(to top, #000 50%, transparent 0);
    border-image-slice: 0 0 100% 0;
  }
}
```

> 使用图片缺点：4 个边框需要 4 张图片，且不好调整颜色。

### `background-image`

和 `border-image` 类似

```scss
.border-1px-with-bg-image {
  border-bottom: 1px solid #000;
}

@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .border-1px-with-bg-image {
    border: none;
    // 方式1. 使用图片。边框图片是 1x2，上部分是透明的
    // background-image: url(@/assets/images/1x2-half-black.svg);
    // 方式2. 使用渐变
    background-image: linear-gradient(to top, #000 50%, transparent 0);
    background-position: left bottom;
    background-size: 100% 1px;
    background-repeat: repeat-x;
  }
}
```

### 伪类+transform

```scss
.border-1px-with-transform {
  position: relative;
}
.border-1px-with-transform::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: #000;
}

@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .border-1px-with-transform::after {
    transform: scaleY(0.5);
  }
}
```

## 适配方案

### flexible 方案

页面上统一使用 rem 来布局，通过 动态计算 html 节点的 `font-size`

```js
// set 1rem = viewWidth / 10
function setRemUnit() {
  var rem = docEl.clientWidth / 10
  docEl.style.fontSize = rem + 'px'
}

setRemUnit()

// reset rem unit on page resize
window.addEventListener('resize', setRemUnit)
window.addEventListener('pageshow', function (e) {
  if (e.persisted) {
    setRemUnit()
  }
})
```

> 由于 `viewport` 单位得到众多浏览器的兼容，`lib-flexible` 这个过渡方案已经可以放弃使用，不管是现在的版本还是以前的版本，都存有一定的问题。建议大家开始使用 `viewport` 来替代此方。

### vh、vw 方案

- `vw`: 1vw 等于视觉视口宽度的 1%
- `vh`: 1vh 为视觉视口高度的 1%
- `vmin`: vw 和 vh 中的较小值
- `vmax`: 选取 vw 和 vh 中的较大值

## iphoneX 适配

> 缺少 iphonex 给我验证下==

- 设置 `viewport-fit=cover`

```html
<meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
```

```css
@supports (padding: max(0px)) {
  body {
    padding-top: max(12px, env(safe-area-inset-top));
    padding-right: max(12px, env(safe-area-inset-right));
    padding-bottom: max(12px, env(safe-area-inset-bottom));
    padding-left: max(12px, env(safe-area-inset-left));
  }
}
```

> https://webkit.org/blog/7929/designing-websites-for-iphone-x/

## 横屏适配

- JS

```js
window.addEventListener('resize', () => {
  if (window.orientation === 180 || window.orientation === 0) {
    // 正常方向或屏幕旋转180度
    console.log('竖屏')
  }
  if (window.orientation === 90 || window.orientation === -90) {
    // 屏幕顺时钟旋转90度或屏幕逆时针旋转90度
    console.log('横屏')
  }
})
```

- CSS

```css
@media screen and (orientation: portrait) {
  /*竖屏...*/
}
@media screen and (orientation: landscape) {
  /*横屏...*/
}
```

## 高清屏图片适配

针对不同 DPR 的屏幕，我们需要展示不同分辨率的图片。

### media 查询

使用 [设备像素比](#设备像素比) 中的 mixin

```scss
@include drp(2) {
  background-image: url('xxx@2x.png');
}

@include drp(3) {
  background-image: url('xxx@3x.png');
}
```

> 适用于背景图

### `image-set()`

> [image-set()|MDN](<https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set()>)

```css
.box {
  background-image: -webkit-image-set(url('small-balloons.jpg') 1x, url('large-balloons.jpg') 2x);
  background-image: image-set(url('small-balloons.jpg') 1x, url('large-balloons.jpg') 2x);
}
```

> 适用于背景图

### srcset

- 根据 dpr

```html
<img src="favicon72.png" alt="MDN logo" srcset="favicon144.png 2x, favicon216.png 3x" />
```

- 根据 `sizes` 条件

```html
<img
  src="//placehold.it/140x140"
  alt="test"
  srcset="//placehold.it/140x140 140w, //placehold.it/280x280 280w"
  sizes="(max-width: 600px) 140px, 50vw"
/>
```

> 当屏幕尺寸小于 600 时，优先加载 `>=140px` 且接近 `140w` 的图片，且图片的默认宽度是 `140px`。上例是加载了 140x140 的图片。其他情况加载 另一张图片，且图片默认宽度为 `50vw`

> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes

### JS 手动调整

```js
const dpr = window.devicePixelRatio
const images = document.querySelectorAll('img')
images.forEach((img) => {
  img.src.replace('.', `@${dpr}x.`)
})
```

### 使用 SVG

## 屏蔽原生操作

### 禁止移动端 Safari 电话号码自动识别

移动端 Safari 会把像电话号码的数字 自动识别为电话号码

- 全局禁止

```html
<meta name="format-detection" content="telephone=no" />
```

- 手动识别

```html
<a href="tel:123456">123456</a>
```

### 禁止邮箱自动失败

- 全局禁止

```html
<meta content="email=no" name="format-detection" />
```

- 手动识别

```html
<a href="mailto:google@gmail.com">google@gmail.com</a>
```

### 禁止选中文字

```css
.no-select {
  user-select: auto;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
```

### 禁止右键保存图片

- 方法 1. 使用 `pointer-events: none`，移动端和桌面都适用

```css
img {
  pointer-events: none;
}
```

- 方法 2. 使用 `oncontextmenu="return false;"`，待验证 IOS

```html
<img src="https://i.postimg.cc/FF2h3Xsz/girl.jpg" alt="" oncontextmenu="return false;" />
```

- 方法 3. 只针对 IOS（待验证）

```css
img {
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
```

> REF: https://stackoverflow.com/questions/19587555/disable-default-save-image-option-in-mobile

## JSBridge

## REF

> https://juejin.cn/post/6844904066301050893
>
> https://juejin.cn/post/6844903845617729549
