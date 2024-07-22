---
title: 小记
---

# TypeScript 小记

## TypeScript

### 拓展全局对象

```ts
import { SomeClass } from './src/SomeClass'

/** 扩展全局 window 对象 */
declare global {
  interface Window {
    newProp?: SomeClass
  }
}
```

### 类作为参数

```ts
function wrapSentryUpload<T extends Error>(TypeClass: { new (message: string): T }, level: Sentry.Severity) {
  return (msg: string) => {
    if (needSentry()) {
      Sentry.withScope((scope) => {
        const err = new TypeClass(msg)
        scope.setLevel(level)
        scope.setTag('errType', err.name)
        Sentry.captureException(err)
      })
    }
  }
}

/** 新增错误类 */
function createErrorClass(name: string) {
  return class CustomError extends Error {
    constructor(message: string) {
      super(message);
      this.name = name;
    }
  };
}

// HTTP 状态码错误
const HttpStatusError = createErrorClass('Http-Status-Error');
export const catchHttpStatusError = wrapSentryUpload(HttpStatusError, FATAL);
```

## React TypeScript 相关

### 推断 props 类型

```tsx
// 推断 Props 的类型
type PropsType<T> = T extends React.ComponentType<infer P> ? P : never

function withNoLimit<T extends React.ComponentType<any>>(commonProps?: Partial<PropsType<T>>) {
  return function Extend(WrappedComponent: any) {
    function NoLimit(props: Partial<PropsType<T>>, ref: any) {
      /** ... */
    }

    // 在 DevTools 中为该组件提供一个更有用的显示名。
    // 例如 “ForwardRef(withNoLimit(WrappedComponent))”
    const name = WrappedComponent.displayName || WrappedComponent.name
    NoLimit.displayName = `WithNoLimit(${name})`

    NoLimit.WrappedComponent = WrappedComponent

    return React.forwardRef(NoLimit)
  }
}
```
