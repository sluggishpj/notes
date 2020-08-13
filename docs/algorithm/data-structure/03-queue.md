---
title: 队列
---

在计算机科学中, 一个 队列(queue) 是一种特殊类型的抽象数据类型或集合。集合中的实体按顺序保存。

队列基本操作有两种: 向队列的后端位置添加实体，称为入队，并从队列的前端位置移除实体，称为出队。

队列中元素先进先出 FIFO (first in, first out)的示意

![Queue](https://upload.wikimedia.org/wikipedia/commons/5/52/Data_Queue.svg)

## 普通队列

<<< @/src/algorithm/data-structure/queue.js#Queue

> 这里是为了模拟普通队列不释放内存的情况，不然直接使用 `push()`和 `shift()`==

## 循环队列

随着时间的推移，普通队列会向数组的尾部移动，一旦到达数组的最末端，即使数组的前端还有空闲位置，再进行入队操作也会导致溢出。这种数组上实际有空闲位置而发生了上溢的现象称为是“假溢出”。

解决假溢出的办法是采用循环的方式来组织存放队列元素的数组，即将数组下标为 0 的位置看做是最后一个位置的后继。（ `x` 的后继为 `(x + 1) % Size` ）。这样就形成了循环队列。

![Circular_Queue](https://upload.wikimedia.org/wikipedia/commons/b/b7/Circular_buffer.svg)

> https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue
>
> https://oi-wiki.org/ds/queue/
