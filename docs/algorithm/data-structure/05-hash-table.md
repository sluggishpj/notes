---
title: 哈希表
---

哈希表(hash table 或 hash map) 是一种实现 关联数组(associative array) 的抽象数据；类型, 该结构可以将 键映射到值。

哈希表使用 哈希函数/散列函数 来计算一个值在数组或桶(buckets)中或槽(slots)中对应的索引,可使用该索引找到所需的值。

理想情况下，散列函数将为每个键分配给一个唯一的桶(bucket)，但是大多数哈希表设计采用不完美的散列函数，这可能会导致"哈希冲突(hash collisions)"，也就是散列函数为多个键(key)生成了相同的索引，这种碰撞必须 以某种方式进行处理。

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

## 冲突

如果对于任意的 key，哈希函数计算出来的索引都不相同，那只用根据索引把 (key,value) 放到对应的位置就行了。但实际上，常常会出现两个不同的 key，他们用哈希函数计算出来的索引是相同的。这时候就需要一些方法来处理冲突。在 OI 中，最常用的方法是拉链法。

### 拉链法（开散列法）

拉链法是在每个存放数据的地方开一个链表，如果有多个 key 索引到同一个地方，只用把他们都放到那个位置的链表里就行了。查询的时候需要把对应位置的链表整个扫一遍，对其中的每个数据比较其 key 与查询的 key 是否一致。如果索引的范围是 1~M，哈希表的大小为 N，那么一次插入/查询需要进行期望 $O(\frac{N}{M})$ 次比较。

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

### 闭散列法

闭散列方法把所有记录直接存储在散列表中，如果发生冲突则根据某种方式继续进行探查。

比如线性探查法：如果在 d 处发生冲突，就依次检查 d+1 ， d+2...

> https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table
>
> https://oi-wiki.org/ds/hash/
