---
title: Table 布局
---

# Table 布局

```html
<table>
  <thead>
    <tr>
      <th colspan="2">The table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
  </tbody>
</table>
```

## 单元格边框

### border-collapse

```css
border-collapse: collapse | seperate;
```

- `collapse`: 合并单元格边框，相邻的单元格边框中心点重合
- `seperate`: 不合并单元格边框，相邻单元格间距由 `border-spacing` 决定

> `border-collapse` 和 `border-spacing` 都是设置在 `table` 元素上

## 单元格合并

设置在 `td` 上

- `colspan`: 跨列数
- `rowspan`: 跨行数

## 单元格内容对齐

`vertical-align` 和 `text-align`

> [table | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
