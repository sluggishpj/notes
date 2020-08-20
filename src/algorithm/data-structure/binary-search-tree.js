// 二叉搜索树

//#region TreeNode
// 树结点
class TreeNode {
  constructor(v) {
    this.value = v
    this.left = null
    this.right = null
  }
}
//#endregion TreeNode

//#region contain
/**
 * 查找是否存在目标结点
 * @param {TreeNode} root 根结点
 * @param {Number} value 要查找的元素
 */
function contain(root, value) {
  if (!root) {
    return false
  }
  const val = root.value
  if (val === value) {
    return true
  } else if (value < val) {
    // 往左子树找
    return contain(root.left, value)
  } else {
    // 往右子树找
    return contain(root.right, value)
  }
}
//#endregion contain

//#region search
/**
 * 查找目标元素结点及其父节点
 * @param {TreeNode} root 根结点
 * @param {Number} value 目标元素
 * @returns {node: TreeNode, prent: TreeNode} 目标结点及其父结点
 */

function search(root, value) {
  if (!root) {
    return { node: null, parent: null }
  }
  const val = root.value
  if (val === value) {
    return { node: root, parent: null }
  } else if (value < val) {
    // 左子树
    const left = root.left
    if (left && left.value === value) {
      return { node: left, parent: root }
    } else {
      return search(left, value)
    }
  } else if (value > val) {
    // 右子树
    const right = root.right
    if (right && right.value === value) {
      return { node: right, parent: root }
    } else {
      return search(right, value)
    }
  }
}
//#endregion search

//#region insert
/**
 * 插入新结点
 * @param {TreeNode} root 根结点
 * @param {Number} value 要插入的值
 */
function insert(root, value) {
  if (!root) {
    return false
  }

  if (value === root.value) {
    return false
  }

  const node = new TreeNode(value)

  if (value < root.value) {
    // 插入在左子树上
    if (root.left === null) {
      // 左子树刚好为空
      root.left = node
      return true
    } else {
      return insert(root.left, value)
    }
  } else {
    // 插入在右子树上
    if (root.right === null) {
      // 右子树为空
      root.right = node
      return true
    } else {
      return insert(root.right, value)
    }
  }
}
//#endregion insert

/**
 * 删除目标结点
 * @param {TreeNode} root 根结点
 * @param {Number} value 要删除的结点的值
 */
function deleteNode(root, value) {}
