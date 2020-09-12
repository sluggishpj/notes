import BinarySearchTree from '../binary-search-tree/BinarySearchTree'

const COLORS = { red: 'red', black: 'black' }

const COLOR_PROP_NAME = 'color'

export default class RedBlackTree extends BinarySearchTree {
  // 插入新结点
  insert(value) {
    const newNode = super.insert(value)
    let currentNode = newNode
    while (currentNode) {
      this.balance(currentNode)
      currentNode = currentNode.parent
    }
    return newNode
  }

  // 1. 结点是红色或黑色。
  // 2. 根是黑色。
  // 3. 所有叶子都是黑色（叶子是NIL结点）。
  // 4. 每个红色结点必须有两个黑色的子结点。（从每个叶子到根的所有路径上不能有两个连续的红色结点。）
  // 5. 从任一结点到其每个叶子的所有简单路径都包含相同数目的黑色结点。
  /**
   * 平衡红黑树
   * @param {BinarySearchTreeNode} node
   */
  balance(node) {
    // 情形1：新结点N位于树的根上，没有父结点。在
    // 这种情形下，我们把它重绘为黑色以满足性质2。
    // 因为它在每个路径上对黑结点数目增加一，性质5符合。
    if (!node.parent) {
      this.makeNodeBlack(node)
      return true
    }

    // 情形2：新结点的父结点P是黑色，所以性质4没有失效（新结点是红色的）。
    // 在这种情形下，树仍是有效的。性质5也未受到威胁，尽管新结点N有两个黑色叶子子结点；
    // 但由于新结点N是红色，通过它的每个子结点的路径就都有同通过它所取代的黑色的叶子的路径同样数目的黑色结点，所以依然满足这个性质。
    if (this.isNodeBlack(node.parent)) {
      return true
    }
  }

  /**
   * 结点变红
   * @param {BinarySearchTreeNode} node 结点
   */
  makeNodeRed(node) {
    node.meta.set(COLOR_PROP_NAME, COLORS.red)
    return node
  }

  /**
   * 结点变黑
   * @param {BinarySearchTreeNode} node 结点
   * @return {BinarySearchTreeNode}
   */
  makeNodeBlack(node) {
    node.meta.set(COLOR_PROP_NAME, COLORS.black)
    return node
  }

  /**
   * 是否红色结点
   * @param {BinarySearchTreeNode} node
   */
  isNodeRed(node) {
    return node.meta.get(COLOR_PROP_NAME) === COLORS.red
  }

  /**
   * 是否黑色结点
   * @param {BinarySearchTreeNode} node
   */
  isNodeBlack(node) {
    return node.meta.get(COLOR_PROP_NAME) === COLORS.black
  }

  /**
   * 结点是否有颜色
   * @param {BinarySearchTreeNode} node
   */
  isNodeColored(node) {
    return this.isNodeRed(node) || this.isNodeBlack(node)
  }

  /**
   * 交换2个结点颜色
   * @param {BinarySearchTreeNode} firstNode
   * @param {BinarySearchTreeNode} secondNod
   */
  swapNodeColors(firstNode, secondNode) {
    const firstColor = firstNode.meta.get(COLOR_PROP_NAME)
    const secondColor = secondNode.meta.get(COLOR_PROP_NAME)
    firstNode.meta.set(COLOR_PROP_NAME, secondColor)
    secondNode.meta.set(COLOR_PROP_NAME, firstColor)
  }
}
