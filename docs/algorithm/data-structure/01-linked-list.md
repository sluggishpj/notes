---
title: 链表
---

在计算机科学中，一个 **链表** 是数据元素的线性集合，元素的线性顺序不是由它们在内存中的物理位置给出的。 相反，每个元素指向下一个元素。它是由一组节点组成的数据结构，这些节点一起，示序列。

链表的一个**缺点**是访问时间是线性的。更快的访问，如随机访问，是不可行的。与链表相比，数组具有更好的缓存位置。

## 单向链表

每个节点由数据和到序列中下一个节点的引用(换句话说，链接)组成。这种结构允许在迭代期间有效地从序列中的任何位置插入或删除元素。

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

```js
class SLNode {
  constructor(value = null) {
    this.value = value // 数据
    this.next = null // 指向下一个结点
  }
}
```

### 基础操作

#### 插入

```js
/**
 * 在p结点后插入node结点
 * @param {SLNode} p 结点p
 * @param {SLNode} node 结点node
 */
function insertAfter(p, node) {
  node.next = p.next
  p.next = node
}
```

#### 删除

```js

```

## 双向链表

![Doubly-linked-list](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

```js
class LNode {
  constructor(value = null) {
    this.value = value // 数据
    this.prior = null // 指向前一个结点
    this.next = null // 指向下一个结点
  }
}
```

## 循环链表

![Circularly-linked-list](https://upload.wikimedia.org/wikipedia/commons/d/df/Circularly-linked-list.svg)

> https://oi-wiki.org/ds/linked-list/