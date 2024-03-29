import { getRandomInt } from './number'

// 根据参数动态生成数组，比如传入n,m, val，则生成n x m 数组，每一项的值为 val
// 传入i,j,k, val，则生成i x j x k 三维数组，每一项的值为 val
// 最后1个参数总是val
export const generateArray = function generateArray(...args) {
  const argsLen = args.length
  if (argsLen === 0 || argsLen === 1) {
    return
  }

  if (argsLen === 2) {
    const [m, value] = args
    return new Array(m).fill(value)
  }

  const [m, ...remainArgs] = args
  const res = new Array(m)
  for (let i = 0; i < m; i++) {
    res[i] = generateArray(...remainArgs)
  }
  return res
}

/**
 * 新建并初始化数组
 * @param {Number} length
 * @param {any} defaultVal 默认值，函数的话则 (v,i) => {}
 */
export function initArray(length, defaultVal) {
  if (typeof defaultVal === 'function') {
    return Array.from({ length }, defaultVal)
  }
  return Array(length).fill(defaultVal)
}

// 交换数组中的2个元素
export function swapArray(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * 返回 长度为 length 的随机整数数组
 * @param {number} length 数组长度
 * @param {number} min 最小整数
 * @param {number} max 最大整数
 * @returns {Array}
 */
export function generateRandomIntArray(length, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  const res = []
  for (let i = 0; i < length; i++) {
    res.push(getRandomInt(min, max))
  }
  return res
}

// 原地打乱数组
export function shuffleArray(arr) {
  const lastIdx = arr.length - 1
  if (lastIdx <= 0) {
    return
  }

  for (let i = 0; i <= lastIdx; i++) {
    const targetIdx = getRandomInt(0, lastIdx)
    swapArray(arr, i, targetIdx)
  }
}
