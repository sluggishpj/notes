---
title: 综合问题
---

## 动画卡顿问题

- JS:

  - 考虑节流、防抖：`requestAnimationFrame`
  - DOM 无关耗时操作，考虑 `Web Worders`

- CSS:

  - 减少 [ReFlow（回流）](/frontend/browser/render.html#重绘-repaint-和回流-reflow)操作

- Layout
  - 动画对应元素，如果是**渲染层(RenderLayout)**，可以考虑提升为**合成层(CompositingLayout)**，方法包括 **3D transforms**、**position fixed**、[`will-change`](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change)等
  - REF: https://juejin.cn/post/6844903966573068301

## 资源下载顺序

### CSS 资源下载

- 立即下载，普通 CSS 都是阻塞 rendering 的
- 可以通过特定方式创建非阻塞 CSS

  - 通过媒体查询，非命中条件的 CSS 就是非阻塞的

- 不管阻塞/非阻塞 CSS，浏览器都会**全部下载**下来

所以要尽快把所需的 CSS 下载下来，这也是 css link 放 `<head>` 中的缘故

> https://web.dev/critical-rendering-path-render-blocking-css/

### JS 资源下载

- 立即下载，所有 JS **执行**都会阻塞 DOM 解析
- 普通 JS **下载**会阻塞 DOM 解析
- 可以通过特定方式创建 下载时非阻塞的 JS: [defer/async/module](/frontend/js/js-in-html.html#defer-async)

## 模块循环引用

> http://www.ruanyifeng.com/blog/2015/11/circular-dependency.html