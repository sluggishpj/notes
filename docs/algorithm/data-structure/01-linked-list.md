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

> 头结点的 value 为 null，next 指向首个结点

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

- 删除直接后继结点

```js
/**
 * 删除链表中的某个结点p的直接后继结点
 * @param {SLNode} p 结点p
 * @returns {SLNode} 返回删除的结点，也就是p的下一个结点
 */
function deleteNextNode(p) {
  const node = p.next
  p.next = node.next
  return node
}
```

- 删除链表中的某个结点，不给头结点

```js
/**
 * 删除链表中的某个结点p
 * @param {SLNode} p 结点p
 */
function deleteNode(p) {
  // 1. 将 p.next结点 的value覆盖掉 p结点 的 value
  // 2. 删除 p.next结点
  let node = p.next
  p.value = node && node.value
  deleteNextNode(p)
}
```

> 当 p 是最后一个结点时，其 value 会被重置为 null

- 删除链表中的某个结点，给头结点

```js
/**
 * 删除链表中的特定结点
 * @param {SLNode} head 头结点
 * @param {valueType} value 目标结点的value
 */
function deleteNodeByHead(head, value) {
  let n = head
  while (n && n.next && n.next.value !== value) {
    n = n.next
  }
  // 找到目标结点的前一个结点n
  return deleteNextNode(n)
}
```

#### 搜索

```js
/**
 * 查找并返回目标结点
 * @param {SLNode} head 链表头结点
 * @param {someType} value 结点的数据
 * @returns {SLNode} 找到的结点/null
 */
function searchNode(head, value) {
  let node = head
  while (node && node.value !== value) {
    node = node.next
  }
  return node
}
```

#### 遍历

```js
/**
 * 遍历链表
 * @param {SLNode} head 链表头结点
 */
function* traverse(head) {
  let n = head
  while (n) {
    yield n.value
    n = n.next
  }
}
```

> 可以使用 `for...of`遍历结果，或通过 `[...traverseRes]`获取遍历结果构成的数组

#### 反向遍历

```js
/**
 * 反向遍历链表
 * @param {SLNode} head 链表头结点
 */
function* reverseTraversal(head) {
  if (!head) {
    return ERROR
  }
  if (head.next === null) {
    yield head.value
  } else {
    for (let v of reverseTraversal(head.next)) {
      yield v
    }
    yield head.value
  }
}
```

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
