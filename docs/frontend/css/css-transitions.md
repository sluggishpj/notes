---
title: CSS 过渡 transition
---

# 过渡 transition

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | easing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | easing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;
```

## transition-property

指定哪些属性才会做过渡动画

```css
transition-property: none;
transition-property: all;

/* 属性名称 */
transition-property: margin-right;

/* 多个属性 */
transition-property: margin-right, color;
```

> [能够做动画的属性 | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

## transition-duration

过渡动画持续时间

```css
/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 230ms; /*多个分别应用transition-property各自的属性*/
```

## transition-timing-function

动画过渡函数

```css
/* Keyword values */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;

/* Function values */
transition-timing-function: steps(4, jump-end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);

/* Multiple timing functions */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);
```

> [transition-timing-function | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) > [easing-function | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function) > [https://cubic-bezier.com/](https://cubic-bezier.com/)

## transition-delay

过渡效果延迟执行的时间，也就是说当改变元素属性值后多长时间开始执行过渡效果。

```css
/* <time>?值 */
transition-delay: 3s;
transition-delay: 2s, 4ms;
```

## 过渡结束事件 transitionend

```js
el.addEventListener('transitionend', updateTransition, true)
```

> 如果动画被中止了，`transitionend` 事件就不会被触发了。比如 `display:none` 或 过渡属性发生变化

## REF

> [transition | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
