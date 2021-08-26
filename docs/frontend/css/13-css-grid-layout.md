---
title: Grid 布局
---

## CSS 尺寸关键字

### `min-content`

内容最小长度

### `max-content`

内容最大长度

### `fit-content`

尽可能使用更多的空间，但不超过 `max-content`

```css
width: fit-content;
block-size: fit-content;
```

## CSS 函数

### `repeat()`

#### `auto-fill` vs `auto-fit`

点进去看例子，调整宽度

<iframe height="300" style="width: 100%;" scrolling="no" title="css-grid auto-fill vs auto-fit" src="https://codepen.io/rinxu/embed/NWgqWBK?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/NWgqWBK">
  css-grid auto-fill vs auto-fit</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### `minmax()`

`minmax(val1, val2)`: 设置最小值和最大值，取值较大的作为较大值，另一个为最小值。

用在下面属性中：

- `grid-template-columns`
- `grid-template-rows`
- `grid-auto-columns`
- `grid-auto-rows`

```css
minmax( [ <length> | <percentage> | min-content | max-content | auto ] , [ <length> | <percentage> | <flex> | min-content | max-content | auto ] )
```

> `<flex>` 指 fr 为单位

## 容器属性

默认值

```css
#container {
  display: grid;
  grid-template-rows: none;
  grid-template-columns: none;
  grid-template-areas: none;
  grid-auto-rows: auto;
  grid-auto-columns: auto;
  grid-auto-flow: row;
  grid-column-gap: 0;
  grid-row-gap: 0;
}
```

### grid-template-columns & grid-template-rows

#### 显式网格

定义网格中的各列宽度 & 定义网格中的各行高度

```css
grid-template-columns: 500px 1fr 2fr;
grid-template-columns: repeat(3, 1fr);

/* 起始轨道为20像素，接着重复了6个1fr的轨道，最后再添加了一个20像素的轨道 */
grid-template-columns: 20px repeat(6, 1fr) 20px;

/* 网格将有共计10个轨道，为1个1fr轨道后面跟着1个2fr轨道，该模式重复5次 */
grid-template-columns: repeat(5, 1fr 2fr);

/* 网格布局将会根据容器的宽度创建最多的且宽度为200px的列轨道，包含空的列轨道 */
grid-template-columns: repeat(auto-fill, 200px);

/* 轨道的元素最小有200px，最大1fr的宽度。 
   一旦浏览器计算出有多少个200px会填充到这个容器里面，并算好网格间距，
   那么，浏览器就会把剩余的空间等分成以最大1fr单位计算的区域给其他元素*/
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```

<iframe height="341" style="width: 100%;" scrolling="no" title="css：grid-template-columns &amp; grid-template-rows" src="https://codepen.io/sluggishpj/embed/zYYZEOE?height=341&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/sluggishpj/pen/zYYZEOE'>css：grid-template-columns &amp; grid-template-rows</a> by pj
  (<a href='https://codepen.io/sluggishpj'>@sluggishpj</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### 命名网格线

避免使用可能会出现在规范中的容易引起混淆的词，比如 `span`。名字两端不用加引号。

```scss
.box6 {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];

  .child1 {
    grid-column: content-start/main-end;
    grid-row: main-start/content-end;
  }
}
```

> 可以把命名线和线序号混合使用。为线命名的方法对于创建响应式页面特别有用，当需要在媒体查询中重新定义网格时，你就不需要通过修改线序号来改变布局，只要直接使用定义过的线名字就可以了，因为（即使在不同的布局中）线的名字总是相同的。

<iframe height="349" style="width: 100%;" scrolling="no" title="ExxWwVQ" src="https://codepen.io/sluggishpj/embed/ExxWwVQ?height=349&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/sluggishpj/pen/ExxWwVQ'>ExxWwVQ</a> by pj
  (<a href='https://codepen.io/sluggishpj'>@sluggishpj</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

##### 为网格线定义多个名字

只要把多个名字都写到方括号里，然后用空格分隔就行了：`[sidebar-end main-start]`。在引用时可以使用其中的任何一个名字。

##### 隐式网格区域

如果把一个区域周围的线都用 `-start` 和 `-end` 作为后缀，就像上面的例子那样，网格就会为区域创建一个名字，名字就是后缀前的单词。

把一些行和列命名为 `content-start` 和 `content-end`，这意味着得到了一个命名为 content 的网格区域，并且可以在这个区域中放入你想放的内容。

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
.thing {
  grid-area: content;
}
```

##### 命名网格区域隐式定义的命名线

使用命名网格区域会隐式创建命名网格线

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    'hd hd hd hd   hd   hd   hd   hd   hd'
    'sd sd sd main main main main main main'
    'ft ft ft ft   ft   ft   ft   ft   ft';
}
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}
.wrapper > div.overlay {
  z-index: 10;
  grid-column: main-start / main-end; /* 使用隐式创建的网格线 */
  grid-row: hd-start / ft-end; /* 使用隐式创建的网格线 */
  border: 4px solid rgb(92, 148, 13);
  background-color: rgba(92, 148, 13, 0.4);
  color: rgb(92, 148, 13);
  font-size: 150%;
}
```

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="sluggishpj" data-slug-hash="ExxWwWL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css: implicit-grid-lines-from-named-areas">
  <span>See the Pen <a href="https://codepen.io/sluggishpj/pen/ExxWwWL">
  css: implicit-grid-lines-from-named-areas</a> by pj (<a href="https://codepen.io/sluggishpj">@sluggishpj</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

##### 使用 repeat()定义相同名字的多条线

创建一个 12 列的网格，每个 `1fr` 宽的列左侧的线都被命名为 `col-start`

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

```css
.item1 {
  /* 位置从名为 col-start 的第1条线开始，到第5条线结束 */
  grid-column: col-start / col-start 5;
}

.item2 {
  /* 位置从名为 col-start 的第7条线开始，跨越3条线 */
  grid-column: col-start 7 / span 3;
}
```

创建了一个 8 个轨道的网格，在一个名为 `col1-start` 的 `1fr` 窄轨道之后，跟着是一个名为 `col2-start` 的 `3fr` 宽轨道

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

如果 repeat 语法包含相邻的两条网格线，那它们会被合并

```css
.wrapper {
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);
  /* 等价于 */
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

如果已经定义了一个轨道列表，接下来在使用 span 关键字定位项目时，不仅可以在 span 后面写一个行序数，还可以在 `span` 后面写一个命名线的行序数。

```html
<div class="wrapper">
  <div class="item1">I am placed from col1-start line 1 to col2-start line 2</div>
  <div class="item2">I am placed from col1-start line 2 spanning 2 lines named col1-start</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, [col1-start] 1fr [col2-start] 2fr);
}
.item1 {
  grid-column: col1-start / col2-start 2;
}
.item2 {
  grid-row: 2;
  grid-column: col1-start 2 / span 2 col1-start;
}
```

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="sluggishpj" data-slug-hash="oNNZGyO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css: grid-repeat&amp;amp;span">
  <span>See the Pen <a href="https://codepen.io/sluggishpj/pen/oNNZGyO">
  css: grid-repeat&amp;span</a> by pj (<a href="https://codepen.io/sluggishpj">@sluggishpj</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### grid-auto-rows & grid-auto-columns

- 隐式网格：默认根据内容动态调整大小

可以定义一个设置大小尺寸的轨道

```css
/* 确保在隐式网格中创建的轨道是200像素高 */
grid-auto-rows: 200px;

/* 自动创建的行高将会是最小100像素，最大为auto（即内容高度） */
grid-auto-rows: minmax(100px, auto);

/* 声明了一个 100 像素的行和第二个 200 像素的行，当内容很多时网格就会自动创建足够多的隐式行来容纳内容 */
grid-auto-rows: 100px 200px;
```

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="sluggishpj" data-slug-hash="ZEEeXqx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css: auto-placement-in-grid-layout">
  <span>See the Pen <a href="https://codepen.io/sluggishpj/pen/ZEEeXqx">
  css: auto-placement-in-grid-layout</a> by pj (<a href="https://codepen.io/sluggishpj">@sluggishpj</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### grid-row-gap & grid-column-gap & grid-gap

- grid-row-gap：两个网格单元之间的*网格纵向间距*

- grid-column-gap：两个网格单元之间的 _网格横向间距_
- grid-gap：grid-row-gap grid-column-gap 缩写

```css
/* 横向间距为10px、纵向间距为1em */
grid-column-gap: 10px;
grid-row-gap: 1em;

/* 缩写 */
grid-gap: 1em 10px;
```

> 间距使用的空间会在 使用弹性长度 fr 的轨道的空间计算前就被留出来，间距的尺寸定义行为和普通轨道一致，但不同的是你不能向其中插入任何内容。从以基线定位的角度来说，间距就像一条很宽的基线。

### grid-template-areas

- 命名网格区域：子元素需要定义好 grid-area
- 留出空单元的方法是使用句点符“`.`”

```css
/* 各子元素 */
.header {
  grid-area: hd;
}
.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}

/* 父容器 */
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    'hd hd hd hd   hd   hd   hd   hd   hd'
    'sd sd sd main main main main main main'
    'sd sd sd ft   ft   ft   .    .    .';
}
```

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="sluggishpj" data-slug-hash="NWWpaej" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css: grid-template-areas">
  <span>See the Pen <a href="https://codepen.io/sluggishpj/pen/NWWpaej">
  css: grid-template-areas</a> by pj (<a href="https://codepen.io/sluggishpj">@sluggishpj</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### grid-template

第一个值是 `grid-template-areas` 的值，并且在每一行的**末尾**声明了**行的大小**，也就是 `minmax(100px, auto)` 的作用。

在 `grid-template-areas` 之后用一个**左斜杠**分隔，再之后是一个详细的**列轨道**清单。

```css
.wrapper {
  display: grid;
  grid-template:
    'hd hd hd hd   hd   hd   hd   hd   hd' minmax(100px, auto)
    'sd sd sd main main main main main main' minmax(100px, auto)
    'ft ft ft ft   ft   ft   ft   ft   ft' minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

## 子元素

```css
.child {
  grid-column: 1/3;
  grid-row: 4;
}
```

### grid-column & grid-row

- `grid-column`是`grid-column-start`和`grid-column-end`的缩写
- `grid-row`是`grid-row-start`和`grid-row-end`的缩写

```css
/* 从列线1开始，延伸了一个轨道。因为这是默认行为，所以可以不用指定结束线 */
grid-column-start: 1;

/* 从行线3到行线5，跨越了两个行轨道。剩下的元素会自动放到网格剩余的空间中 */
grid-row-start: 3;
grid-row-end: 5;

/* 使用/分隔start和end */
grid-row: 3 / 5;
```

#### 反方向计数

右端的列线和底端的行线。这些线会被记为-1，然后你可以从这往前数，所以倒数第 2 条线会被记为-2

```css
.box1 {
  grid-column-start: -1;
  grid-column-end: -2;
  grid-row-start: -1;
  grid-row-end: -4;
}

/* 使元素跨越整个网格 */
.item {
  grid-column: 1 / -1;
}
```

#### 使用 span 关键字

- 除了“起始线与结束线”的定位方法，你还可以使用“起始线与跨越轨道数量”的定位方法

```css
.box1 {
  grid-column: 1;
  grid-row: 1 / span 3;
  /* 等价于 */
  /* grid-row: 1 / 4; */
}
```

### grid-area

值的顺序如下

- `grid-row-start`
- `grid-column-start`
- `grid-row-end`
- `grid-column-end`

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
  /* 可以使用命名的网格区域 */
  /* grid-area: content; */
}
```

### 自动定位

如果没有为项目指定位置信息，它们就会把自己摆放在网格中，每个单元格中放一个。

**默认**的流向是**按行**排列项目，网格会首先尝试在第 1 行的每个单元格中摆放项目。如果已经通过 `grid-template-rows` 属性创建了其他行，网格就会继续把项目摆放到这些行中。如果在显式的网格中没有足够的行用来摆放所有的项目，**隐式的新行**就会被创建出来。

#### 按列自动定位

默认是按行，排完一行排下一行。**网格容器**设置 `grid-auto-flow`的属性值为 `column`可将其改为按列自动定位。排完第一列再排第二列

#### 被自动定位的项目的顺序

网格中包含的多个项目可以混合定位，一些项目依靠明确的位置，而另一些则依靠自动定位。混合定位的用途在于，如果你有一个文档，其中部分项目已经定位，其他项目只要按顺序排列就行了，而无需为所有项目都指定绝对的位置。

- 如果完全使用 `order` 属性，项目的顺序将根据 `order` 属性重新排序，而不是它们在 DOM 中的顺序，要不然它们本来是按在 DOM 中出现的顺序排列的。

#### 填充缺口

在网格容器的 `grid-auto-flow`属性值中加入 `dense` 关键字。这和此前把网格流向改为列优先时设置值为 `column` 的是同一个属性，所以在列优先流向时，要设置 2 个值 `grid-auto-flow: column dense`。

网格就会回填缺口，以前网格会遗留下缺口，而现在它会为此前的缺口找到适合它的项目，然后把项目从 DOM 中拿出来再放到缺口中去。

#### 匿名网格项目

当有一些字符串或文本被包含在网格容器中，但却**没有被其他元素包装**，它们就会被创建为匿名网格项目。

第一个就是匿名项目，因为它没有用标签分隔，所以会被自动定位规则处理。另 2 个放在 div 中的项目，它们可以被自动定位，也可以通过网格的定位属性来定位。

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

## 嵌套网格布局

网格元素也可以作为网格容器

## 网格布局中的盒模型对齐

### 两条轴线

**块方向的列轴**和**文字方向的行轴**

### 对齐项目到块（垂直）方向的列轴

可以通过在网格容器或子元素上设置

- 网格容器：设置`align-items`。设置了 `align-items` 属性，就相当于为网格的所有子项目都设置了 `align-self`属性。
- 子元素：设置`align-self`
- 值
  - `auto`
  - `normal`
  - `start`
  - `end`
  - `center`
  - `stretch`
  - `baseline`
  - `first baseline`
  - `last baseline`
- 默认行为是拉伸（`stretch`），例外的情况是若项目具有**固定宽高比**，行为就改为与轴起点对齐（`start`）。此项例外的原因在于，如果把一个有固定宽高比的项目拉伸，将导致它扭曲变形。在此特性尚未被完全支持时，为了确保网格中的项目比如图片不被拉伸，可以通过把 `align-self`和 `justify-self` 都设置为 `start` 来模拟正确的实现效果

### 对齐项目到文本（水平）方向的行轴

- 网格容器：`justify-items`
- 子元素：`justify-self`
- 可选值和`align-items`一样

### 对齐项目轨道到块方向的列轴

- 设置在**网格容器**上

- `align-content` 对齐到**块方向**的轴线
- 可选值：
  - `normal`
  - `start`
  - `end`
  - `center`
  - `stretch`
  - `space-around`
  - `space-between`
  - `space-evenly`
  - `baseline`
  - `first baseline`
  - `last baseline`
- 默认的行为是对齐到起点（`start`）
- 使用`space-between`，如果项目跨越了多于一条轨道，因为轨道的间隙变大了，所以项目也变得更大了。

### 对齐项目轨道到文本方向的行轴

- 设置在网格容器上

- `justify-content`对齐到**文本方向**的轴线
- 可选值同`align-content`

### 对齐和自动外边距

如果子元素的左外边距被设置成 `auto`，则内容被推到了区域右侧。相当于设置了`justify-self: end`

## grid vs. 其他布局

### grid vs. flex

#### 一维布局 vs. 二维布局

- 弹性盒布局是为一维布局服务的（沿横向或纵向的）
- 网格布局是为二维布局服务的（同时沿着横向和纵向）

#### 内容 vs. 布局

- 弹性盒从内容出发。一个使用弹性盒的理想情形是你有一组元素，希望它们能平均地分布在容器中。你让内容的大小决定每个元素占据多少空间。如果元素换到了新的一行，它们会根据新行的可用空间决定它们自己的大小。
- 网格则从布局入手。当使用 CSS 网格时，你先创建网格，然后再把元素放入网格中，或者让自动放置规则根据把元素按照网格排列。我们能创建根据内容改变大小的网格轨道，但整个轨道的大小都会随之改变。

#### 盒对齐

弹性盒特性已经被加入到新规范盒 [Box Alignment Level 3](https://drafts.csswg.org/css-align/)。意味它们能被用在包括网格布局的其它规范中。

### grid vs. 绝对定位

容器增加 `position` 属性，并把它的值设置为 `relative`，就像为任何其他绝对定位的项目创建一个包含块一样。接下来，如果再把一个网格项目设置为 `position: absolute`，那么网格容器就成为包含块，或者如果该项目具有网格定位的属性，那么被放置的网格就成为包含块。

在下面的例子中，一个容器中包含了四个子项。第三项是绝对定位的，并且使用基于行定位的方式把自己放置在网格中。网格容器具有 `position: relative` 属性，因此网格就成为该项目的定位上下文。

<iframe height="300" style="width: 100%;" scrolling="no" title="css-grid-absolute" src="https://codepen.io/rinxu/embed/oNwXgpO?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/rinxu/pen/oNwXgpO">
  css-grid-absolute</a> by Rin (<a href="https://codepen.io/rinxu">@rinxu</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 网格和`display: contents`

如果将项目设置为 `display: contents`，通常自身的盒子会消失，子元素的盒子仍显示，就像子元素在文档树中上升了一层。这意味着一个网格项目的子元素可以成为网格项目。

## 应用

### grid 实现垂直左右居中

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="sluggishpj" data-slug-hash="ExxWmJG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-grid-center">
  <span>See the Pen <a href="https://codepen.io/sluggishpj/pen/ExxWmJG">
  css-grid-center</a> by pj (<a href="https://codepen.io/sluggishpj">@sluggishpj</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

> [CSS_Grid_Layout | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
