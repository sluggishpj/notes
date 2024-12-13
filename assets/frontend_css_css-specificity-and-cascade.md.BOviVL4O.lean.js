import{_ as i,c as a,a2 as n,o as e}from"./chunks/framework.Dr622ulX.js";const o=JSON.parse('{"title":"特殊性和层叠","description":"","frontmatter":{"title":"特殊性和层叠"},"headers":[],"relativePath":"frontend/css/css-specificity-and-cascade.md","filePath":"docs/frontend/css/css-specificity-and-cascade.md"}'),l={name:"frontend/css/css-specificity-and-cascade.md"};function t(h,s,p,k,d,c){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="特殊性和层叠" tabindex="-1">特殊性和层叠 <a class="header-anchor" href="#特殊性和层叠" aria-label="Permalink to &quot;特殊性和层叠&quot;">​</a></h1><h2 id="特殊性" tabindex="-1">特殊性 <a class="header-anchor" href="#特殊性" aria-label="Permalink to &quot;特殊性&quot;">​</a></h2><p>选择器特殊性</p><ul><li>ID 选择器: 100</li><li>类选择器: 10</li><li>元素选择器&amp;伪选择器: 1</li><li>Combinators（结合符） and the universal selector（通配符）不计入权重</li></ul><p>内联样式特殊性: 1000</p><p><code>!important</code>特殊性: 10000</p><h2 id="层叠" tabindex="-1">层叠 <a class="header-anchor" href="#层叠" aria-label="Permalink to &quot;层叠&quot;">​</a></h2><p>a 链接样式，建议 L-V-H-A，如果顺序变为 <code>A-H-L-V</code>, 那么 任何链接都不会显示<code>:hover</code>和<code>:active</code>样式。因为<code>:link</code>和<code>:visited</code>规则后出现，所有链接都必须要么是已访问，要么是未访问的，所以<code>:link</code>和<code>:visited</code>样式总会覆盖<code>:hover</code>规则。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:active</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">orange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:visited</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">purple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,9)]))}const E=i(l,[["render",t]]);export{o as __pageData,E as default};
