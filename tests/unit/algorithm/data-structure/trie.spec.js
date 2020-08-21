import { TrieNode, insert, contains } from '@/algorithm/data-structure/trie'

describe('data-structure.doubly-linked-list', () => {
  test('insert', () => {
    let root = new TrieNode()
    insert(root, 'to')
    insert(root, 'tea')
    insert(root, 'ted')

    expect(root.children.size).toBe(1)
  })

  test('contains', () => {
    let root = new TrieNode()
    insert(root, 'to')
    insert(root, 'tea')
    insert(root, 'ted')

    expect(contains(root, 'to')).toBe(true)
    expect(contains(root, 'tea')).toBe(true)
    expect(contains(root, 'ted')).toBe(true)
    expect(contains(root, 'other')).toBe(false)
  })
})
