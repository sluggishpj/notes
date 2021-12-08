import { advanceBy, clear } from 'jest-date-mock'
import { debounce } from '@/interview/javascript'

describe('debounce', () => {
  it('规定时间内多次调用，只执行第1次', () => {
    let i = 0
    function test() {
      i++
      return i
    }

    const debounceTest = debounce(test, 200)

    expect(debounceTest()).toBe(1)
    expect(debounceTest()).toBe(undefined)
    expect(debounceTest()).toBe(undefined)
    expect(debounceTest()).toBe(undefined)
    expect(i).toBe(1)
  })

  it('规定时间外多次调用，可以正常调用', () => {
    let i = 0
    function test() {
      i++
      return i
    }

    const debounceTest = debounce(test, 200)

    expect(debounceTest()).toBe(1)

    expect(debounceTest()).toBe(undefined)
    expect(debounceTest()).toBe(undefined)
    expect(i).toBe(1)

    advanceBy(200)
    expect(debounceTest()).toBe(2)
    expect(debounceTest()).toBe(undefined)
    expect(i).toBe(2)

    clear()
  })
})
