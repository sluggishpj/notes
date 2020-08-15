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

//#region search
/**
 * 查找是否存在目标结点
 * @param {TreeNode} root 根结点
 * @param {Number} value 要查找的元素
 */
function search(root, value) {
  if (!root) {
    return false
  }
  const val = root.value
  if (val === value) {
    return true
  } else if (value < val) {
    // 往左子树找
    return search(root.left, value)
  } else {
    // 往右子树找
    return search(root.right, value)
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
function delete(root, value) {}
