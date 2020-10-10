// https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/avl-tree/AvlTree.js

// #region AvlTree
import BinarySearchTree from '../binary-search-tree/BinarySearchTree'

export default class AvlTree extends BinarySearchTree {
  /**
   * 插入新结点
   * @param {*} value 要插入的值
   */
  insert(value) {
    super.insert(value)
    let currentNode = this.root.find(value)
    while (currentNode) {
      this.balance(currentNode)
      currentNode = currentNode.parent
    }
  }

  /**
   * 删除某结点
   * @param {*} value 要移除的结点的值
   */
  remove(value) {
    super.remove(value)
    this.balance(this.root)
  }

  /**
   * 平衡树
   * @param {*} node 需要重新平衡的树
   */
  balance(node) {
    const { balanceFactor } = node

    if (balanceFactor > 1) {
      const leftBalanceFactor = node.left.balanceFactor
      if (leftBalanceFactor > 0) {
        // 左左情况
        this.rotateLeftLeft(node)
      } else if (leftBalanceFactor < 0) {
        // 左右情况
        this.rotateLeftRight(node)
      }
    } else if (balanceFactor < -1) {
      const rightBalanceFactor = node.right.balanceFactor
      if (rightBalanceFactor < 0) {
        // 右右情况
        this.rotateRightRight(node)
      } else if (rightBalanceFactor > 0) {
        // 右左情况
        this.rotateRightLeft(node)
      }
    }
  }

  /**
   * 左左情况，进行右旋，参照图理解
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftLeft(rootNode) {
    const { parent } = rootNode

    // 旋转后重新平衡的树的根结点
    const pivot = rootNode.left

    rootNode.setLeft(pivot.right)
    pivot.setRight(rootNode)

    if (parent) {
      parent.replaceChild(rootNode, pivot)
    } else {
      // 根结点
      this.root = pivot
    }
    pivot.parent = parent
  }

  /**
   * 右右情况，进行左旋
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightRight(rootNode) {
    const { parent } = rootNode

    // 旋转后重新平衡的树的根结点
    const pivot = rootNode.right

    rootNode.setRight(pivot.left)
    pivot.setLeft(rootNode)

    if (parent) {
      parent.replaceChild(rootNode, pivot)
    } else {
      // 根结点
      this.root = pivot
    }

    pivot.parent = parent
  }

  /**
   * 左右情况
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateLeftRight(rootNode) {
    this.rotateRightRight(rootNode.left)
    this.rotateLeftLeft(rootNode)
  }

  /**
   * 右左情况
   * @param {BinarySearchTreeNode} rootNode
   */
  rotateRightLeft(rootNode) {
    this.rotateLeftLeft(rootNode.right)
    this.rotateRightRight(rootNode)
  }
}
// #endregion AvlTree

// https://zh.wikipedia.org/wiki/AVL%E6%A0%91
