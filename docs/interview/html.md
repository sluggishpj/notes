---
title: HTML
---

## `DOCTYPE` 有什么用

`DOCTYPE` 是“document type”的缩写。它是 HTML 中用来区分**标准模式**和**怪异模式**的声明，添加后浏览器将使用标准模式渲染页面。不添加则会使用不同的渲染模式，该渲染模式不符合某些规范。

**确保在页面开始处添加`<!DOCTYPE html>`即可**

> https://html.spec.whatwg.org/multipage/syntax.html#the-doctype

## 什么是 `data-` 属性

可以把额外数据存储在 DOM 自身中

```html
<div id="strawberry-plant" data-fruit="12"></div>
```

可以使用 `getAttribute('data-xx')` 或 `dataset['xx']` 获取对应属性

```js
var plant = document.getElementById('strawberry-plant')
plant.getAttribute('data-fruit') // '12'
plant.dataset.fruit // 12
```

## 为什么最好把 CSS 的`<link>`标签放在`<head></head>`之间？为什么最好把 JS 的`<script>`标签恰好放在`</body>`之前，有例外情况吗？

### 把`<link>`放在`<head>`中

**为了逐步呈现页面**。因为将样式表放在文档底部附近，会使许多浏览器（包括 Internet Explorer）不能逐步呈现页面。一些浏览器会**阻止渲染**直到 CSS 下载完毕，以避免在页面样式发生变化时，重新绘制页面中的元素。这种做法可以防止呈现给用户空白的页面或没有样式的内容。

### 把`<script>`标签恰好放在`</body>`之前

脚本在下载和执行期间会阻止 HTML 解析。把`<script>`标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。

例外情况是脚本里包含`document.write()`时。但是现在，document.write()不推荐使用。同时，将`<script>`标签放在底部，意味着浏览器不能开始下载脚本，直到整个文档（document）被解析。也许，对此比较好的做法是，`<script>`使用异步加载。

## 什么是渐进式渲染（progressive rendering）？

渐进式渲染是用于提高网页性能（尤其是提高用户感知的加载速度），以尽快呈现页面的技术。

- 图片懒加载
- 确定显示内容的优先级（分层次渲染）——为了尽快将页面呈现给用户，页面只包含基本的最少量的 CSS、脚本和内容
- 服务端渲染

## REF

> https://github.com/yangshun/front-end-interview-handbook
