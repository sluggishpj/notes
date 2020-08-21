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

<<< @/src/algorithm/data-structure/binary-search-tree.js#TreeNode

## 基本操作

### 查找

#### 是否包含目标结点

1. 若 b 是空树，则搜索失败，否则：
2. 若 x 等于 b 的根节点的数据域之值，则查找成功；否则：
3. 若 x 小于 b 的根节点的数据域之值，则搜索左子树；否则：
4. 查找右子树。

<<< @/src/algorithm/data-structure/binary-search-tree.js#contains

#### 查找目标结点

<<< @/src/algorithm/data-structure/binary-search-tree.js#findNode

#### 查找父结点

<<< @/src/algorithm/data-structure/binary-search-tree.js#findParentNode

#### 查找最小值

<<< @/src/algorithm/data-structure/binary-search-tree.js#findMin

### 插入

<<< @/src/algorithm/data-structure/binary-search-tree.js#insert

### 删除

1. 若 p 结点为叶子结点，删掉叶子结点不破坏整棵树的结构，则只需修改其父结点的对 p 结点的引用即可
2. 若 p 结点只有左子树 PL【或只有右子树 PR】，只要修改 p 结点的父结点对 p 的引用，使其指向 PL【或 PR】
3. 若 p 结点的左右子树均不为空，则需要
   1. 查找 p 结点左子树的最大结点 PL_MAX，将其与其父结点断绝联系
   2. 将 PL_MAX 替换掉 p 结点所在的位置
   3. p 结点与其左右子树断绝联系

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Binary_search_tree_delete.svg/1920px-Binary_search_tree_delete.svg.png)

<<< @/src/algorithm/data-structure/binary-search-tree.js#deleteNode

### 遍历

<<< @/src/algorithm/data-structure/binary-search-tree.js#traverse

> https://en.wikipedia.org/wiki/Binary_search_tree
>
> https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/binary-search-tree/README.md
