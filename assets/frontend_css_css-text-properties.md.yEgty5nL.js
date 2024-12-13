import{_ as e,c as a,a2 as i,o as s}from"./chunks/framework.Dr622ulX.js";const k=JSON.parse('{"title":"文本属性","description":"","frontmatter":{"title":"文本属性"},"headers":[],"relativePath":"frontend/css/css-text-properties.md","filePath":"docs/frontend/css/css-text-properties.md"}'),l={name:"frontend/css/css-text-properties.md"};function d(r,t,o,n,h,c){return s(),a("div",null,t[0]||(t[0]=[i(`<h1 id="文本属性" tabindex="-1">文本属性 <a class="header-anchor" href="#文本属性" aria-label="Permalink to &quot;文本属性&quot;">​</a></h1><h2 id="文本缩进" tabindex="-1">文本缩进 <a class="header-anchor" href="#文本缩进" aria-label="Permalink to &quot;文本缩进&quot;">​</a></h2><ul><li><code>text-indent</code>: <code>&lt;length&gt; | &lt;percentage&gt; | inherit</code></li></ul><p>可以是负值，可以是百分比，相对于父元素宽度</p><h2 id="水平对齐" tabindex="-1">水平对齐 <a class="header-anchor" href="#水平对齐" aria-label="Permalink to &quot;水平对齐&quot;">​</a></h2><ul><li><code>text-align</code>：<code>left | right | center | justify | inherit</code></li></ul><h2 id="垂直对齐" tabindex="-1">垂直对齐 <a class="header-anchor" href="#垂直对齐" aria-label="Permalink to &quot;垂直对齐&quot;">​</a></h2><ul><li><code>vertical-align</code>: <code>baseline | sub | super | text-top | text-bottom | middle | top | bottom | &lt;percentage&gt; | &lt;length&gt;</code><ul><li><code>middle</code>: 使元素的中部与父元素的基线加上父元素<code>x-height</code>的一半对齐。</li></ul></li></ul><p><strong><code>vertical-align</code> 只对<code>inline</code>元素、<code>inline-block</code>元素和表格单元格元素生效，不能用它垂直对齐块级元素</strong></p><blockquote><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align" target="_blank" rel="noreferrer">vertical-align | MDN</a></p><p><a href="https://www.zhangxinxu.com/wordpress/2015/06/about-letter-x-of-css/" target="_blank" rel="noreferrer">x-height</a></p></blockquote><h2 id="字间隔和字母间隔" tabindex="-1">字间隔和字母间隔 <a class="header-anchor" href="#字间隔和字母间隔" aria-label="Permalink to &quot;字间隔和字母间隔&quot;">​</a></h2><ul><li><code>word-spacing</code>: 字间隔</li><li><code>letter-spacing</code>: 字母间隔</li></ul><h2 id="文本格式转换" tabindex="-1">文本格式转换 <a class="header-anchor" href="#文本格式转换" aria-label="Permalink to &quot;文本格式转换&quot;">​</a></h2><ul><li><code>text-transform</code>: <code>none | capitalize | uppercase | lowercase</code><ul><li><code>capitalize</code>: 每个单词首字母大写</li><li><code>uppercase</code>: 全部字母大写</li><li><code>lowercase</code>: 全部字母小写</li></ul></li></ul><h2 id="文本修饰" tabindex="-1">文本修饰 <a class="header-anchor" href="#文本修饰" aria-label="Permalink to &quot;文本修饰&quot;">​</a></h2><ul><li><code>text-decoration</code>: <code>&lt;&#39;text-decoration-line&#39;&gt; || &lt;&#39;text-decoration-style&#39;&gt; || &lt;&#39;text-decoration-color&#39;&gt; || &lt;&#39;text-decoration-thickness&#39;&gt;</code></li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.thick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-decoration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> underline</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> purple</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration" target="_blank" rel="noreferrer">text-decoration | MDN</a></p></blockquote><h2 id="文本阴影" tabindex="-1">文本阴影 <a class="header-anchor" href="#文本阴影" aria-label="Permalink to &quot;文本阴影&quot;">​</a></h2><ul><li><code>text-shadow</code>: <code>offset-x offset-y [blur-radius] [color]</code></li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  text-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">em</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">em</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">em</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">em</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> yellow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>可以有多个阴影</p></blockquote><h2 id="处理空白字符" tabindex="-1">处理空白字符 <a class="header-anchor" href="#处理空白字符" aria-label="Permalink to &quot;处理空白字符&quot;">​</a></h2><ul><li><code>white-space</code>: <code>normal | nowrap | pre | pre-wrap | pre-line | break-spaces | inherit</code></li></ul><table tabindex="0"><thead><tr><th></th><th>换行符</th><th>空格和制表符</th><th>文字换行</th><th>行尾空格</th></tr></thead><tbody><tr><td>normal</td><td>合并</td><td>合并</td><td>换行</td><td>删除</td></tr><tr><td>nowrap</td><td>合并</td><td>合并</td><td>不换行</td><td>删除</td></tr><tr><td>pre</td><td>保留</td><td>保留</td><td>不换行</td><td>保留</td></tr><tr><td>pre-wrap</td><td>保留</td><td>保留</td><td>换行</td><td>挂起</td></tr><tr><td>pre-line</td><td>保留</td><td>合并</td><td>换行</td><td>删除</td></tr><tr><td>break-spaces</td><td>保留</td><td>保留</td><td>换行</td><td>换行</td></tr></tbody></table><blockquote><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space</a></p></blockquote><h2 id="文本方向" tabindex="-1">文本方向 <a class="header-anchor" href="#文本方向" aria-label="Permalink to &quot;文本方向&quot;">​</a></h2><ul><li><code>direction</code>: <code>ltr | rtl</code></li></ul><h2 id="文本书写模式" tabindex="-1">文本书写模式 <a class="header-anchor" href="#文本书写模式" aria-label="Permalink to &quot;文本书写模式&quot;">​</a></h2><ul><li><code>writing-mode</code>: <code>horizontal-tb | vertical-rl | vertical-lr</code></li></ul><p><img src="https://mdn.mozillademos.org/files/17087/Screenshot_2020-02-05_21-04-30.png" alt="writing-mode"></p><blockquote><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode" target="_blank" rel="noreferrer">writing-mode | MDN</a></p></blockquote>`,32)]))}const g=e(l,[["render",d]]);export{k as __pageData,g as default};
