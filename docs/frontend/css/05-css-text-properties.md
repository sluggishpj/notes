---
title: 文本属性
---

## 文本缩进

- `text-indent`: `<length> | <percentage> | inherit`

可以是负值，可以是百分比，相对于父元素宽度

## 水平对齐

- `text-align`：`left | right | center | justify | inherit`

## 垂直对齐

- `vertical-align`: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`
  - `middle`: 使元素的中部与父元素的基线加上父元素`x-height`的一半对齐。

**`vertical-align` 只对`inline`元素、`inline-block`元素和表格单元格元素生效，不能用它垂直对齐块级元素**

> [vertical-align | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align)
>
> [x-height](https://www.zhangxinxu.com/wordpress/2015/06/about-letter-x-of-css/)

## 字间隔和字母间隔

- `word-spacing`: 字间隔
- `letter-spacing`: 字母间隔

## 文本格式转换

- `text-transform`: `none | capitalize | uppercase | lowercase`
  - `capitalize`: 每个单词首字母大写
  - `uppercase`: 全部字母大写
  - `lowercase`: 全部字母小写

## 文本修饰

- `text-decoration`: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`

```css
.thick {
  text-decoration: solid underline purple 4px;
}
```

> [text-decoration | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)

## 文本阴影

- `text-shadow`: `offset-x offset-y [blur-radius] [color]`

```css
p {
  text-shadow: 1em 1em 5px gray, -1em -1em yellow;
}
```

> 可以有多个阴影

## 处理空白字符

- `white-space`: `normal | nowrap | pre | pre-wrap | pre-line | break-spaces | inherit`

|              | 换行符 | 空格和制表符 | 文字换行 | 行尾空格 |
| ------------ | ------ | ------------ | -------- | -------- |
| normal       | 合并   | 合并         | 换行     | 删除     |
| nowrap       | 合并   | 合并         | 不换行   | 删除     |
| pre          | 保留   | 保留         | 不换行   | 保留     |
| pre-wrap     | 保留   | 保留         | 换行     | 挂起     |
| pre-line     | 保留   | 合并         | 换行     | 删除     |
| break-spaces | 保留   | 保留         | 换行     | 换行     |

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space

## 文本方向

- `direction`: `ltr | rtl`

## 文本书写模式

- `writing-mode`: `horizontal-tb | vertical-rl | vertical-lr`

![writing-mode](https://mdn.mozillademos.org/files/17087/Screenshot_2020-02-05_21-04-30.png)

> [writing-mode | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode)
