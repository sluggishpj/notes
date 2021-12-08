// 距上一次执行必须 超过 wait 毫秒后才会再执行
export function debounce(fn, wait = 0) {
  let lastTime = 0
  return function afterDebounce(...args) {
    if (Date.now() - lastTime < wait) {
      return
    }
    lastTime = Date.now()
    return fn.apply(this, args)
  }
}
