// https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/binary-search-tree/BinarySearchTreeNode.js

// BST 结点
import Comparator from '@/utils/comparator'
import BinaryTreeNode from '../BinaryTreeNode'

export default class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null, compareFunction) {
    super(value)
    this.compareFunction = compareFunction
    this.nodeValueComparator = new Comparator(compareFunction)
  }

  /**
   * 构造并插入新结点
   * @param {*} value 要插入结点的值
   * @return {BinarySearchTreeNode} 插入的新结点
   */
  insert(value) {
    if (this.nodeValueComparator.equal(this.value, null)) {
      // 当前结点值为null，则赋值给当前结点
      this.value = value
      return this
    }

    if (this.nodeValueComparator.lessThan(value, this.value)) {
      // 插入的值 比当前结点值小，将值插入到左子树中
      if (this.left === null) {
        // 左子树为空，将结点作为左孩子
        const newNode = new BinarySearchTreeNode(value)
        this.setLeft(newNode)
        return newNode
      }
      return this.left.insert(value)
    }

    if (this.nodeValueComparator.greaterThan(value, this.value)) {
      // 要插入的值 比当前结点值大，将值插入到右子树中
      if (this.right === null) {
        // 右子树为空，将结点作为右孩子
        const newNode = new BinarySearchTreeNode(value)
        this.setRight(newNode)
        return newNode
      }
      return this.right.insert(value)
    }

    return this
  }

  /**
   * 查找结点值为 value 的结点
   * @param {*} value 要查找的结点的值
   * @return {BinarySearchTreeNode} 找到的结点
   */
  find(value) {
    if (this.nodeValueComparator.equal(value, this.value)) {
      // 当前结点值 与 查找的值相等
      return this
    }
    if (this.nodeValueComparator.lessThan(value, this.value) && this.left) {
      // 小于当前结点，且左子树存在。往左子树找
      return this.left.find(value)
    }
    if (this.nodeValueComparator.greaterThan(value, this.value) && this.right) {
      // 往右子树找
      return this.right.find(value)
    }

    return null
  }

  /**
   * 是否存在子结点的值为value
   * @param {*} value 目标结点的值
   */
  contains(value) {
    return !!this.find(value)
  }

  /**
   * 删除 结点值为 value 的结点
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    const nodeToRemove = this.find(value)
    if (!nodeToRemove) {
      // 没找到目标结点
      throw new Error('Item not found in the tree')
    }

    const { parent } = nodeToRemove

    if (!nodeToRemove.left && !nodeToRemove.right) {
      // 情况1：没有孩子
      if (parent) {
        parent.removeChild(nodeToRemove)
      } else {
        // nodeToRemove 是根结点，清除自身数据
        nodeToRemove.setValue(undefined)
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      // 情况2：左右子树都存在
      // 将右子树中的最小结点取出，替换掉nodeToRemove 结点【也可以取左子树的最小结点】
      const nextBiggerNode = nodeToRemove.right.findMin()

      if (this.nodeValueComparator.equal(nextBiggerNode.value, nodeToRemove.right.value)) {
        // nextBiggerNode 结点是要删除结点的右孩子
        nodeToRemove.setRight(nextBiggerNode.right)
      } else {
        // 删除 nextBiggerNode，这里的 nextBiggerNode 最多只有一个 直接孩子，删除时进入情况3中
        this.remove(nextBiggerNode.value)
      }
      nodeToRemove.setValue(nextBiggerNode.value)
    } else {
      // 情况3：只有左子树或只有右子树
      const childNode = nodeToRemove.left || nodeToRemove.right
      if (parent) {
        parent.replaceChild(nodeToRemove, childNode)
      } else {
        BinaryTreeNode.copyNode(childNode, nodeToRemove)
      }
    }
    nodeToRemove.parent = null
    return true
  }

  /**
   * 查找最小值
   * @return {BinarySearchTreeNode}
   */
  findMin() {
    if (!this.left) {
      return this
    }
    return this.left.findMin()
  }

  /**
   * 查找最最大值
   * @return {BinarySearchTreeNode}
   */
  findMax() {
    if (!this.right) {
      return this
    }
    return this.right.findMax()
  }
}
