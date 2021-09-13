# 变换 transforms

## 2D 变换

### transform-origin

```css
/* One-value syntax */
transform-origin: 2px; /* 等价于 2px center */
transform-origin: bottom; /* 等价于 center 100%*/

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;
```

### transform

```css
/* Keyword values */
transform: none;

/* Function values */
transform: <transform-function>[ <transform-function>] *;
```

### `<transform-function>`

> REF: [`<transform-function>`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function)

#### matrix

`matrix(a, b, c, d, tx, ty)` 各个值的变换如下 `matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`

#### perspective

设置用户和 z=0 平面的距离

`transform: perspective(d)` 应用在具体的某个元素上，跟 下文 3D 变换中的 `perspective` 不一样。 


## 3D 变换

以下属性应用在 已变换元素 的父级容器上

### transform-style

### perspective-origin

### perspective

### backface-visibility

### transform 3D 变换属性

#### scale3d

#### rotate3d

#### translate3d

#### matrix3d
