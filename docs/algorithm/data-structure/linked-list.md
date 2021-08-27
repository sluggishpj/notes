---
title: 链表
---

# 链表

在计算机科学中，一个 **链表** 是数据元素的线性集合，元素的线性顺序不是由它们在内存中的物理位置给出的。 相反，每个元素指向下一个元素。它是由一组节点组成的数据结构，这些节点一起，示序列。

链表的一个**缺点**是访问时间是线性的。更快的访问，如随机访问，是不可行的。与链表相比，数组具有更好的缓存位置。

## 单向链表

每个节点由数据和到序列中下一个节点的引用(换句话说，链接)组成。这种结构允许在迭代期间有效地从序列中的任何位置插入或删除元素。

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

<<< @/src/algorithm/data-structure/linked-list.js#SLNode

> 头结点的 value 为 null，next 指向首个结点

### 基础操作

#### 插入

<<< @/src/algorithm/data-structure/linked-list.js#insertAfter

#### 删除

- 删除直接后继结点

<<< @/src/algorithm/data-structure/linked-list.js#deleteNextNode

- 删除链表中的某个结点，不给头结点

<<< @/src/algorithm/data-structure/linked-list.js#deleteNode

> 当 p 是最后一个结点时，其 value 会被重置为 null

- 删除链表中的某个结点，给头结点

<<< @/src/algorithm/data-structure/linked-list.js#deleteNodeByHead

#### 搜索

<<< @/src/algorithm/data-structure/linked-list.js#searchNode

#### 遍历

<<< @/src/algorithm/data-structure/linked-list.js#traverse

> 可以使用 `for...of`遍历结果，或通过 `[...traverseRes]`获取遍历结果构成的数组

#### 反向遍历

<<< @/src/algorithm/data-structure/linked-list.js#reverseTraversal

## 循环链表

![Circularly-linked-list](https://upload.wikimedia.org/wikipedia/commons/d/df/Circularly-linked-list.svg)

## 复杂度

### 时间复杂度

| Access | Search | Insertion | Deletion |
| ------ | ------ | --------- | -------- |
| O(n)   | O(n)   | O(1)      | O(1)     |

### 空间复杂度

O(n)

> https://oi-wiki.org/ds/linked-list/
>
> https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list
