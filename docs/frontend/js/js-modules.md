---
title: JS modules 模块
---

# JS modules 模块

## ES6 模块

### 语法

#### 导出模块

```js
export const name = 'square'

export function draw(ctx, length, x, y, color) {}
```

OR

```js
export { name, draw }
```

#### 导入模块

```js
import { name, draw } from '/js-examples/modules/basic-modules/modules/square.mjs'
```

#### 在 HTML 中应用模块

```html
<script type="module" src="main.mjs"></script>
```

#### 默认导出/导入

- 导出

```js
export default randomSquare;

export default function(ctx) {
  ...
}
```

- 导入

```js
import randomSquare from './modules/square.mjs'
// 相当于
import { default as randomSquare } from './modules/square.mjs'
```

#### 重命名导入/导出

```js
// inside module.mjs
export { function1 as newFunctionName, function2 as anotherNewFunctionName }

// inside main.mjs
import { newFunctionName, anotherNewFunctionName } from '/modules/module.mjs'
```

```js
// inside module.mjs
export { function1, function2 }

// inside main.mjs
import { function1 as newFunctionName, function2 as anotherNewFunctionName } from '/modules/module.mjs'
```

#### 创建模块对象

```js
import * as Module from '/modules/module.mjs'
Module.function1()
Module.function2()
// etc...
```

#### 合并模块

```js
export * from 'x.mjs'
export { name } from 'x.mjs'
```

#### 动态加载模块

```js
import('/modules/myModule.mjs').then((module) => {
  // Do something with the module.
})
```

#### Other

在使用 `import` 进行导入时，这些绑定值只能被导入模块所读取，不可更改(类似 const)。但在 `export` 导出模块中对这些绑定值进行修改，所修改的值也会实时地更新。

### 流程

1. Construction —  查找，下载并解析引用到的文件，作为一个个模块记录(module recoreds)
2. Instantiation — 为导出的变量分配内存地址（此时还没有填充值），并将导入的变量和对应导出的变量 指向同一个内存地址。
3. Evaluation — 执行代码，并将值填充到对应的内存地址中.

> 这 3 步可以异步执行

![](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/03/07_3_phases.png)

## CommonJS 模块(CJS)

### 语法

- 导出

```js
// maths.js
function absolute(num: number) {
  if (num < 0) return num * -1
  return num
}

module.exports = {
  pi: 3.14,
  absolute,
}

// OR
// exports.pi = 3.14
// exports.absolute = absolute
```

- 导入

```js
const maths = require('maths')
maths.pi // 3.14
```

## REF

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules
>
> https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
>
> https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
