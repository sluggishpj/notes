(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{417:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"渲染机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染机制"}},[t._v("#")]),t._v(" 渲染机制")]),t._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("ol",[a("li",[t._v("处理 HTML 并构建 DOM 树。")]),t._v(" "),a("li",[t._v("处理 CSS 构建 CSSOM 树。")]),t._v(" "),a("li",[t._v("将 DOM 与 CSSOM 合并成一个渲染树。")]),t._v(" "),a("li",[t._v("根据渲染树来布局，计算每个节点的位置。")]),t._v(" "),a("li",[t._v("调用 GPU 绘制，合成图层，显示在屏幕上。")])]),t._v(" "),a("p",[t._v("在构建 CSSOM 树时，会阻塞渲染，直至 CSSOM 树构建完成。并且构建 CSSOM 树是一个十分消耗性能的过程，所以应该尽量保证层级扁平，减少过度层叠，越是具体的 CSS 选择器，执行速度越慢。\n当 HTML 解析到 script 标签时，会暂停构建 DOM，完成后才会从暂停的地方重新开始。也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件。并且 CSS 也会影响 JS 的执行，只有当解析完样式表才会执行 JS，所以也可以认为这种情况下，CSS 也会暂停构建 DOM。")]),t._v(" "),a("h2",{attrs:{id:"load-和-domcontentloaded-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-和-domcontentloaded-区别"}},[t._v("#")]),t._v(" Load 和 DOMContentLoaded 区别")]),t._v(" "),a("p",[t._v("Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。")]),t._v(" "),a("p",[t._v("DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析，不需要等待 CSS，JS，图片加载。")]),t._v(" "),a("h2",{attrs:{id:"图层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图层"}},[t._v("#")]),t._v(" 图层")]),t._v(" "),a("p",[t._v("可以把普通文档流看成一个图层。特定的属性可以生成一个新的图层。"),a("strong",[t._v("不同的图层渲染互不影响")]),t._v("，所以对于某些频繁需要渲染的建议单独生成一个新图层，提高性能。但也不能生成过多的图层，会引起反作用。")]),t._v(" "),a("p",[t._v("通过以下几个常用属性可以生成新图层")]),t._v(" "),a("ul",[a("li",[t._v("3D 变换："),a("code",[t._v("translate3d")]),t._v("、"),a("code",[t._v("translateZ")])]),t._v(" "),a("li",[a("code",[t._v("will-change")])]),t._v(" "),a("li",[a("code",[t._v("video")]),t._v("、"),a("code",[t._v("iframe")]),t._v(" 标签")]),t._v(" "),a("li",[t._v("通过动画实现的 "),a("code",[t._v("opacity")]),t._v(" 动画转换")]),t._v(" "),a("li",[a("code",[t._v("position: fixed")])])]),t._v(" "),a("h2",{attrs:{id:"重绘（repaint）和回流（reflow）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘（repaint）和回流（reflow）"}},[t._v("#")]),t._v(" 重绘（Repaint）和回流（Reflow）")]),t._v(" "),a("ul",[a("li",[t._v("重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘")]),t._v(" "),a("li",[t._v("回流是布局或者几何属性需要改变就称为回流。")])]),t._v(" "),a("p",[t._v("回流必定会发生重绘，重绘不一定会引发回流，回流所需的成本比重绘高。\n以下几个动作可能会导致性能问题：")]),t._v(" "),a("ul",[a("li",[t._v("改变 window 大小")]),t._v(" "),a("li",[t._v("改变字体")]),t._v(" "),a("li",[t._v("添加或删除样式")]),t._v(" "),a("li",[t._v("文字改变")]),t._v(" "),a("li",[t._v("定位或者浮动")]),t._v(" "),a("li",[t._v("盒模型")])]),t._v(" "),a("h3",{attrs:{id:"和-event-loop-的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和-event-loop-的关系"}},[t._v("#")]),t._v(" 和 Event loop 的关系")]),t._v(" "),a("ol",[a("li",[t._v("当 Event loop 执行完 Microtasks 后，会判断 document 是否需要更新。因为浏览器是 60Hz 的刷新率，每 16ms 才会更新一次。")]),t._v(" "),a("li",[t._v("然后判断是否有 "),a("code",[t._v("resize")]),t._v(" 或者 "),a("code",[t._v("scroll")]),t._v(" ，有的话会去触发事件，所以 "),a("code",[t._v("resize")]),t._v(" 和 "),a("code",[t._v("scroll")]),t._v(" 事件也是至少 16ms 才会触发一次，并且自带节流功能。")]),t._v(" "),a("li",[t._v("判断是否触发了 media query")]),t._v(" "),a("li",[t._v("更新动画并且发送事件")]),t._v(" "),a("li",[t._v("判断是否有全屏操作事件")]),t._v(" "),a("li",[t._v("执行 "),a("code",[t._v("requestAnimationFrame")]),t._v(" 回调")]),t._v(" "),a("li",[t._v("执行 "),a("code",[t._v("IntersectionObserver")]),t._v(" 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好")]),t._v(" "),a("li",[t._v("更新界面")]),t._v(" "),a("li",[t._v("以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback 回调。")])]),t._v(" "),a("blockquote",[a("p",[t._v("https://html.spec.whatwg.org/multipage/webappapis.html##event-loop-processing-model")])]),t._v(" "),a("h2",{attrs:{id:"减少重绘和重流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少重绘和重流"}},[t._v("#")]),t._v(" 减少重绘和重流")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("translate")]),t._v(" 代替 "),a("code",[t._v("top")])])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引起回流")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100px'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("visibility")]),t._v(" 替换 "),a("code",[t._v("display: none")]),t._v("，前者只会引起重绘，后者会引发回流")]),t._v(" "),a("li",[t._v("把 DOM 离线后修改，比如：先把 DOM 给 "),a("code",[t._v("display:none")]),t._v(" (有一次 Reflow)，然后你修改 100 次，然后再把它显示出来")]),t._v(" "),a("li",[t._v("不要把 DOM 结点的属性值放在一个循环里当成循环里的变量")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取 offsetTop 会导致回流，因为需要去获取正确的值")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("避免使用 table 布局")]),t._v(" "),a("li",[t._v("CSS 选择器是从右往左匹配查找，所以要避免 DOM 深度过深")]),t._v(" "),a("li",[t._v("将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video 标签，浏览器会自动将该节点变为图层。")]),t._v(" "),a("li",[a("code",[t._v("document.createDocumentFragment()")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);