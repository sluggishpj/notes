---
title: Webpack 原理
---

# Webpack 原理

## 流程

![](https://f000.backblazeb2.com/file/j-assets/webpack-process.jpg)

> 图片来源：https://fed.taobao.org/blog/2016/09/10/webpack-flow/

## 热更新原理

![webpack-hrm](https://f000.backblazeb2.com/file/j-assets/webpack-hmr.jpg)

> 图片来源：https://zhuanlan.zhihu.com/p/30669007

### QA

#### 对比 live reload

live reload 不会保存应用的状态，刷新应用后，应用之前的状态会丢失

### REF

> https://zhuanlan.zhihu.com/p/30669007  
> https://webpack.docschina.org/concepts/hot-module-replacement/ > http://yizxq.xyz/2021/08/03/webpack/webpack_hotModuleReplacement%E5%8E%9F%E7%90%86/

## tree shaking

依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export，通过编译阶段的静态分析，找到没有引入的模块并打上标记，然后在压缩阶段利用像 terser 这样的工具删除这些没有用到的代码

> https://webpack.docschina.org/guides/tree-shaking/

## babel 原理

- 作用

  - 转换语法，eg. 箭头函数转换为普通函数
  - Polyfill，支持新对象/方法. eg. Promise

- 原理：词法分析 -> 语法分析 -> 转换 AST -> 代码生成

> https://github.com/starkwang/the-super-tiny-compiler-cn  
> https://babeljs.io/docs/en/  
> https://juejin.cn/post/7025237833543581732

## 写个 loader

> https://webpack.docschina.org/contribute/writing-a-loader/

## 写个 plugin

> https://webpack.docschina.org/contribute/writing-a-plugin/

## 其他

### hash, chunkhash, contenthash 区别

- hash(新的叫 fullhash): 根据所有文件生成的 hash，只要其中一个改变，重新生成的 值就会变
- chunkhash: 根据所属的 chunk 生成的 hash，一个 chunk 可能包含多个子 chunk，只要其中一个子 chunk 改变，关联的 chunk 都会变
- contenthash: 根据生成后的 独立的文件内容生成，只跟生成后的文件内容有关

> REF: https://webpack.js.org/configuration/output/#template-strings
> REF: https://stackoverflow.com/questions/35176489/what-is-the-purpose-of-webpack-hash-and-chunkhash

### sourcemap 原理

> http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html

## REF

> https://webpack.docschina.org  
> https://fed.taobao.org/blog/2016/09/10/webpack-flow  
> https://juejin.cn/post/6854818576470933512
