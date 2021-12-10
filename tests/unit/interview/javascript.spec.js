import { debounce, throttle, cloneDeep, EventEmitter } from '@/interview/javascript'

afterEach(() => {
  jest.useRealTimers()
})

describe('debounce', () => {
  let i = 0
  function test(cb) {
    cb?.()
    i++
    return i
  }

  beforeEach(() => {
    jest.useFakeTimers()
    i = 0
  })

  it('首次不立即执行', () => {
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

  it('首次立即执行', () => {
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
  let i = 0
  function test(cb) {
    cb?.()
    i++
    return i
  }

  beforeEach(() => {
    jest.useFakeTimers()
    i = 0
  })

  it('首次立即执行', () => {
    const callback = jest.fn()
    const throttleTest = throttle(test, 200)
    throttleTest(callback) // 首个立即执行
    expect(callback).toHaveBeenCalledTimes(1)
    expect(i).toBe(1)

    jest.advanceTimersByTime(201) // 超过时间也不会再执行首个
    expect(callback).toHaveBeenCalledTimes(1)
    expect(i).toBe(1)

    // 间隔内多次只执行到时间后只执行最后1次
    const callback2 = jest.fn()
    const callback3 = jest.fn()
    const callback4 = jest.fn()
    throttleTest(callback2)
    throttleTest(callback3)
    jest.advanceTimersByTime(150)
    throttleTest(callback4)

    expect(callback2).toHaveBeenCalledTimes(1)
    expect(callback3).not.toBeCalled()
    expect(callback4).not.toBeCalled()
    expect(i).toBe(2)

    jest.advanceTimersByTime(50)
    expect(callback4).toHaveBeenCalledTimes(1)
    expect(i).toBe(3)
  })

  it('首次不立即执行', () => {
    const callback = jest.fn()
    const throttleTest = throttle(test, 200, false)
    throttleTest(callback) // 首次不立即执行
    expect(callback).not.toBeCalled()
    expect(i).toBe(0)

    jest.advanceTimersByTime(201) // 执行最后1个未执行的
    expect(callback).toHaveBeenCalledTimes(1)

    // 间隔时间一到，只执行最后1个未执行的
    const callback1 = jest.fn()
    const callback2 = jest.fn()
    const callback3 = jest.fn()
    throttleTest(callback1)
    throttleTest(callback2)
    jest.advanceTimersByTime(150)
    throttleTest(callback3)

    expect(i).toBe(1)
    jest.advanceTimersByTime(50) // 执行最后1个未执行的
    expect(callback1).not.toBeCalled()
    expect(callback2).not.toBeCalled()
    expect(callback3).toHaveBeenCalledTimes(1)
    expect(i).toBe(2)
  })
})

describe('cloneDeep', () => {
  const a = 'str'
  const b = !!(Math.random() > 0.5)
  const c = Symbol('sym')
  const d = 0
  const e = undefined
  const f = null
  const g = () => {}

  it('基本数据类型', () => {
    expect(cloneDeep(a)).toBe(a)
    expect(cloneDeep(b)).toBe(b)
    expect(cloneDeep(c)).toBe(c)
    expect(cloneDeep(d)).toBe(d)
    expect(cloneDeep(e)).toBe(e)
    expect(cloneDeep(f)).toBe(f)
    expect(cloneDeep(g)).toBe(g)
  })

  it('复杂数据类型-不包含循环引用', () => {
    const obj = {
      a,
      childObj: {
        b,
        childrenObj: {
          c,
        },
        childrenArr: [a, b],
      },
      childArr: [a, b, { c, d, childrenArr: [e, f] }],
    }

    const cp = cloneDeep(obj)

    expect(cp.a).toBe(obj.a)

    // childObj
    expect(cp.childObj).not.toBe(obj.childObj)
    expect(cp.childObj.b).toBe(obj.childObj.b)

    expect(cp.childObj.childrenObj).not.toBe(obj.childObj.childrenObj)
    expect(cp.childObj.childrenObj.c).toBe(obj.childObj.childrenObj.c)

    expect(cp.childObj.childrenArr).not.toBe(obj.childObj.childrenArr)
    expect(cp.childObj.childrenArr[0]).toBe(obj.childObj.childrenArr[0])
    expect(cp.childObj.childrenArr[1]).toBe(obj.childObj.childrenArr[1])

    // childArr
    expect(cp.childArr).not.toBe(obj.childArr)
    expect(cp.childArr[0]).toBe(obj.childArr[0])
    expect(cp.childArr[1]).toBe(obj.childArr[1])

    expect(cp.childArr[2]).not.toBe(obj.childArr[2])
    expect(cp.childArr[2].c).toBe(obj.childArr[2].c)
    expect(cp.childArr[2].d).toBe(obj.childArr[2].d)

    expect(cp.childArr[2].childrenArr).not.toBe(obj.childArr[2].childrenArr)
    expect(cp.childArr[2].childrenArr[0]).toBe(obj.childArr[2].childrenArr[0])
    expect(cp.childArr[2].childrenArr[1]).toBe(obj.childArr[2].childrenArr[1])
  })

  it('包含循环引用', () => {
    let parent = { name: 'parent' }
    let child = { name: 'child' }
    parent.child = child
    child.parent = parent

    const newParent = cloneDeep(parent)

    expect(newParent).not.toBe(parent)
    expect(newParent.name).toBe(parent.name)
    expect(newParent.child).not.toBe(parent.child)
    expect(newParent.child.name).toBe(parent.child.name)
    expect(newParent.child.parent).toBe(newParent)
  })
})

describe('EventEmitter', () => {
  function a() {}
  function b1() {}
  function b2() {}

  it('on', () => {
    const ev = new EventEmitter()
    ev.on('a', a)
    ev.on('b', b1)
    ev.on('b', b2)
    expect(ev.events).toEqual({ a: [a], b: [b1, b2] })
  })

  it('off', () => {
    const ev = new EventEmitter()
    ev.on('a', a)
    ev.on('b', b1)
    ev.on('b', b2)

    ev.off('a', a)
    expect(ev.events).toEqual({ a: [], b: [b1, b2] })
    ev.off('b', b1)
    expect(ev.events).toEqual({ a: [], b: [b2] })
    ev.off('b', b2)
    expect(ev.events).toEqual({ a: [], b: [] })
  })

  it('emit', () => {
    const ev = new EventEmitter()
    const a = jest.fn()
    const b1 = jest.fn()
    const b2 = jest.fn()

    ev.on('a', a)
    ev.on('b', b1)
    ev.on('b', b2)

    ev.emit('a')
    expect(a).toHaveBeenCalledTimes(1)
    ev.emit('a')
    expect(a).toHaveBeenCalledTimes(2)

    ev.emit('b')
    expect(b1).toHaveBeenCalledTimes(1)
    expect(b2).toHaveBeenCalledTimes(1)
    ev.emit('b')
    expect(b1).toHaveBeenCalledTimes(2)
    expect(b2).toHaveBeenCalledTimes(2)

    ev.off('b', b1)
    ev.emit('b')
    expect(b1).toHaveBeenCalledTimes(2)
    expect(b2).toHaveBeenCalledTimes(3)
  })

  it('once', () => {
    const ev = new EventEmitter()
    const a = jest.fn()
    let b1 = jest.fn()
    let b2 = jest.fn()

    ev.once('a', a)
    ev.emit('a')
    expect(a).toHaveBeenCalledTimes(1)
    expect(ev.events.a).toEqual([])

    ev.emit('a')
    expect(a).toHaveBeenCalledTimes(1)

    ev.once('b', b1)
    ev.once('b', b2)
    ev.emit('b')
    expect(b1).toHaveBeenCalledTimes(1)
    expect(b2).toHaveBeenCalledTimes(1)
    expect(ev.events.b).toEqual([])

    ev.emit('b')
    expect(b1).toHaveBeenCalledTimes(1)
    expect(b2).toHaveBeenCalledTimes(1)

    b1 = jest.fn()
    b2 = jest.fn()
    ev.on('b', b1)
    ev.once('b', b2)

    ev.emit('b')
    expect(b1).toHaveBeenCalledTimes(1)
    expect(b2).toHaveBeenCalledTimes(1)

    ev.emit('b')
    expect(b1).toHaveBeenCalledTimes(2)
    expect(b2).toHaveBeenCalledTimes(1)
  })
})
