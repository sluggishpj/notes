import { swapArray } from '../../utils/array'

// #region bubbleSort
/**
 * 冒泡排序
 * @param {Array} arr
 * @param {boolean} isAscend 是否升序
 */
export function bubbleSort(arr, isAscend = true) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (isAscend) {
        // 升序
        if (arr[j] > arr[j + 1]) {
          swapArray(arr, j, j + 1)
        }
      } else if (arr[j] < arr[j + 1]) {
        // 降序
        swapArray(arr, j, j + 1)
      }
    }
  }
}

// #endregion bubbleSort
