---
title: 字典树
---

# 字典树

在计算机科学中，trie (读作/ˈtraɪ/ "try")，又称前缀树或字典树，是一种有序树，用于保存关联数组，其中的键通常是字符串。与二叉查找树不同，键不是直接保存在节点中，而是由节点在树中的位置决定。一个节点的所有子孙都有相同的前缀，也就是这个节点对应的字符串，而根节点对应空字符串。一般情况下，不是所有的节点都有对应的值，只有叶子节点和部分内部节点所对应的键才有相关的值。
键不需要被显式地保存在节点中。图示中标注出完整的单词，只是为了演示 trie 的原理。

![Trie](https://upload.wikimedia.org/wikipedia/commons/b/be/Trie_example.svg)

<<< @/src/algorithm/data-structure/trie.js#TrieNode

## 基本操作

### 插入单词

<<< @/src/algorithm/data-structure/trie.js#insert

### 查找

<<< @/src/algorithm/data-structure/trie.js#contains

> https://zh.wikipedia.org/wiki/Trie
