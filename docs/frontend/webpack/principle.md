---
title: Webpack 原理
---

# Webpack 原理

## 流程

## 热更新原理

## tree shaking

## babel 原理

## 写个 loader

## 写个 plugin

## 其他

### hash, chunkhash, contenthash 区别

- hash(新的叫 fullhash): 根据所有文件生成的 hash，只要其中一个改变，重新生成的 值就会变
- chunkhash: 根据所属的 chunk 生成的 hash，一个 chunk 可能包含多个子 chunk，只要其中一个子 chunk 改变，所属的 chunk 都会变
- contenthash: 根据生成后的 独立的 chunk 文件内容生成

> REF: https://webpack.js.org/configuration/output/#template-strings
> REF: https://stackoverflow.com/questions/35176489/what-is-the-purpose-of-webpack-hash-and-chunkhash

### sourcemap 原理

> https://blog.fundebug.com/2018/10/12/understanding_frontend_source_map/

## MORE

> https://juejin.cn/post/6854818576470933512 > https://zhuanlan.zhihu.com/p/30669007
