---
title: 在HTML中使用JS
---

## `<script>`

1. 带有 src 属性的 `<script>` 元素不应该在其 `<script>` 和 `</script>` 标签之间再包含额外的 JavaScript 代码。如果包含了嵌入的代码，则只会下载并执行外部脚本文件，嵌入的代码会被忽略。

2. 无论如何包含代码，只要不存在 `defer` 和 `async` 属性，浏览器都会按照 `<script>` 元素在页面中出现的先后顺序对它们依次进行解析。换句话说，在第一个 `<script>` 元素包含的代码解析完成后，第二个 `<script>` 包含的代码才会被解析，然后才是第三个、第四个……

3. 在文档的 `<head>` 元素中包含所有 JavaScript 文件，意味着必须等到全部 JavaScript 代码都被下载、解析和执行完成以后，才能开始呈现页面的内容（浏览器在遇到 `<body>` 标签时才开始呈现内容）。对于那些需要很多 JavaScript 代码的页面来说，这无疑会导致浏览器在呈现页面时出现明显的延迟，而延迟期间的浏览器窗口中将是一片空白。为了避免这个问题，可以把 JavaScript 引用放在 `<body>` 元素中页面内容的后面

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example HTML Page</title>
  </head>
  <body>
    <!-- 这里放内容 -->
    <script type="text/javascript" src="example1.js"></script>
    <script type="text/javascript" src="example2.js"></script>
  </body>
</html>
```

4. `<noscript>` 元素，用以在不支持 JavaScript 的浏览器中显示替代的内容。这个元素可以包含能够出现在文档 `<body>` 中的任何 HTML 元素—— `<script>` 元素除外。包含在 `<noscript>` 元素中的内容只有在下列情况下才会显示出来：
   - 浏览器不支持脚本；
   - 浏览器支持脚本，但脚本被禁用。

### defer, async

1. `<script>` 标签定义了 defer 属性。这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，**脚本会被延迟到整个页面都解析完毕后再运行**，相当于告诉浏览器立**即下载，但延迟执行**。延迟脚本总是按照指定它们的**顺序执行**，只适用于**外部脚本**

2. 与 defer 类似， async 只适用于**外部脚本**文件，并告诉浏览器**立即下载文件并执行**。但与 defer 不同的是，标记为 async 的脚本并**不保证按照指定它们的先后顺序执行**。第二个脚本文件可能会在第一个脚本文件之前执行。

![ahemhq.png](https://s1.ax1x.com/2020/08/07/ahemhq.png)

> https://html.spec.whatwg.org/multipage/scripting.html
