(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{496:function(t,a,e){"use strict";e.r(a);var s=e(23),h=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webpack-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-原理"}},[t._v("#")]),t._v(" Webpack 原理")]),t._v(" "),e("h2",{attrs:{id:"流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://f000.backblazeb2.com/file/j-assets/webpack-process.jpg",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("图片来源：https://fed.taobao.org/blog/2016/09/10/webpack-flow/")])]),t._v(" "),e("h2",{attrs:{id:"热更新原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热更新原理"}},[t._v("#")]),t._v(" 热更新原理")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://f000.backblazeb2.com/file/j-assets/webpack-hmr.jpg",alt:"webpack-hrm"}})]),t._v(" "),e("blockquote",[e("p",[t._v("图片来源：https://zhuanlan.zhihu.com/p/30669007")])]),t._v(" "),e("h3",{attrs:{id:"qa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qa"}},[t._v("#")]),t._v(" QA")]),t._v(" "),e("h4",{attrs:{id:"对比-live-reload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比-live-reload"}},[t._v("#")]),t._v(" 对比 live reload")]),t._v(" "),e("p",[t._v("live reload 不会保存应用的状态，刷新应用后，应用之前的状态会丢失")]),t._v(" "),e("h3",{attrs:{id:"ref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" REF")]),t._v(" "),e("blockquote",[e("p",[t._v("https://zhuanlan.zhihu.com/p/30669007"),e("br"),t._v("\nhttps://webpack.docschina.org/concepts/hot-module-replacement/ > http://yizxq.xyz/2021/08/03/webpack/webpack_hotModuleReplacement%E5%8E%9F%E7%90%86/")])]),t._v(" "),e("h2",{attrs:{id:"tree-shaking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" tree shaking")]),t._v(" "),e("p",[t._v("依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export，通过编译阶段的静态分析，找到没有引入的模块并打上标记，然后在压缩阶段利用像 terser 这样的工具删除这些没有用到的代码")]),t._v(" "),e("blockquote",[e("p",[t._v("https://webpack.docschina.org/guides/tree-shaking/")])]),t._v(" "),e("h2",{attrs:{id:"babel-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-原理"}},[t._v("#")]),t._v(" babel 原理")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("作用")]),t._v(" "),e("ul",[e("li",[t._v("转换语法，eg. 箭头函数转换为普通函数")]),t._v(" "),e("li",[t._v("Polyfill，支持新对象/方法. eg. Promise")])])]),t._v(" "),e("li",[e("p",[t._v("原理：词法分析 -> 语法分析 -> 转换 AST -> 代码生成")])])]),t._v(" "),e("blockquote",[e("p",[t._v("https://github.com/starkwang/the-super-tiny-compiler-cn"),e("br"),t._v("\nhttps://babeljs.io/docs/en/"),e("br"),t._v("\nhttps://juejin.cn/post/7025237833543581732")])]),t._v(" "),e("h2",{attrs:{id:"写个-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写个-loader"}},[t._v("#")]),t._v(" 写个 loader")]),t._v(" "),e("blockquote",[e("p",[t._v("https://webpack.docschina.org/contribute/writing-a-loader/")])]),t._v(" "),e("h2",{attrs:{id:"写个-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写个-plugin"}},[t._v("#")]),t._v(" 写个 plugin")]),t._v(" "),e("blockquote",[e("p",[t._v("https://webpack.docschina.org/contribute/writing-a-plugin/")])]),t._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("h3",{attrs:{id:"hash-chunkhash-contenthash-区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hash-chunkhash-contenthash-区别"}},[t._v("#")]),t._v(" hash, chunkhash, contenthash 区别")]),t._v(" "),e("ul",[e("li",[t._v("hash(新的叫 fullhash): 根据所有文件生成的 hash，只要其中一个改变，重新生成的 值就会变")]),t._v(" "),e("li",[t._v("chunkhash: 根据所属的 chunk 生成的 hash，一个 chunk 可能包含多个子 chunk，只要其中一个子 chunk 改变，关联的 chunk 都会变")]),t._v(" "),e("li",[t._v("contenthash: 根据生成后的 独立的文件内容生成，只跟生成后的文件内容有关")])]),t._v(" "),e("blockquote",[e("p",[t._v("REF: https://webpack.js.org/configuration/output/#template-strings\nREF: https://stackoverflow.com/questions/35176489/what-is-the-purpose-of-webpack-hash-and-chunkhash")])]),t._v(" "),e("h3",{attrs:{id:"sourcemap-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap-原理"}},[t._v("#")]),t._v(" sourcemap 原理")]),t._v(" "),e("blockquote",[e("p",[t._v("http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html")])]),t._v(" "),e("h2",{attrs:{id:"ref-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ref-2"}},[t._v("#")]),t._v(" REF")]),t._v(" "),e("blockquote",[e("p",[t._v("https://webpack.docschina.org"),e("br"),t._v("\nhttps://fed.taobao.org/blog/2016/09/10/webpack-flow"),e("br"),t._v("\nhttps://juejin.cn/post/6854818576470933512")])])])}),[],!1,null,null,null);a.default=h.exports}}]);