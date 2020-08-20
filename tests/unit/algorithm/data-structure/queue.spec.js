import { FULL, EMPTY } from '@/algorithm/constants/index'

import { Queue } from '@/algorithm/data-structure/queue'

describe('data-structure.queue', () => {
  test('enqueue', () => {
    const queue = new Queue(3)
    queue.enqueue(1)
    expect(queue.front).toBe(0)
    expect(queue.back).toBe(1)
  })

  test('dequeue', () => {
    const queue = new Queue(3)
    queue.enqueue(1)
    expect(queue.dequeue()).toBe(1)
    expect(queue.front).toBe(1)
    expect(queue.back).toBe(1)

    expect(queue.dequeue()).toBe(EMPTY)
  })

  test('isEmpty', () => {
    const queue = new Queue(3)
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue(1)
    expect(queue.isEmpty()).toBe(false)
    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
  })

  test('isFull', () => {
    const queue = new Queue(3)
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.isFull()).toBe(false)
    queue.enqueue(3)
    expect(queue.isFull()).toBe(true)
  })
})
