---
title: Vuex
---

# Vuex

![](https://github.com/sluggishpj/assets/raw/main/images/vuex-core.png)

## 问题

### Vuex 解决了什么问题

- 多个视图依赖于同一状态。传参的方法对于**多层嵌套的组件**将会非常繁琐，并且对于**兄弟组件**间的状态传递无能为力。
- 来自不同视图的行为需要变更同一状态。经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

### Vuex 如何响应式

Vuex 3.x 版本 (Vue2 版本)：内部实例化了一个 Vue 实例，将 `state` 放在 data 里，`getters` 放在 computed 中

```js
function resetStoreVM(store, state, hot) {
  const oldVm = store._vm

  // bind store public getters
  store.getters = {}
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null)
  const wrappedGetters = store._wrappedGetters
  const computed = {}
  forEachValue(wrappedGetters, (fn, key) => {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store)
    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
      enumerable: true, // for local getters
    })
  })

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  const silent = Vue.config.silent
  Vue.config.silent = true
  store._vm = new Vue({
    data: {
      $$state: state,
    },
    computed,
  })
  Vue.config.silent = silent

  // ...
}
```

### Vuex 如何知道是否直接更改了 store 中的 state

1. 内部的 `commit` 方法包裹在了 `_withCommit` 里面，调用时会先打上标记
2. 通过 `watch` state 的更改，从中判断 标记是否 正常，不正常则提示

```js
export class Store {
  // ...
  commit(_type, _payload, _options) {
    const { type, payload, options } = unifyObjectStyle(_type, _payload, _options)

    const mutation = { type, payload }
    const entry = this._mutations[type]
    if (!entry) {
      return
    }

    this._withCommit(() => {
      entry.forEach(function commitIterator(handler) {
        handler(payload)
      })
    })

    // ...
  }

  _withCommit(fn) {
    const committing = this._committing
    this._committing = true
    fn()
    this._committing = committing
  }

  // ...
}
```

```js
function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, () => {
    if (__DEV__) {
      assert(store._committing, `do not mutate vuex store state outside mutation handlers.`)
    }
  }, { deep: true, sync: true })
}
```

## REF

> https://vuex.vuejs.org/
