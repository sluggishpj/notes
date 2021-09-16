---
title: 动画 animation
---

# 动画

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes name | duration | easing-function | delay */
animation: slidein 3s linear 1s;

/* @keyframes name | duration */
animation: slidein 3s;
```

## animation-duration

完成一个动画周期的时长

```css
/* Single animation */
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 10s, 35s, 230ms;
```

## animation-timing-function

动画播放方式，跟 `transition-timing-function` 取值一样，一个或多个 [`<easing-function>`](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)

```css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Function values */
animation-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
animation-timing-function: steps(4, end);

/* Multiple animations */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);
```

## animation-delay

定义了元素 从应用动画属性 到 开始动画间的等待时间。

```css
/* Single animation */
animation-delay: 3s;
animation-delay: 0s; /*default*/
animation-delay: -1500ms;

/* Multiple animations */
animation-delay: 2.1s, 480ms;
```

如果值是**负值**，比如 -n 秒，则动画会立刻开始，且开始位置立即变换到 处于默认延迟(default)动画 开始动画后 n 秒 的位置。

## animation-iteration-count

动画播放次数，默认 1

```css
/* Keyword value */
animation-iteration-count: infinite;

/* <number> values */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* Multiple values */
animation-iteration-count: 2, 0, infinite;
```

## animation-direction

动画播放方向

```css
/* Single animation */
animation-direction: normal; /*default 结束后立刻回到原来位置进行下一轮动画 */
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
```

- `reverse`: 跟正常动画相反顺序
- `alternate`: 多次动画时，一次正，一次反，表现就是来回动画，且首次是正常动画顺序
- `alternate-reverse`: 跟 `alternate` 反方向来回动画，首次是反方向动画

> 看 [animation-direction | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction) 例子更好理解

## animation-fill-mode

设置 CSS 动画在**执行之前**和**之后**如何将样式应用于其目标

```css
/* Single animation */
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;

/* Multiple animations */
animation-fill-mode: none, backwards;
```

- `none`: 当动画未执行时，动画将不会将任何样式应用于目标，而是已经赋予给该元素的 CSS 规则来显示该元素
- `forwards`: 动画执行**之后**，目标将保留由执行期间遇到的**最后一个关键帧**计算值。
- `backwards`: 开始应用动画属性时(delay **之前**)，目标立即应用 **第一个关键帧**中定义的值
- `both`: 同时应用 `forwards` 和 `backwards` 的规则

## animation-play-state

控制动画播放或暂停

```css
/* Single animation */
animation-play-state: running; /* default 播放 */
animation-play-state: paused; /* 暂停 */

/* Multiple animations */
animation-play-state: paused, running, running;
```

## animation-name

通过名称指定应用哪些 [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) 定义的动画。名称必须和 `@keyframes` 定义的名称全等(===)才匹配上

```css
#target {
  animation-name: slide;
  /*other*/
}

@keyframes slide {
  from {
    background-color: orange;
    color: #000;
    margin-left: 0;
  }

  to {
    background-color: orange;
    color: #000;
    margin-left: 80%;
  }
}
```

## REF

> [animation | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
