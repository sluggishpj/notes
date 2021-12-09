import { advanceBy, clear } from 'jest-date-mock'
import { debounce, throttle } from '@/interview/javascript'

afterEach(() => {
  clear()
  jest.useRealTimers()
})

describe('debounce', () => {
  it('首次不执行', () => {
    jest.useFakeTimers()
    let i = 0
    function test(cb) {
      cb?.()
      i++
      return i
    }

    const callback1 = jest.fn()

    const debounceTest = debounce(test, 200)
    debounceTest(callback1) // 首次不执行
    expect(callback1).not.toBeCalled()
    expect(i).toBe(0)

    const callback2 = jest.fn()
    jest.advanceTimersByTime(150)
    debounceTest(callback2) // 间隔内也不执行
    expect(callback1).not.toBeCalled()
    expect(callback2).not.toBeCalled()
    expect(i).toBe(0)

    jest.advanceTimersByTime(200) // 又过了200ms了，执行最近的一次执行
    expect(callback1).not.toBeCalled()
    expect(callback2).toHaveBeenCalledTimes(1)
    expect(i).toBe(1)

    const callback3 = jest.fn()
    debounceTest(callback3)
    jest.advanceTimersByTime(200)
    expect(callback1).not.toBeCalled()
    expect(callback2).toHaveBeenCalledTimes(1)
    expect(callback3).toHaveBeenCalledTimes(1)
    expect(i).toBe(2)
  })

  it('首次执行', () => {
    jest.useFakeTimers()
    let i = 0
    function test(cb) {
      cb?.()
      i++
      return i
    }

    const callback1 = jest.fn()

    const debounceTest = debounce(test, 200, true)
    debounceTest(callback1) // 首次执行
    expect(callback1).toHaveBeenCalledTimes(1)
    expect(i).toBe(1)

    const callback2 = jest.fn()
    jest.advanceTimersByTime(150)
    debounceTest(callback2) // 间隔内不执行
    expect(callback1).toHaveBeenCalledTimes(1)
    expect(callback2).not.toBeCalled()
    expect(i).toBe(1)

    jest.advanceTimersByTime(200) // 又过了200ms了，执行最近的一次执行
    expect(callback1).toHaveBeenCalledTimes(1)
    expect(callback2).toHaveBeenCalledTimes(1)
    expect(i).toBe(2)

    const callback3 = jest.fn()
    const callback4 = jest.fn()
    debounceTest(callback3) // 立即执行
    debounceTest(callback4) // 间隔内不执行
    expect(callback3).toHaveBeenCalledTimes(1)
    expect(i).toBe(3)

    jest.advanceTimersByTime(200) // 又过了200ms了，执行最近的一次执行
    expect(callback4).toHaveBeenCalledTimes(1)
    expect(i).toBe(4)
  })
})

describe('throttle', () => {
  it('首次执行+多个时末尾也执行', () => {
    jest.useFakeTimers()

    let i = 0
    function test(cb) {
      cb?.()
      i++
      return i
    }

    const callback = jest.fn()
    const throttleTest = throttle(test, 200)
    expect(throttleTest(callback)).toBe(1) // 首个执行
    expect(callback).toHaveBeenCalledTimes(1)

    // 间隔内多次只执行到时间后只执行最后1次
    const callback2 = jest.fn()
    const callback3 = jest.fn()
    expect(throttleTest(callback2)).toBe(undefined)
    expect(throttleTest(callback3)).toBe(undefined)
    expect(callback2).toHaveBeenCalledTimes(0)
    expect(callback3).toHaveBeenCalledTimes(0)
    expect(i).toBe(1)

    jest.advanceTimersByTime(200)
    expect(callback3).toHaveBeenCalledTimes(1)
    expect(i).toBe(2)
  })
})
