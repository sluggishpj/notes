---
title: CSS 和 文档
---

# CSS 和 文档

## 概述

引入 CSS 方式：内联，`<style>` 标签，`<link>` 外部样式

## 内联

```html
<span style="color:red; font-size:24px;"></span>
```

## `<link>`

属性都是通用的，常见用途如下

### 加载 CSS

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)" />
```

> `media` 支持`print`, `screen`, `aural`, `braille` 或 媒体查询

### 加载站点图标

包括 PC 端的 “favicon” 图标和移动设备上用以显示在主屏幕的图标

```html
<link rel="icon" href="favicon.ico" />

<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png"
/>
```

### 加载其他资源

```html
<link rel="preload" href="myFont.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
<link rel="preload" href="style.css" as="style" />
<link rel="preload" href="main.js" as="script" />
```

> `preload` 表示预加载，`as` 表示资源类型，`type` 表示资源 MIME type（预加载时浏览器根据该属性判断是否支持该资源，决定是否进行预加载）

> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link

## @import

```css
/* 语法 */
@import url;
@import url list-of-media-queries;

/* e.g */
@import 'custom.css';
@import url('chrome://communicator/skin/');

@import url('fineprint.css') print;
@import url('bluish.css') speech;
@import 'common.css' screen;
@import url('landscape.css') screen and (orientation: landscape);
```

> `@import` 必须放置顶部且最外层
