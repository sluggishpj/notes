// https://github.com/trekhleb/javascript-algorithms/blob/master/src/utils/comparator/Comparator.js

export default class Comparator {
  /**
   * @param {function(a:*, b:*)} compareFunction 比较函数
   * 函数的返回结果 为0则a===b，小于0则a<b，大于0则a>b
   */
  constructor(compareFunction) {
    // 没有的话就使用默认的比较函数
    this.compare = compareFunction || Comparator.defaultCompareFunction
  }

  // 默认的比较函数
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0
    }
    return a < b ? -1 : 1
  }

  /**
   * 是否 a === b
   * @param {*} a
   * @param {*} b
   */
  equal(a, b) {
    return this.compare(a, b) === 0
  }

  /**
   * 是否 a < b
   * @param {*} a
   * @param {*} b
   */
  lessThan(a, b) {
    return this.compare(a, b) < 0
  }

  /**
   * 是否 a > b
   * @param {*} a
   * @param {*} b
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0
  }

  /**
   * 是否 a <= b
   * @param {*} a
   * @param {*} b
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  /**
   * 是否 a >= b
   * @param {*} a
   * @param {*} b
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b)
  }

  /**
   * Reverses the comparison order.
   */
  reverse() {
    const compareOriginal = this.compare
    this.compare = (a, b) => compareOriginal(b, a)
  }
}
