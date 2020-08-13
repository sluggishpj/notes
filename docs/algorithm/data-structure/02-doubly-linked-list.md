---
title: 双向链表
---

![Doubly-linked-list](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

<<< @/src/algorithm/data-structure/doubly-linked-list.js#DLNode

## 基础操作

### 插入

<<< @/src/algorithm/data-structure/doubly-linked-list.js#insertAfter

### 删除

#### 删除直接后继结点

<<< @/src/algorithm/data-structure/doubly-linked-list.js#deleteNextNode

#### 删除链表中的某个结点，不给头结点

<<< @/src/algorithm/data-structure/doubly-linked-list.js#deleteNode

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
