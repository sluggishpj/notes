// https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91
import BinarySearchTree from '../binary-search-tree/BinarySearchTree'

const COLORS = { red: 'red', black: 'black' }

const COLOR_PROP_NAME = 'color'

export default class RedBlackTree extends BinarySearchTree {
  // 插入新结点
  insert(value) {
    const newNode = super.insert(value)
    newNode.meta.set(COLOR_PROP_NAME, COLORS.red)
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
    if (this.isNodeBlack(node)) {
      // 黑色结点就不管了
      return true
    }
    let { parent } = node
    // 情形1：新结点N位于树的根上，没有父结点。在
    // 这种情形下，我们把它重绘为黑色以满足性质2。
    // 因为它在每个路径上对黑结点数目增加一，性质5符合。
    if (!parent) {
      this.makeNodeBlack(node)
      return true
    }

    // 情形2：新结点的父结点P是黑色，所以性质4没有失效（新结点是红色的）。
    // 在这种情形下，树仍是有效的。性质5也未受到威胁，尽管新结点N有两个黑色叶子子结点；
    // 但由于新结点N是红色，通过它的每个子结点的路径就都有同通过它所取代的黑色的叶子的路径同样数目的黑色结点，所以依然满足这个性质。
    if (this.isNodeBlack(parent)) {
      return true
    }

    /* 以下情形，父结点都是红色（根据性质2，必有祖父结点） */

    // 情形3：父结点P和叔父结点U二者都是红色
    // 将 P 和 U 变黑，并将祖父结点变红，再 balance 祖父结点
    const { uncle } = node
    const grandParent = parent.parent
    if (uncle && this.isNodeRed(uncle)) {
      this.makeNodeBlack(node.parent)
      this.makeNodeBlack(uncle)
      this.makeNodeRed(grandParent)

      return this.balance(grandParent)
    }

    // 以下情形：父结点P是红色，叔结点U是黑色或缺少。
    // 4.1新结点N是其父结点P的右子结点 而 父结点P又是祖先结点G的左子结点。
    // 对P进行左旋，然后按情形5.1处理
    if (node === parent.right && parent === grandParent.left) {
      this.rotateRightRight(parent)

      // 更新原结点指向，使之满足情况5.1
      node = parent
      parent = node.parent
    } else if (node === parent.left && parent === grandParent.right) {
      // 5.1的对称，也就是新结点N是父结点P的左子结点 而 父结点P又是祖先结点G的右子结点。
      // 对P进行右旋，然后按情形5.2处理
      this.rotateLeftLeft(parent)

      node = parent
      parent = node.parent
    }

    // 情形5.1
    // 新结点N是其父结点的左子结点，而父结点P又是祖先结点G的左子结点。
    // 针对祖父节点G的一次右旋转
    // 切换以前的父节点P和祖父节点G的颜色
    if (node === parent.left && parent === grandParent.left) {
      this.makeNodeBlack(parent)
      this.makeNodeRed(grandParent)
      this.rotateLeftLeft(grandParent)
    } else if (node === parent.right && parent === grandParent.right) {
      // 情形5.2，也是5.1的对称
      this.makeNodeBlack(parent)
      this.makeNodeRed(grandParent)
      this.rotateRightRight(grandParent)
    }
    return true
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

  /**
   * 右右情况，进行左旋，参照AVL树理解：https://zh.wikipedia.org/wiki/AVL%E6%A0%91
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
}
