import {
  SLNode,
  insertAfter,
  deleteNextNode,
  deleteNode,
  deleteNodeByHead,
  searchNode,
  traverse,
  reverseTraversal
} from '@/algorithm/data-structure/linked-list.js'

describe('data-structure.linked-list', () => {
  let head = new SLNode()
  let node1
  let node2
  let node3

  beforeEach(() => {
    node1 = new SLNode(1)
    node2 = new SLNode(2)
    node3 = new SLNode(3)

    node1.next = node2
    node2.next = node3
    head.next = node1
  })

  test('insertAfter', () => {
    const node4 = new SLNode(4)
    insertAfter(node3, node4)
    expect(node3.next).toBe(node4)
  })

  test('deleteNextNode', () => {
    expect(node2.next).toBe(node3)
    deleteNextNode(node2)
    expect(node2.next).toBe(null)
  })

  test('deleteNode', () => {
    expect(node1.next).toBe(node2)
    deleteNode(node2)
    expect(node1.next).toEqual(node3)
  })

  test('deleteNodeByHead', () => {
    expect(node1.next).toBe(node2)
    deleteNodeByHead(head, 2)
    expect(node1.next).toBe(node3)
  })

  test('searchNode', () => {
    expect(searchNode(head, 2)).toBe(node2)
  })

  test('traverse', () => {
    expect([...traverse(node1)]).toEqual([1, 2, 3])
  })

  test('reverseTraversal', () => {
    expect([...reverseTraversal(node1)]).toEqual([3, 2, 1])
  })
})
