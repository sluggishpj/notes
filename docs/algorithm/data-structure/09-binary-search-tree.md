---
title: 二叉查找树
---

二叉查找树（英语：Binary Search Tree），也称为二叉搜索树、有序二叉树（ordered binary tree）或排序二叉树（sorted binary tree），是指一棵空树或者具有下列性质的二叉树：

1. 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
2. 若任意节点的右子树不空，则右子树上所有节点的值均大于或等于它的根节点的值；
3. 任意节点的左、右子树也分别为二叉查找树；

二叉搜索树上的基本操作所花费的时间与这棵树的高度成正比。对于一个有 n 个结点的二叉搜索树中，这些操作的最优时间复杂度为 O(logn)，最坏为 O(n)。随机构造这样一棵二叉搜索树的期望高度为 O(logn)。

虽然二叉查找树的最坏效率是 O(n)，但它支持动态查询，且有很多改进版的二叉查找树可以使树高为 O(log n)，从而将最坏效率降至 O(logn)，如 AVL 树、红黑树等。

<<< @/src/algorithm/data-structure/binary-search-tree.js#TreeNode

## 基本操作

### 查找

1. 若 b 是空树，则搜索失败，否则：
2. 若 x 等于 b 的根节点的数据域之值，则查找成功；否则：
3. 若 x 小于 b 的根节点的数据域之值，则搜索左子树；否则：
4. 查找右子树。

<<< @/src/algorithm/data-structure/binary-search-tree.js#contain

### 插入

<<< @/src/algorithm/data-structure/binary-search-tree.js#insert

> JS 没法直接修改指针，所以跟 wiki 上的有点区别

### 删除

### 遍历

> https://en.wikipedia.org/wiki/Binary_search_tree
