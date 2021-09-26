---
title: 数组排序算法
---

# 各数组排序算法

为了方便理解，下面算法都只实现**升序**，降序的话把判断条件改改就行了:)

## 冒泡排序

原理：依次比较相邻的元素，如果不符合顺序则进行交换，保证每轮遍历时，都有一个元素在排序后的位置。

![bubble sort](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

> 图片来自 [Bubble_sort | wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)

<<< @/src/algorithm/algorithms/array-sorting-algorithms.js#bubbleSort

## 选择排序

原理：每一次从待排序的数据元素中选出最小（或最大）的一个元素，与待排序序列的首元素交换。

![selection Sort](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

> 图片来自 [Selection_sort | wikipedia](https://en.wikipedia.org/wiki/Selection_sort)

<<< @/src/algorithm/algorithms/array-sorting-algorithms.js#selectSort

## 插入排序

原理: 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

![insertion sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

> 图片来自 [Insertion_sort | wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)

<<< @/src/algorithm/algorithms/array-sorting-algorithms.js#insertSort

## 希尔排序

原理：是插入排序的一种更高效的改进版本，把数组按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含元素的越来越多，当增量减至 1 时，整个数组被分成一组进行插入排序，完后算法便终止。

![shell sort](https://i.postimg.cc/tTrCytLZ/shell-Sort.gif)

> [图片来源](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)

<<< @/src/algorithm/algorithms/array-sorting-algorithms.js#shellSort

> 如果只用 1 个替换数组，来回反复替换有点饶，可以在 `mergeOrderArr` 函数内复制一份，然后直接修改原数组

## 归并排序

原理：将数组分为两个部分，对两部分分别进行排序，排序完成后，再将各自排序好的两个部分合并还原成一个有序数组。

![merge sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

> 图片来自 [Merge_sort | wikipedia](https://en.wikipedia.org/wiki/Merge_sort)

- 合并数组中的两部分到新数组对应的位置，两部分各自有序，且相邻

<<< @/src/algorithm/algorithms/array-sorting-algorithms.js#mergeOrderArr

- 递归实现归并排序

<<< @/src/algorithm/algorithms/array-sorting-algorithms.js#mergeSortRecursion

- 循环实现归并排序

<<< @/src/algorithm/algorithms/array-sorting-algorithms.js#mergeSortIteration

> 这个有点饶，如果不考虑空间复杂度，函数返回个新数组，直接合并新数组会清晰很多

## 快速排序

![quick sort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

> 图片来自 [Quicksort | wikipedia](https://en.wikipedia.org/wiki/Quicksort)

<<< @/src/algorithm/algorithms/array-sorting-algorithms.js#quickSort

## 堆排序

思路：将数组构造成大顶堆，然后将堆顶和堆末尾交换，缩小堆的范围(把堆尾排除掉)，再调整成新的大顶堆，不断重复直到最后 1 个结束。

![heap sort](https://z3.ax1x.com/2021/09/26/46tLK1.gif)

> [图片来源](https://www.runoob.com/w3cnote/heap-sort.html)

<<< @/src/algorithm/algorithms/array-sorting-algorithms.js#heapSort

> 感觉就是[优先队列](/algorithm/data-structure/priority-queue)的特殊情况，优先队列多了新增操作，所以多了个 `swim` 操作

## 计数排序

## 桶排序

## 基数排序

## Timsort

## 时间&空间复杂度

## REF

> https://www.bigocheatsheet.com/#graphs
