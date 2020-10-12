---
title: 红黑树
---

红黑树（英语：Red–black tree）是一种自平衡二叉查找树，又称为"对称二叉 B 树"
可以在 O(log n)时间内完成查找、插入和删除，这里的 n 是树中元素的数目。

红黑树是 2-3-4 树的一种等同。换句话说，对于每个 2-3-4 树，都存在至少一个 数据元素是同样次序的红黑树。

红黑树相对于 AVL 树来说，牺牲了部分平衡性以换取插入/删除操作时少量的旋转操作，整体来说性能要优于 AVL 树。

## 性质

在二叉查找树强制一般要求以外，对于任何有效的红黑树我们增加了如下的额外要求：

1. 结点是红色或黑色
2. 根是黑色
3. 所有叶子都是黑色（叶子是 NIL 结点）
4. 每个红色结点必须有 2 个黑色的子节点。（从每个叶子到根的所有路径上不能有两个连续的红色节点。）
5. 从任一结点到其每个叶子的所有简单路径都包含相同数目的黑色结点

这些约束确保了红黑树的关键特性：从根到叶子的最长的可能路径不多于最短的可能路径的两倍长。结果是这个树大致上是平衡的。因为操作比如插入、删除和查找某个值的最坏情况时间都要求与树的高度成比例，这个在高度上的理论上限允许红黑树在最坏情况下都是高效的

![black_tree_example](https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg)

> 使用"nil 叶子"或"空（null）叶子"，如上图所示，它不包含数据而只充当树在此结束的指示。与此有关的结论是所有节点都有两个子节点，尽管其中的一个或两个可能是空叶子。

## 操作

因为每一个红黑树也是一个特化的二叉查找树，因此红黑树上的只读操作与普通二叉查找树上的只读操作相同。然而，在红黑树上进行插入操作和删除操作会导致不再符合红黑树的性质。恢复红黑树的性质需要少量 O(logn) 的颜色变更（实际是非常快速的）和树旋转。虽然插入和删除很复杂，但操作时间仍可以保持为 O(logn) 次。

详细内容看 :point_right: [WIKI](https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91)

<<< @/src/algorithm/data-structure/tree/red-black-tree/RedBlackTree.js#RedBlackTree

> https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91
>
> https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/red-black-tree
