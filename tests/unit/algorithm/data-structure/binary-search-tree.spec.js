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

  test('deleteNode', () => {
    // 删除结点1
    expect(root.left).toBe(node1)
    expect(deleteNode(root, 1)).toBe(true)
    expect(root.left).toBe(null)

    // 再插回来
    insert(root, 1)
    insert(root, 3)
    insert(root, 5)
    expect(root.left.value).toBe(1)

    //    2        删掉4后变成 2
    //  /   \                /  \
    // 1     4              1    3
    //      / \                   \
    //     3   5                   5
    expect(deleteNode(root, 4)).toBe(true)
    expect(root.right.value).toBe(3)
    expect(root.right.right.value).toBe(5)
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
