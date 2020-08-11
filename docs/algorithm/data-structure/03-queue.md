---
title: 队列
---

在计算机科学中, 一个 队列(queue) 是一种特殊类型的抽象数据类型或集合。集合中的实体按顺序保存。

队列基本操作有两种: 向队列的后端位置添加实体，称为入队，并从队列的前端位置移除实体，称为出队。

队列中元素先进先出 FIFO (first in, first out)的示意

![Queue](https://upload.wikimedia.org/wikipedia/commons/5/52/Data_Queue.svg)

## 普通队列

```js
class Queue {
  constructor(size) {
    this._data = new Array(size)
    this.size = size
  }

  // 入队
  enqueue(v) {}

  // 出队
  dequeue(v) {}

  isEmpty() {}

  isFull() {}
}
```

>

## 循环队列

![Circular_Queue](https://upload.wikimedia.org/wikipedia/commons/b/b7/Circular_buffer.svg)
