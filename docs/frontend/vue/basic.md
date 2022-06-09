---
title: Vue 基础知识
---

# 基础知识

## 示例

```vue
<template>
  <div :class="classObject"></div>
  <div :style="styleObject"></div>

  <ul>
    <li v-for="(item, index) in items">{{ index }} - {{ item.message }}</li>
  </ul>

  <div v-for="(value, name) in object">键{{ name }}: 值{{ value }}</div>

  <button v-on:click="greet">Greet</button>
</template>
<script>
export default {
  name: 'Example',
  data() {
    return {
      classObject: {
        active: true,
        'text-danger': false,
      },
      styleObject: {
        color: 'red',
        fontSize: '13px',
      },

      items: [{ message: 'Foo' }, { message: 'Bar' }],

      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
      },
    }
  },

  methods: {
    greet: function (event) {
      alert('Hello !')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    },
  },

  computed: {
    bar: function () {
      /* ... */
    },
  },
}
</script>
```

## 生命周期

![](https://cn.vuejs.org/images/lifecycle.png)

## 常用指令

`v-on`(`@`), `v-bind`(`:`), `v-if`, `v-for`

## 数组变更方法

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

## 组件

### 自定义组件的 `v-model`

```js
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `,
})
```

```html
<base-checkbox v-model="lovingVue"></base-checkbox>
```

### 内置组件

`<keep-alive>`

```html
<!-- 失活的组件将会被缓存！-->
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

## 插槽

`<base-layout>`

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

使用

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

> `v-slot:` 可以简写为 `#`

父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

### 作用域插槽

`current-user`

```html
<span>
  <slot v-bind:user="user"> {{ user.lastName }} </slot>
</span>
```

使用

```js
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

## 过渡动画 `transition`

### CSS 过渡

```vue
<template>
  <div id="demo">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    }
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
```

![](https://cn.vuejs.org/images/transition.png)

## 可复用性&组合

### 混入 `mixin`

- 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
- 混入对象的钩子将在组件自身钩子之前调用。

### 自定义指令

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  },
})
```

使用

```html
<input v-focus />
```

## REF

> https://cn.vuejs.org/  
> https://v3.cn.vuejs.org/
