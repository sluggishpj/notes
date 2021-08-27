(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{405:function(t,s,a){"use strict";a.r(s);var e=a(21),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),a("h2",{attrs:{id:"基本选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本选择器"}},[t._v("#")]),t._v(" 基本选择器")]),t._v(" "),a("ul",[a("li",[t._v("通用选择器: "),a("code",[t._v("* { style properties }")])]),t._v(" "),a("li",[t._v("元素选择器: "),a("code",[t._v("element { style properties }")])]),t._v(" "),a("li",[t._v("ID 选择器: "),a("code",[t._v("#id_value { style properties }")])]),t._v(" "),a("li",[t._v("类选择器: "),a("code",[t._v(".class_name { style properties }")])]),t._v(" "),a("li",[t._v("属性选择器: 参照下一子类")])]),t._v(" "),a("h3",{attrs:{id:"属性选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性选择器"}},[t._v("#")]),t._v(" 属性选择器")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("[attr]")]),t._v(": 带有以 attr 命名的属性的元素")]),t._v(" "),a("li",[a("code",[t._v("[attr=value]")]),t._v(": 带有以 attr 命名的属性，且属性值为 value 的元素")]),t._v(" "),a("li",[a("code",[t._v("[attr~=value]")]),t._v(": 带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value")]),t._v(" "),a("li",[a("code",[t._v("[attr|=value]")]),t._v(':带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀（"'),a("code",[t._v("-")]),t._v('"为连字符，Unicode 编码为 U+002D）开头')]),t._v(" "),a("li",[a("code",[t._v("[attr^=value]")]),t._v(": 带有以 attr 命名的属性，且属性值是以 value 开头的元素")]),t._v(" "),a("li",[a("code",[t._v("[attr$=value]")]),t._v(": 表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素")]),t._v(" "),a("li",[a("code",[t._v("[attr*=value]")]),t._v(": 表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素")]),t._v(" "),a("li",[a("code",[t._v("[attr operator value i]")]),t._v(": 在属性选择器的右方括号前添加一个用空格隔开的字母 i（或 I），可以在匹配属性值时忽略大小写（支持 ASCII 字符范围之内的字母）")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* 匹配 lang="en", lang="en-US" 等 */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*[lang|='en']")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* Internal links, beginning with "#" */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a[href^='#']")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* Links with "example" anywhere in the URL */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a[href*='example']")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" silver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* Links with "insensitive" anywhere in the URL,\n   regardless of capitalization */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a[href*='insensitive' i]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* Links that end in ".org" */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a[href$='.org']")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* Links that start with "https" and end in ".org" */')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("a[href^='https'][href$='.org']")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br")])]),a("h2",{attrs:{id:"分组选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组选择器"}},[t._v("#")]),t._v(" 分组选择器")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("element, element, element { style properties }")])])]),t._v(" "),a("h2",{attrs:{id:"组合器-combinators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合器-combinators"}},[t._v("#")]),t._v(" 组合器(Combinators)")]),t._v(" "),a("ul",[a("li",[t._v("后代组合器: "),a("code",[t._v("selector1 selector2 {style properties}")])]),t._v(" "),a("li",[t._v("直接子代组合器: "),a("code",[t._v("selector1 > selector2 { style properties }")])]),t._v(" "),a("li",[t._v("一般兄弟组合器: "),a("code",[t._v("former_element ~ target_element { style properties }")]),t._v(", "),a("code",[t._v("former_element")]),t._v(" 和 "),a("code",[t._v("target_element")]),t._v(" 都是在同一父元素下，匹配"),a("code",[t._v("former_element")]),t._v("后的所有 "),a("code",[t._v("target_element")]),t._v(" 元素")]),t._v(" "),a("li",[t._v("紧临兄弟选择器: "),a("code",[t._v("former_element + target_element { style properties }")]),t._v(", 同一父元素下，紧跟 "),a("code",[t._v("former_element")]),t._v(" 后的 "),a("code",[t._v("target_element")]),t._v(" 元素")])]),t._v(" "),a("h2",{attrs:{id:"伪选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪选择器"}},[t._v("#")]),t._v(" 伪选择器")]),t._v(" "),a("ul",[a("li",[t._v("伪类: 伪类 是添加到选择器的关键字，指定要选择的元素的特殊状态。例如，"),a("code",[t._v(":hover")]),t._v(" 可被用于在用户将鼠标悬停在按钮上时改变按钮的颜色。")]),t._v(" "),a("li",[t._v("伪元素: 伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。例如， "),a("code",[t._v("::first-line")]),t._v(" 伪元素可改变段落首行文字的样式。")])]),t._v(" "),a("blockquote",[a("p",[t._v("一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。\n注意：按照规范，伪元素应该使用双冒号（::）而不是单个冒号（:），以便区分伪类和伪元素。但是，由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素。")])]),t._v(" "),a("h2",{attrs:{id:"attr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attr"}},[t._v("#")]),t._v(" "),a("code",[t._v("attr()")])]),t._v(" "),a("p",[a("code",[t._v("attr()")]),t._v(" 理论上能用于获取选中标签的 CSS 属性，但目前支持的仅有伪元素的 "),a("code",[t._v("content")]),t._v(" 属性")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p:before")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data-foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-foo")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("world"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("渲染结果是 "),a("code",[t._v("hello world")])])]),t._v(" "),a("h2",{attrs:{id:"ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" REF")]),t._v(" "),a("blockquote",[a("p",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors")])])])}),[],!1,null,null,null);s.default=n.exports}}]);