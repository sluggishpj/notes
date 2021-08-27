---
title: 优先队列
---

# 优先队列

在计算机科学中, 优先级队列(priority queue) 是一种抽象数据类型, 它类似于常规的队列或栈。
优先队列中的每个元素都有各自的优先级，优先级最高的元素最先得到服务；优先级相同的元素按照其在优先队列中的顺序得到服务。
优先队列虽通常用堆来实现,但它在概念上与堆不同。优先队列是一个抽象概念，就像“列表”或“图”这样的抽象概念一样;
正如列表可以用链表或数组实现一样，优先队列可以用堆或各种其他方法实现,例如无序数组。

## 操作

优先队列至少需要支持下述操作：

- 是否为空队列（is_empty）
- 插入带优先级的元素（insert_with_priority）
- 取出具有最高优先级的元素（pull_highest_priority_element）
- 查看最高优先级的元素（peek）：O(1) 时间复杂度

其它可选的操作：

- 检查优先级高的一批元素
- 清空优先队列
- 批插入一批元素
- 合并多个优先队列
- 调整一个元素的优先级

## 实现

### 初级实现

有许多简单低效的实现。如用一个有序的数组；或使用无序数组，在每次取出时搜索全集合，这种方法插入的效率为 O(1)，但取出时效率为 ​O(n)。

### 典型实现

出于性能考虑，优先队列用堆来实现，具有 O(logn) 时间复杂度的插入/删除元素性能，O(n) 的初始化构造的时间复杂度。如果使用自平衡二叉查找树，插入与删除的时间复杂度为 O(logn)，构造二叉树的时间复杂度为 O(nlogn)。

```js
// 优先队列
class PQ {
  constructor(compareFn) {
    // 保存堆元素。索引0不用
    this.pq = [undefined]
    // 是大顶堆 还是 小顶堆 通过 compreFn 确定
    // compreFn 方法 同 Array.sort(fn) 传递的fn使用方法一致，升序则是小顶堆，降序的话则是小顶堆
    this.compareFn = compareFn
  }

  // 返回堆顶元素，不移除
  top() {
    return this.pq[1]
  }

  // 弹出并移除栈顶元素
  pop() {
    // 思路：
    // 1. 将栈顶元素 和 最后1个元素互换，然后移除最后1个元素
    // 2. 将栈顶元素下沉
    const top = this.top()

    const lastIdx = this.pq.length - 1
    this.exch(1, lastIdx)
    this.pq.splice(lastIdx, 1)

    this.sink(1)

    return top
  }

  // 插入新元素
  insert(item) {
    // 思路
    // 1. 插入到最后1个位置，进行上浮
    this.pq.push(item)
    this.swim(this.pq.length - 1)
  }

  // 下沉第k个元素
  sink(k) {
    const { pq } = this
    const lastIdx = pq.length - 1
    const leftChildIdx = 2 * k
    const rightChildIdx = leftChildIdx + 1

    if (leftChildIdx > lastIdx) {
      // 自己在最底层，沉不下去了
      return
    }

    // 先挑个优先级高的孩子，再进行比较
    let priorizedIdx = leftChildIdx
    if (rightChildIdx <= lastIdx && this.isPre(rightChildIdx, leftChildIdx)) {
      // 右孩子比左孩子优先级高
      priorizedIdx = rightChildIdx
    }

    if (this.isPre(priorizedIdx, k)) {
      // 跟k交换，继续下沉
      this.exch(k, priorizedIdx)
      // 这里用了递归，也可以用循环
      this.sink(priorizedIdx)
    }
  }

  // 上浮第k个元素
  swim(k) {
    while (k > 1) {
      const parent = this.parent(k)
      if (this.isPre(k, parent)) {
        // 跟parent交换
        this.exch(k, parent)
        k = parent
      } else {
        return
      }
    }
  }

  // 交换数组下标i,j的 2个元素
  exch(i, j) {
    const pq = this.pq
    ;[pq[i], pq[j]] = [pq[j], pq[i]]
  }

  // pq[i] 是否 排在 pq[j] 前面，也就是 更靠近pq[1]
  isPre(i, j) {
    const { pq, compareFn } = this
    return compareFn(pq[i], pq[j]) < 0
  }

  // pq[i] 的 父结点下标
  parent(i) {
    return Math.floor(i / 2)
  }

  // 是否为空堆
  isEmpty() {
    return this.pq.length <= 1
  }
}

// 升序，小顶堆
const pq = new PQ((a, b) => a - b)
pq.insert(12)
pq.insert(1)
pq.insert(6)
pq.insert(3)
pq.insert(34)

while (!pq.isEmpty()) {
  console.log(pq.pop()) // 1,3,6,12,34
}
```

> https://en.wikipedia.org/wiki/Priority_queue
