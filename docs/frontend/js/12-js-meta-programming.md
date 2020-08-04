---
title: 元编程
---

## 代理 Proxy

```js
let handler = {
  get: function(target, name) {
    return name in target ? target[name] : 42
  }
}

let p = new Proxy({}, handler)
p.a = 1

console.log(p.a, p.b) // 1, 42
```

## 反射 Reflect

Reflect 是一个内置对象，它提供了可拦截 JavaScript 操作的方法

```js
Reflect.has(Object, 'assign') // true
```

### 更好的 `apply` 函数

语法：

```js
Reflect.apply(target, thisArgument, argumentsList)
```

- target: 目标函数
- thisArgument: target 函数调用时绑定的 this 对象
- target 函数调用时传入的实参列表，该参数应该是一个类数组的对象

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75])

// 等价于
Reflect.apply(Math.floor, undefined, [1.75])
// 1
```

eg.

```js
Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index
// 4

Reflect.apply(''.charAt, 'ponies', [3])
// "i"
```

### 检查属性定义是否成功

使用 `Object.defineProperty`, 如果成功则返回一个对象，否则抛出一个 `TypeError`，你将使用 `try...catch` 块来捕获定义属性时发生的任何错误。因为 `Reflect.defineProperty` 返回一个**布尔值**表示的成功状态，你可以在这里使用 `if...else` 块：

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Meta_programming