---
title: JavaScript
---

## 简述 `JavaScript` 中的 `this`

> [this | note](../frontend/js/js-expressions-and-operators.md#this)

## 前端模块化

### CommonJS (CJS)

> [es6-module | note](../frontend/js/js-modules.md#ES6-模块)

### ES6 Module

> [es6-module | note](<../frontend/js/js-modules.md#CommonJS-模块(CJS)>)

### CommonJS vs ES6 Module

- CommonJS 模块输出的是一个**值的拷贝**，ES6 模块输出的是**值的引用**。
  - 值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
  - JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值，不能重新赋值（好比是 const 变量）
- 加载和执行过程：
  - CommonJS `required()`是同步加载且立即执行
  - ES6 模块初始化(construction), 安装(instantiating) 和 执行(evaluating) 是可以分开的。

## REF

> https://frontendinterviewhandbook.com/zh/javascript-questions/
