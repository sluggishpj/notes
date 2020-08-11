---
title: 双向链表
---

![Doubly-linked-list](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

```js
class DLNode {
  constructor(value = null) {
    this.value = value // 数据
    this.prior = null // 指向前一个结点
    this.next = null // 指向下一个结点
  }
}
```

## 基础操作

### 插入

```js
/**
 * 在p结点后插入node结点
 * @param {DLNode} p 结点p
 * @param {DLNode} node 结点node
 */
function insertAfter(p, node) {
  let n = p.next

  p.next = node
  node.prior = p

  node.next = n
  n.prior = node
}
```

### 删除

#### 删除直接后继结点

```js
/**
 * 删除链表中的某个结点p的直接后继结点
 * @param {DLNode} p 结点p
 * @returns {DLNode} 返回删除的结点，也就是p的下一个结点
 */
function deleteNextNode(p) {
  const node = p.next
  const q = node && node.next

  if (!node) {
    // p 是最后1个结点
    return node
  }

  p.next = q

  if (q) {
    // node 不是最后1个结点
    q.prior = p
  }

  return node
}
```

#### 删除链表中的某个结点，不给头结点

```js
/**
 * 删除链表中的某个结点p
 * @param {DLNode} p 结点p
 */
function deleteNode(p) {
  // 1. 将 p.next结点 的value覆盖掉 p结点 的 value
  // 2. 删除 p.next结点
  let node = p.next
  p.value = node && node.value
  deleteNextNode(p)
}
```

### 遍历

和单链表遍历差不多

## 复杂度

### 时间复杂度

| Access | Search | Insertion | Deletion |
| ------ | ------ | --------- | -------- |
| O(n)   | O(n)   | O(1)      | O(1)     |

### 空间复杂度

O(n)

> https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list
