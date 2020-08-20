import { Stack } from '@/algorithm/data-structure/stack'

describe('data-structure.stack', () => {
  test('push', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
  })

  test('pop', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    expect(stack.size()).toBe(1)
    expect(stack.pop()).toBe(1)
    expect(stack.size()).toBe(0)
  })

  test('top', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.top()).toBe(1)
    stack.push(2)
    expect(stack.top()).toBe(2)
    stack.pop()
    expect(stack.top()).toBe(1)
  })

  test('empty', () => {
    const stack = new Stack()
    expect(stack.empty()).toBe(true)
    stack.push(1)
    expect(stack.empty()).toBe(false)
    stack.pop()
    expect(stack.empty()).toBe(true)
  })

  test('size', () => {
    const stack = new Stack()
    expect(stack.size()).toBe(0)
    stack.push(1)
    expect(stack.size()).toBe(1)
    stack.push(2)
    expect(stack.size()).toBe(2)
    stack.pop()
    expect(stack.size()).toBe(1)
    stack.pop()
    expect(stack.size()).toBe(0)
  })
})
