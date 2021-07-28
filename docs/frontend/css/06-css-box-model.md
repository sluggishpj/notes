---
title: 盒子模型
---

## block, inline, inline-block

### 块级 block

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- `width` 和 `height` 属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

### 行内 inline

- 盒子不会产生换行
- `width` 和 `height` 属性将不起作用
- **垂直**方向的内边距、外边距以及边框会被应用但是**不会**把其他处于 `inline` 状态的盒子推开
- **水平**方向的内边距、外边距以及边框会被应用且**会**把其他处于 `inline` 状态的盒子推开

### 行内块级 inline-block

- 设置 `width` 和 `height` 属性会生效
- `padding`, `margin`, 以及 `border` 会推开其他元素
- 不会产生换行

<iframe height="300" style="width: 100%;" scrolling="no" title="box-model:inline and block" src="https://codepen.io/rinxu/embed/GRmQbxB?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/GRmQbxB">
  box-model:inline and block</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 补充: 内部和外部显示类型

css 的 box 模型有一个外部显示类型，来决定盒子是块级还是内联。

同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的。默认情况下是按照 正常文档流 布局，也意味着它们和其他块元素以及内联元素一样

可以通过`display` 属性值来更改内部显示类型。 如果设置 `display: flex`，在一个元素上，外部显示类型是 block，但是内部显示类型修改为 flex。

## CSS 盒模型

![](https://mdn.mozillademos.org/files/16558/box-model.png)

### box-sizing

```css
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
```

#### 标准盒模型 content-box

```css
.box {
  box-sizing: content-box;
}
```

![content-box](https://mdn.mozillademos.org/files/16559/standard-box-model.png)

#### IE 盒模型 border-box

```css
.box {
  box-sizing: border-box;
}
```

![border-box](https://mdn.mozillademos.org/files/16557/alternate-box-model.png)

## 外边距，内边距，边框

### 外边距

#### 外边距折叠

现象：两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。

> 有设定 `float` 和 `position:absolute` 的元素不会产生外边距重叠行为。

以下 3 种情况会造成外边距折叠：

- 同一层相邻元素之间：相邻的两个元素之间的外边距重叠，除非后一个元素加上 clear-fix 清除浮动。
- 没有内容将父元素和后代元素分开
- 空的块级元素

> [外边距折叠 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

## REF

> https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model
