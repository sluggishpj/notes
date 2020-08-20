import {
  DLNode,
  insertAfter,
  deleteNextNode,
  deleteNode
} from '@/algorithm/data-structure/doubly-linked-list.js'

describe('data-structure.doubly-linked-list', () => {
  let head = new DLNode()
  let node1
  let node2
  let node3

  beforeEach(() => {
    node1 = new DLNode(1)
    node2 = new DLNode(2)
    node3 = new DLNode(3)
    head.next = node1

    node1.next = node2
    node2.prior = node1

    node2.next = node3
    node3.prior = node2
  })

  test('insertAfter', () => {
    const node4 = new DLNode(4)
    insertAfter(node3, node4)
    expect(node3.next.value).toBe(node4.value)
    expect(node4.prior.value).toBe(node3.value)
  })

  test('deleteNextNode', () => {
    expect(node1.next.value).toBe(node2.value)
    deleteNextNode(node1)
    expect(node1.next.value).toBe(node3.value)
  })

  test('deleteNode', () => {
    expect(node1.next.value).toBe(node2.value)
    deleteNode(node2)
    expect(node1.next.value).toEqual(node3.value)
  })
})
