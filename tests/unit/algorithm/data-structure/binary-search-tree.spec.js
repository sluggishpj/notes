import {
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
  postorder
} from '@/algorithm/data-structure/binary-search-tree'

describe('data-structure.binary-search-tree', () => {
  let root
  let node1
  let node2
  let node4

  beforeEach(() => {
    //   2
    // /   \
    // 1    4
    node1 = new TreeNode(1)
    node2 = new TreeNode(2)
    node4 = new TreeNode(4)

    node2.left = node1
    node2.right = node4

    root = node2
  })

  test('contains', () => {
    expect(contains(root, 1)).toBe(true)
    expect(contains(root, 2)).toBe(true)
    expect(contains(root, 3)).toBe(false)
    expect(contains(root, 4)).toBe(true)
  })

  test('findNode', () => {
    expect(findNode(root, 1)).toBe(node1)
    expect(findNode(root, 2)).toBe(node2)
    expect(findNode(root, 3)).toBe(null)
    expect(findNode(root, 4)).toBe(node4)
  })

  test('findParentNode', () => {
    expect(findParentNode(root, 1)).toBe(root)
    expect(findParentNode(root, 2)).toBe(null)
    expect(findParentNode(root, 3)).toBe(null)
    expect(findParentNode(root, 4)).toBe(root)
  })

  test('findMin', () => {
    expect(findMin(root)).toBe(1)
  })

  test('findMax', () => {
    expect(findMax(root)).toBe(4)
  })

  test('insert', () => {
    //    2
    //  /   \
    // 1     4
    //      / \
    //     3   5
    expect(insert(root, 1)).toBe(false)
    insert(root, 3)
    expect(node4.left.value).toBe(3)
    insert(root, 5)
    expect(node4.right.value).toBe(5)
  })

  test('deleteNode#1左右子树为空-根结点', () => {
    let root = new TreeNode(2)
    deleteNode(root, 2)
    expect(root.value).toBe(null)
  })

  test('deleteNode#1左右子树为空-非根结点', () => {
    deleteNode(root, 1)
    expect(root.left).toBe(null)
  })

  test('deleteNode#2.1有左子树无右子树-根结点', () => {
    //     2
    //    /
    //   1
    let root = new TreeNode(2)
    let node1 = new TreeNode(1)
    root.left = node1

    deleteNode(root, 2)
    expect(root.value).toBe(1)
  })

  test('deleteNode#2.1有左子树无右子树非根结点', () => {
    //    2
    //  /   \
    // 1     4
    //      /
    //     3
    insert(root, 3)
    deleteNode(root, 4)
    expect(root.right.value).toBe(3)
    expect(root.right.left).toBe(null)
  })

  test('deleteNode#2.2有右子树无左子树-根结点', () => {
    //     2
    //      \
    //       4
    let root = new TreeNode(2)
    let node1 = new TreeNode(4)
    root.right = node1

    deleteNode(root, 2)
    expect(root.value).toBe(4)
  })

  test('deleteNode#2.2有右子树无左子树-非根结点', () => {
    //    2
    //  /   \
    // 1     4
    //        \
    //         5
    insert(root, 5)
    deleteNode(root, 4)
    expect(root.right.value).toBe(5)
    expect(root.right.right).toBe(null)
  })

  test('deleteNode3左右子树不为空-根结点', () => {
    //        2
    //      /   \
    //      1    4
    //     /  \
    //    0  1.5
    insert(root, 0)
    insert(root, 1.5)
    deleteNode(root, 2)
    expect(root.value).toBe(1.5)
    expect(root.left.value).toBe(1)
    expect(root.left.right).toBe(null)

    expect(root.right.value).toBe(4)
  })

  test('deleteNode3左右子树不为空-非根结点', () => {
    //        2
    //      /   \
    //      1    4
    //     /  \
    //    0  1.5
    insert(root, 0)
    insert(root, 1.5)
    deleteNode(root, 1)

    expect(root.left.value).toBe(0)
    expect(root.left.left).toBe(null)
    expect(root.left.right.value).toBe(1.5)
  })

  test('preorder', () => {
    const arr = []
    preorder(root, val => arr.push(val))
    expect(arr).toEqual([2, 1, 4])
  })

  test('inorder', () => {
    const arr = []
    inorder(root, val => arr.push(val))
    expect(arr).toEqual([1, 2, 4])
  })

  test('postorder', () => {
    const arr = []
    postorder(root, val => arr.push(val))
    expect(arr).toEqual([1, 4, 2])
  })
})
