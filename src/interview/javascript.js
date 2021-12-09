/**
 * 距上一次 调用 超过 wait 毫秒后才会再执行
 * @param {Function} fn
 * @param {number} wait 等待ms
 * @param {boolean} leading 首次是否立即执行
 * @returns
 */
export function debounce(fn, wait = 0, leading = false) {
  let timer = null

  return function afterDebounce(...args) {
    if (!timer && leading) {
      // 无需等待，且需要立即执行
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

// 一直调用，最多每隔 wait ms 执行1次
export function throttle(fn, wait = 0, leading = true, trailing = true) {
  let lastTime = 0
  let lastTimer = null // 当 trailing 为true时，则最后1次需要调用

  return function afterThrottle(...args) {
    if (lastTime === 0) {
      // 说明是首次
      if (leading) {
        lastTime = Date.now()
        return fn.apply(this, args)
      }
    }

    if (trailing) {
      clearTimeout(lastTimer)
    }

    const timeGap = Date.now() - lastTime
    if (timeGap < wait) {
      // 还在时间间隔内
      if (trailing) {
        lastTimer = setTimeout(() => {
          fn.apply(this, args)
        }, wait - timeGap)
      }
      return
    }

    lastTime = Date.now()
    return fn.apply(this, args)
  }
}
