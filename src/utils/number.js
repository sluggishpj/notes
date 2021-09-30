/**
 * 返回 >= min 且 <= max的随机整数
 * @param {number} min 最小正数
 * @param {number} max 最大整数
 * @returns {number}
 */
export function getRandomInt(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return ~~(Math.random() * (max - min) + min)
}
