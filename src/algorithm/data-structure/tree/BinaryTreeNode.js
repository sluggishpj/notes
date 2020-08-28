// https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/BinaryTreeNode.js
// 二叉树结点
import Comparator from '@/utils/comparator'

export default class BinaryTreeNode {
  constructor(value = null) {
    this.left = null
    this.right = null
    this.parent = null
    this.value = value
    this.meta = new Map()
    // 比较函数
    this.nodeComparator = new Comparator()
  }

  /**
   * 获取左子树高度
   * @returns {number}
   */
  get leftHeight() {
    if (!this.left) {
      return 0
    }
    return this.left.height + 1
  }

  /**
   * 获取右子树高度
   * @returns {number}
   */
  get rightHeight() {
    if (!this.right) {
      return 0
    }
    return this.right.height + 1
  }

  /**
   * 获取以当前结点为根结点的树的高度
   */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  /**
   * 平衡因子
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight
  }

  /**
   * 获取叔结点，也就是parent.parent的另一个孩子
   */
  get uncle() {
    if (!this.parent) {
      return undefined
    }
    if (!this.parent.parent) {
      return undefined
    }
    const grandNode = this.parent.parent
    if (!grandNode.left || !grandNode.right) {
      // 说明 parent.parent 只有1个孩子
      return undefined
    }
    if (this.nodeComparator.equal(this, grandNode.left)) {
      return grandNode.right
    }
    return grandNode.left
  }
  setValue(value) {
    this.value = value
    return this
  }
  /**
   * 将node结点作为当前结点的左子树
   * @param {BinaryTreeNode} node
   */
  setLeft(node) {
    if (this.left) {
      // 将原本的左子树 断绝 关联
      this.left.parent = null
    }

    // 新结点建立关联
    this.left = node
    this.left && (this.left.parent = this)

    return this
  }

  /**
   * 将node结点作为当前结点的右子树
   * @param {BinaryTreeNode} node
   */
  setRight(node) {
    if (this.right) {
      this.right.parent = null
    }
    this.right = node
    this.right && (this.right.parent = this)
    return this
  }
  /**
   * 删除的直接子结点
   * @param {BinaryTreeNode} nodeToRemove 要删除的节点
   */
  removeChild(nodeToRemove) {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null
      return true
    }
    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null
      return true
    }
    return false
  }

  /**
   * 替换子结点
   * @param {BinaryTreeNode} nodeToReplace 被替换的子结点
   * @param {BinaryTreeNode} replacementNode 新子结点
   */
  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false
    }
    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode
      return true
    }
    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode
      return true
    }
    return false
  }
  /**
   * 复制结点
   * @param {BinaryTreeNode} sourceNode 被复制的结点
   * @param {BinaryTreeNode} targetNode 复制到的目标结点
   */
  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value)
    targetNode.setLeft(sourceNode.left)
    targetNode.setRight(sourceNode.right)
  }

  // 先序遍历
  traversePreOrder() {
    let traverse = []
    traverse.push(this.value)
    if (this.left) {
      traverse = traverse.concat(this.left.traversePreOrder())
    }
    if (this.right) {
      traverse = traverse.concat(this.right.traversePreOrder())
    }
    return traverse
  }

  // 中序遍历
  traverseInOrder() {
    let traverse = []
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder())
    }
    traverse.push(this.value)
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder())
    }
    return traverse
  }

  // 后序遍历
  traverPostOrder() {
    let traverse = []
    if (this.left) {
      traverse = traverse.concat(this.left.traverPostOrder())
    }
    if (this.right) {
      traverse = traverse.concat(this.right.traverPostOrder())
    }
    traverse.push(this.value)
    return traverse
  }

  toString() {
    return this.traverseInOrder().toString()
  }
}
