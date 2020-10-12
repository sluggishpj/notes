// 二叉搜索树

// #region TreeNode
// 树结点
class TreeNode {
  constructor(v) {
    this.value = v
    this.left = null
    this.right = null
  }
}
// #endregion TreeNode

// #region contains
/**
 * 查找是否存在目标结点
 * @param {TreeNode} root 根结点
 * @param {Number} value 要查找的元素
 */
function contains(root, value) {
  if (!root) {
    return false
  }
  const val = root.value
  if (val === value) {
    return true
  } if (value < val) {
    // 往左子树找
    return contains(root.left, value)
  }
  // 往右子树找
  return contains(root.right, value)
}
// #endregion contains

// #region findNode
/**
 * 查找目标元素结点
 * @param {TreeNode} root 根结点
 * @param {Number} value 目标元素
 * @returns {TreeNode} 目标结点
 */
function findNode(root, value) {
  if (!root) {
    return null
  }
  const val = root.value
  if (val === value) {
    return root
  } if (value < val) {
    return findNode(root.left, value)
  } if (value > val) {
    // 右子树
    return findNode(root.right, value)
  }
}
// #endregion findNode

// #region findParentNode
/**
 * 查找目标元素结点父结点
 * @param {TreeNode} root 根结点
 * @param {Number} value 目标元素
 * @returns {TreeNode} 目标结点的父结点
 */
function findParentNode(root, value) {
  if (!root) {
    return null
  }
  const val = root.value
  if (val === value) {
    return null
  }
  if (value < val) {
    // 左子树
    const { left } = root
    if (left && left.value === value) {
      return root
    }
    return findParentNode(left, value)
  } if (value > val) {
    // 右子树
    const { right } = root
    if (right && right.value === value) {
      return root
    }
    return findParentNode(right, value)
  }
}
// #endregion findParentNode

// #region findMin
/**
 * 查找树的最小值
 * @param {TreeNode} root 根节点
 * @returns {Number} 最小值
 */
function findMin(root) {
  if (root) {
    if (!root.left) {
      // 左子树不存在
      return root.value
    }
    return findMin(root.left)
  }
}
// #endregion findMin

// #region findMax
/**
 * 查找树的最小值
 * @param {TreeNode} root 根节点
 * @returns {Number} 最大值
 */
function findMax(root) {
  if (root) {
    if (!root.right) {
      // 右子树不存在
      return root.value
    }
    return findMax(root.right)
  }
}
// #endregion findMin

// #region insert
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
    }
    return insert(root.left, value)
  }
  // 插入在右子树上
  if (root.right === null) {
    // 右子树为空
    root.right = node
    return true
  }
  return insert(root.right, value)
}
// #endregion insert

// 取消父结点对子结点的引用
function disconnect(parent, child) {
  if (parent.value > child.value) {
    // 说明子结点是左孩子
    parent.left = null
  } else {
    // 说明子结点是右孩子
    parent.right = null
  }
}

// #region deleteNode
/**
 * 删除目标结点
 * @param {TreeNode} root 根结点
 * @param {Number} value 要删除的结点的值
 */
function deleteNode(root, value) {
  // 要删除的结点
  const node = findNode(root, value)
  if (!node) {
    // 目标结点不存在
    return false
  }
  // 目标结点的父结点
  const parent = findParentNode(root, value)

  if (!node.left && !node.right) {
    // 场景1，左右子树都为空，是叶子结点
    if (!parent) {
      // 也就是根结点
      node.value = null
      return true
    }
    disconnect(parent, node)
  } else if (node.left && !node.right) {
    // 场景2.1，有左子树，无右子树
    if (!parent) {
      // 是根结点，将左子树直接顶替为根结点
      const leftTree = node.left
      node.value = leftTree.value
      node.left = leftTree.left
      node.right = leftTree.right

      leftTree.left = null
      leftTree.right = null
    } else {
      if (parent.value > node.value) {
        // 是父结点的左孩子
        parent.left = node.left
      } else {
        // 是父结点的右孩子
        parent.right = node.left
      }
      node.left = null
    }
  } else if (node.right && !node.left) {
    // 场景2.2，有右子树，无左子树
    if (!parent) {
      // 是根结点，将右子树直接顶替为跟结点
      const rightTree = node.right
      node.value = rightTree.value
      node.left = rightTree.left
      node.right = rightTree.right

      rightTree.left = null
      rightTree.right = null
    } else {
      if (parent.value > node.value) {
        // 是父结点的左孩子
        parent.left = node.right
      } else {
        // 是父结点的右孩子
        parent.right = node.right
      }
      node.right = null
    }
  } else {
    // 场景3
    // 目标结点有左右子树

    // 左子树的最大结点
    const leftMaxVal = findMax(node.left)
    const leftMaxNode = findNode(node.left, leftMaxVal)
    const leftMaxParentNode = findParentNode(node, leftMaxVal)

    // 最大结点与其父结点断绝关系
    disconnect(leftMaxParentNode, leftMaxNode)

    if (!parent) {
      // 根结点
      node.value = leftMaxNode.value
    } else {
      const leftTree = node.left
      const rightTree = node.right

      if (parent.left === node) {
        // 删除的结点是其父结点的左孩子
        parent.left = leftMaxNode
      } else {
        parent.right = leftMaxNode
      }
      leftMaxNode.left = leftTree
      leftMaxNode.right = rightTree

      node.left = null
      node.right = null
    }
  }
  return true
}
// #endregion deleteNode

// #region traverse
// 先序遍历
function preorder(root, cb) {
  if (root) {
    cb(root.value)
    preorder(root.left, cb)
    preorder(root.right, cb)
  }
}

// 中序遍历
function inorder(root, cb) {
  if (root) {
    inorder(root.left, cb)
    cb(root.value)
    inorder(root.right, cb)
  }
}

// 后序遍历
function postorder(root, cb) {
  if (root) {
    postorder(root.left, cb)
    postorder(root.right, cb)
    cb(root.value)
  }
}
// #endregion traverse

export {
  TreeNode,
  contains,
  findNode,
  findParentNode,
  findMin,
  findMax,
  insert,
  deleteNode,
  preorder,
  inorder,
  postorder,
}
