import{_ as e,c as t,a2 as o,o as r}from"./chunks/framework.Dr622ulX.js";const h=JSON.parse('{"title":"内存管理","description":"","frontmatter":{"title":"内存管理"},"headers":[],"relativePath":"frontend/browser/memory-management.md","filePath":"docs/frontend/browser/memory-management.md"}'),n={name:"frontend/browser/memory-management.md"};function i(l,a,s,c,m,d){return r(),t("div",null,a[0]||(a[0]=[o('<h1 id="内存管理" tabindex="-1">内存管理 <a class="header-anchor" href="#内存管理" aria-label="Permalink to &quot;内存管理&quot;">​</a></h1><h2 id="垃圾回收" tabindex="-1">垃圾回收 <a class="header-anchor" href="#垃圾回收" aria-label="Permalink to &quot;垃圾回收&quot;">​</a></h2><h3 id="引用计数垃圾收集" tabindex="-1">引用计数垃圾收集 <a class="header-anchor" href="#引用计数垃圾收集" aria-label="Permalink to &quot;引用计数垃圾收集&quot;">​</a></h3><p>最初级的垃圾收集算法。此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。</p><blockquote><p>限制：循环引用</p></blockquote><h3 id="标记-清除算法" tabindex="-1">标记-清除算法 <a class="header-anchor" href="#标记-清除算法" aria-label="Permalink to &quot;标记-清除算法&quot;">​</a></h3><p>这个算法把“对象是否不再需要”简化定义为“对象是否可以获得”。</p><p>这个算法假定设置一个叫做根（root）的对象（在 Javascript 里，根是全局对象）。垃圾回收器将定期从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象……从根开始，垃圾回收器将找到所有可以获得的对象和收集所有不能获得的对象。</p><blockquote><p>所有现代浏览器都使用了标记-清除垃圾回收算法。所有对 JavaScript 垃圾回收算法的改进都是基于标记-清除算法的改进。循环引用不再是问题</p></blockquote>',9)]))}const u=e(n,[["render",i]]);export{h as __pageData,u as default};
