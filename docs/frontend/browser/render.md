---
title: 渲染机制
---

# 渲染机制

## 步骤

1. 处理 HTML 并构建 DOM 树。
2. 处理 CSS 构建 CSSOM 树。
3. 将 DOM 与 CSSOM 合并成一个渲染树。
4. 根据渲染树来布局，计算每个节点的位置。
5. 调用 GPU 绘制，合成图层，显示在屏幕上。

在构建 CSSOM 树时，会阻塞渲染，直至 CSSOM 树构建完成。并且构建 CSSOM 树是一个十分消耗性能的过程，所以应该尽量保证层级扁平，减少过度层叠，越是具体的 CSS 选择器，执行速度越慢。
当 HTML 解析到 script 标签时，会暂停构建 DOM，完成后才会从暂停的地方重新开始。也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件。并且 CSS 也会影响 JS 的执行，只有当解析完样式表才会执行 JS，所以也可以认为这种情况下，CSS 也会暂停构建 DOM。

## Load 和 DOMContentLoaded 区别

Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。

DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。

## 图层

可以把普通文档流看成一个图层。特定的属性可以生成一个新的图层。**不同的图层渲染互不影响**，所以对于某些频繁需要渲染的建议单独生成一个新图层，提高性能。但也不能生成过多的图层，会引起反作用。

通过以下几个常用属性可以生成新图层

- 3D 变换：`translate3d`、`translateZ`
- `will-change`
- `video`、`iframe` 标签
- 通过动画实现的 `opacity` 动画转换
- `position: fixed`

## 重绘（Repaint）和回流（Reflow）

- 重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘
- 回流是布局或者几何属性需要改变就称为回流。

回流 Reflow 必定会发生重绘，重绘不一定会引发回流，回流所需的成本比重绘高。
以下几个动作可能会导致性能问题：

- 插入/删除/更新 DOM 元素
- 修改页面内容，比如 input 输入
- 获取元素的一些属性，如 `offset(Top/Left/Width/Height)`/ `scroll(Top/Left/Width/Height)` 或 `getComputedStyle`
- 修改 CSS 样式
- 改变 window 大小
- 滚动

### 减少重绘和回流

- 使用 `translate` 代替 `top`

```html
<div class="test"></div>
<style>
  .test {
    position: absolute;
    top: 10px;
    width: 100px;
    height: 100px;
    background: red;
  }
</style>
<script>
  setTimeout(() => {
    // 引起回流
    document.querySelector('.test').style.top = '100px'
  }, 1000)
</script>
```

- 使用 `visibility` 替换 `display: none`，前者只会引起重绘，后者会引发回流
- 把 DOM 离线后修改，比如：先把 DOM 给 `display:none` (有一次 Reflow)，然后你修改 100 次，然后再把它显示出来
- 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量

```js
for (let i = 0; i < 1000; i++) {
  // 获取 offsetTop 会导致回流，因为需要去获取正确的值
  console.log(document.querySelector('.test').style.offsetTop)
}
```

- 将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video 标签，浏览器会自动将该节点变为图层。
- `document.createDocumentFragment()`
- 减少不必要的 DOM 深度。在 DOM 树中的一个级别进行更改可能会致使该树的所有级别（上至根节点，下至所修改节点的子级）都随之变化。
- 如果您想进行复杂的渲染更改（例如动画），请在流程外执行此操作。您可以使用 position-absolute 或 position-fixed 来实现此目的。
- 尽可能减少 CSS 规则的数量，并移除未使用的 CSS 规则。
- 避免使用不必要且复杂的 CSS 选择器（尤其是后代选择器），因为此类选择器需要耗用更多的 CPU 处理能力来执行选择器匹配。

> https://developers.google.com/speed/docs/insights/browser-reflow

### 和 Event loop 的关系

1. 当 Event loop 执行完 Microtasks 后，会判断 document 是否需要更新。因为浏览器是 60Hz 的刷新率，每 16ms 才会更新一次。
2. 然后判断是否有 `resize` 或者 `scroll` ，有的话会去触发事件，所以 `resize` 和 `scroll` 事件也是至少 16ms 才会触发一次，并且自带节流功能。
3. 判断是否触发了 media query
4. 更新动画并且发送事件
5. 判断是否有全屏操作事件
6. 执行 `requestAnimationFrame` 回调
7. 执行 `IntersectionObserver` 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
8. 更新界面
9. 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback 回调。

> https://html.spec.whatwg.org/multipage/webappapis.html##event-loop-processing-model

## 从输入一个 URL 地址到浏览器完成渲染的整个过程

[思维导图 | 语雀](https://www.yuque.com/megumin/rlykn7/gag496)
