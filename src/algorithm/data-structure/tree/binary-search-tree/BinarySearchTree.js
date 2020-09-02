import BinarySearchTreeNode from './BinarySearchTreeNode'

export default class BinarySearchTree {
  constructor(nodeValueCompareFunction) {
    this.root = new BinarySearchTreeNode(null, nodeValueCompareFunction)
    this.nodeComparator = this.root.nodeComparator
  }

  /**
   * 插入新结点
   * @param {*} value 要插入的值
   * @return {BinarySearchTreeNode} 插入的新结点
   */
  insert(value) {
    return this.root.insert(value)
  }

  /**
   * 是否包含 结点值为 value 的结点
   * @param {*} value 要查询的结点的值
   * @return {boolean} 是否包含
   */
  contains(value) {
    return this.root.contains(value)
  }

  /**
   * 删除 值为 value 的结点
   * @param {*} value 要删除的结点的值
   * @return {boolean}
   */
  remove(value) {
    return this.root.remove(value)
  }

  /**
   * @return {string}
   */
  toString() {
    return this.root.toString()
  }
}
