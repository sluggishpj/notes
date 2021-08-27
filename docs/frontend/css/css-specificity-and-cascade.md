---
title: 特殊性和层叠
---

# 特殊性和层叠

## 特殊性

选择器特殊性

- ID 选择器: 100
- 类选择器: 10
- 元素选择器&伪选择器: 1
- Combinators（结合符） and the universal selector（通配符）不计入权重

内联样式特殊性: 1000

`!important`特殊性: 10000

## 层叠

a 链接样式，建议 L-V-H-A，如果顺序变为 `A-H-L-V`, 那么 任何链接都不会显示`:hover`和`:active`样式。因为`:link`和`:visited`规则后出现，所有链接都必须要么是已访问，要么是未访问的，所以`:link`和`:visited`样式总会覆盖`:hover`规则。

```css
a:active {
  color: orange;
}
a:hover {
  color: red;
}
a:link {
  color: blue;
}
a:visited {
  color: purple;
}
```
