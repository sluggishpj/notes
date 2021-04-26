/**
 * 判断是否2的幂
 * @param {number} number
 * @returns boolean
 */
export function isPowerOfTwo(number) {
  if (number < 1) {
    return false
  }
  while (Number.isInteger(number) && number !== 1) {
    number /= 2
  }

  return number === 1
}
