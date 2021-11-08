---
title: 移动Web
---

## 适配方案

### UI 适配

#### 设备像素比

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

#### Meta viewport



### 高清屏图片适配

### 横屏适配

### iphoneX 适配

## CSS 实现 1px 效果

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
