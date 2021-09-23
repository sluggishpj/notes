import { swapArray } from '../../utils/array'

// #region bubbleSort
/**
 * 冒泡排序
 * @param {Array} arr
 */
export function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapArray(arr, j, j + 1)
      }
    }
  }
}
// #endregion bubbleSort

// #region selectSort
// 找到数组中最小项的下标
function findMinIdx(array, begin, end) {
  let targetIdx = begin
  for (let i = begin + 1; i <= end; i++) {
    if (array[i] < array[targetIdx]) {
      targetIdx = i
    }
  }
  return targetIdx
}

/**
 * 选择排序
 * @param {Array} arr
 */
export function selectSort(arr) {
  const end = arr.length - 1
  for (let i = 0; i < end; i++) {
    const minIdx = findMinIdx(arr, i, end)
    swapArray(arr, i, minIdx)
  }
}
// #endregion selectSort

// #region insertSort
/**
 * 插入排序
 * @param {Array} arr
 */
export function insertSort(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    // 要插入的是第i项
    for (let j = i; j > 0; j--) {
      // 在 0-i 中从后往前依次交换，直到合适的位置
      if (arr[j] < arr[j - 1]) {
        swapArray(arr, j, j - 1)
      } else {
        // 已经交换到合适位置了
        break
      }
    }
  }
}
// #endregion insertSort

// #region shellSort
/**
 * 通用插入排序
 * 将 arr[startIdx], arr[startIdx+k], arr[startIdx+2k]...arr[startIdx+nk] 这些项进行插入排序
 * 上方的插入排序 insertSort(arr) 就等同于 partialInsertSort(arr, 0, 1)
 * @param {Array} arr
 * @param {number} startIdx 开始位置
 * @param {number} k 步长
 */
function partialInsertSort(arr, startIdx, k) {
  const lastIdx = arr.length - 1
  for (let i = startIdx + k; i <= lastIdx; i += k) {
    for (let j = i; j > startIdx; j -= k) {
      // 从后往前交换直到合适位置
      if (arr[j] < arr[j - k]) {
        swapArray(arr, j, j - k)
      } else {
        break
      }
    }
  }
}

/**
 * 希尔排序
 * @param {Array} arr
 */
export function shellSort(arr) {
  const len = arr.length
  let step = len >> 1 // 最初步长为len/2，对步长取半直到步长达到1
  while (step >= 1) {
    for (let i = 0; i < step; i++) {
      partialInsertSort(arr, i, step)
    }
    step >>= 1 // 去半
  }
}

// #endregion shellSort

/**
 * 归并排序-递归实现
 * @param {Array} arr 源数组
 * @param {Array} targetArr
 */
export function mergeSortRecursion(arr) {
  // TODO
}
