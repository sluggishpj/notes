---
title: AVL树
---

AVL 树是**自平衡二叉查找树**。在 AVL 树中，任一节点对应的两棵子树的最大高度差为 1，因此它也被称为**高度平衡树**。查找、插入和删除在平均和最坏情况下的时间复杂度都是 ${\displaystyle O(\log {n})}$。增加和删除元素的操作则可能需要借由一次或多次树旋转，以实现树的重新平衡。

节点的**平衡因子**是它的左子树的高度减去它的右子树的高度（有时相反）。带有平衡因子 1、0 或 -1 的节点被认为是平衡的。带有平衡因子 -2 或 2 的节点被认为是不平衡的，并需要重新平衡这个树。平衡因子可以直接存储在每个节点中，或从可能存储在节点中的子树高度计算出来。

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg)

## 操作

AVL 树的基本操作 和 不平衡的二叉查找树 基本同样的算法。但是要进行预先或随后做一次或多次所谓的"AVL 旋转"。

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

![Tree Reblancing](https://upload.wikimedia.org/wikipedia/commons/c/c7/Tree_Rebalancing.png)

### 删除

删除和 BST 类似，将结点与后继交换后删除。删除可能会导致树高以及平衡因子变化，需要进行平衡处理

> https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/avl-tree
