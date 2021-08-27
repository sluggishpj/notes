---
title: 字体
---

# 字体

## font-family

- 字体名可以包含空格，但包含空格时应该用引号。
- 通用字体名: 备选，用于在指定的字体不可用时给出的默认字体。字体名是关键字，不用引号。应该放在最后，例如：
  - `serif`: 带衬线字体，笔画结尾有特殊的装饰线或衬线。
  - `sans-serif`: 无衬线字体，即笔画结尾是平滑的字体。
  - `monospace`: 等宽字体
  - `cursive`: 草书字体

> [font-family | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)

## font-style

- `normal`: 常规字体
- `italic`: 斜体版本，没有则使用 oblique 替代
- `oblique`: 倾斜体，没有则使用 italic 替代

## font-variant

- `small-caps`: 小型大写字母。原来的大写字母不变，小写字母变成其对应的较小的大写字母

### font-variant-caps

- `normal`
- `small-caps`
- `all-small-caps`: 全部变为小型大写字母

### font-variant-numeric

用于控制数字，分数和序号标记的替代字形

> [font-variant-numeric](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant-numeric)
