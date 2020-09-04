---
title: 二叉查找树
---

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

二叉查找树（英语：Binary Search Tree），也称为二叉搜索树、有序二叉树（ordered binary tree）或排序二叉树（sorted binary tree），是指一棵空树或者具有下列性质的二叉树：

1. 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
2. 若任意节点的右子树不空，则右子树上所有节点的值均大于或等于它的根节点的值；
3. 任意节点的左、右子树也分别为二叉查找树；

二叉搜索树上的基本操作所花费的时间与这棵树的高度成正比。对于一个有 n 个结点的二叉搜索树中，这些操作的最优时间复杂度为 O(logn)，最坏为 O(n)。随机构造这样一棵二叉搜索树的期望高度为 O(logn)。

虽然二叉查找树的最坏效率是 O(n)，但它支持动态查询，且有很多改进版的二叉查找树可以使树高为 O(log n)，从而将最坏效率降至 O(logn)，如 AVL 树、红黑树等。

## 基本操作

<<< @/src/algorithm/data-structure/tree/binary-search-tree/BinarySearchTreeNode.js

> https://en.wikipedia.org/wiki/Binary_search_tree
>
> https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/binary-search-tree/README.md
