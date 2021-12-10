// #region debounce
/**
 * 距上一次 调用 超过 wait 毫秒后才会再执行
 * @param {Function} fn
 * @param {number} wait 等待ms
 * @param {boolean} leading 首次调用是否立即执行
 * @returns
 */
export function debounce(fn, wait = 0, leading = false) {
  let timer = null

  return function afterDebounce(...args) {
    if (!timer && leading) {
      // 首次调用 & 需要立即执行
      fn.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, wait)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, wait)
    }
  }
}
// #endregion debounce

// #region throttle
/**
 * 一直调用，最多每隔 wait ms 执行1次
 * @param {Function} fn
 * @param {number} wait 调用间隔ms
 * @param {boolean} leading 首次调用是否立即执行
 * @returns
 */
export function throttle(fn, wait = 0, leading = true) {
  let timer
  const argsArr = [] // 记录最近1次待执行的参数

  return function afterThrottle(...args) {
    argsArr[0] = args

    if (!timer) {
      if (leading) {
        // 首次立即执行
        fn.apply(this, argsArr.pop())
      }

      timer = setTimeout(() => {
        timer = null
        if (argsArr.length) {
          fn.apply(this, argsArr.pop())
        }
      }, wait)
    }
  }
}
// #endregion throttle

// #region cloneDeep
// 深复制
export function cloneDeep(target, map = new Map()) {
  // 思路：
  // 1. 基本数据类型，直接返回自身【判断时注意 null】
  // 2. 引用类型，判断是数组还是对象，对其包含的属性（不包括原型）进行 深复制
  // 进阶: 1. 如何处理环形引用，搞个map存下
  //       2. 考虑下其他对象？如 Date, Regexp, Map, Set
  if (typeof target !== 'object' || target === null) {
    return target
  }

  const res = Array.isArray(target) ? [] : {}

  if (map.has(target)) {
    return map.get(target)
  }
  map.set(target, res) // 注意位置啊，在循环内可能已经引用到target了，所以要放前面

  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      res[key] = cloneDeep(target[key], map)
    }
  }

  return res
}
// #endregion cloneDeep

// #region EventEmitter
// 事件总线，简单实现 on,off,emit,once
export class EventEmitter {
  constructor() {
    this.events = {}
  }

  on(name, fn) {
    const { events } = this
    if (!events[name]) {
      events[name] = []
    }

    events[name].push(fn)
  }

  off(name, fn) {
    const { events } = this
    if (!events[name]) {
      return
    }

    const listeners = events[name]
    const targetIdx = listeners.indexOf(fn)
    if (targetIdx !== -1) {
      listeners.splice(targetIdx, 1)
    }
  }

  once(name, fn) {
    const wrapper = (...args) => {
      this.off(name, wrapper)
      fn.apply(this, args)
    }

    this.on(name, wrapper)
  }

  emit(name, ...args) {
    const { events } = this
    // INFO: 在执行的过程中，对于once执行完就删了，导致可能会错位，故需要浅复制一份
    const listeners = (events[name] || []).slice()
    listeners.forEach((fn) => fn.apply(this, args))
  }
}
// #endregion EventEmitter
