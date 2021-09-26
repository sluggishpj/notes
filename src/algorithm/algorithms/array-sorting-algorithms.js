// 结合 https://leetcode-cn.com/problems/sort-an-array/submissions/
import { swapArray, shuffleArray } from '../../utils/array'

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

// #region mergeOrderArr
/**
 * 合并数组中 有序的2部分到 目标数组中对应的位置
 * @param {Array} origin 有2部分有序的数组，其中 leftEnd+1===rightStart
 * @param {Array} targetArr 将上面2部分有序的数组合并到 targetArr 对应的位置
 * @param {number} leftStart 左有序数组开始位置
 * @param {number} leftEnd 左有序数组结束位置
 * @param {number} rightStart 右有序数组开始位置
 * @param {number} rightEnd 右有序数组结束位置
 */
function mergeOrderArr(origin, targetArr, leftStart, leftEnd, rightStart, rightEnd) {
  if (leftStart >= rightEnd) {
    return
  }
  let idx = leftStart
  while (leftStart <= leftEnd && rightStart <= rightEnd) {
    if (origin[leftStart] < origin[rightStart]) {
      targetArr[idx] = origin[leftStart]
      leftStart++
    } else {
      targetArr[idx] = origin[rightStart]
      rightStart++
    }
    idx++
  }
  while (leftStart <= leftEnd) {
    targetArr[idx++] = origin[leftStart++]
  }
  while (rightStart <= rightEnd) {
    targetArr[idx++] = origin[rightStart++]
  }
}
// #endregion mergeOrderArr

// #region mergeSortRecursion
/**
 * 归并排序-递归实现
 * 将 targetArr [left,...right] 部分进行归并排序，结果写入到 origin 中
 * @param {Array} origin 源数组
 * @param {Array} targetArr 原数组的复制版本
 * @param {number} left 开始位置
 * @param {number} right 结束位置
 */
export function mergeSortRecursion(origin, targetArr = origin.slice(), left = 0, right = origin.length - 1) {
  if (left >= right) {
    return
  }

  const mid = (left + right) >> 1
  mergeSortRecursion(targetArr, origin, left, mid)
  mergeSortRecursion(targetArr, origin, mid + 1, right)
  mergeOrderArr(targetArr, origin, left, mid, mid + 1, right)
}
// #endregion mergeSortRecursion

// #region mergeSortIteration
/**
 * 归并排序-循环实现
 * @param {Array} origin
 */
export function mergeSortIteration(origin) {
  // 思路：先两两合并，再4 4合并 直到一半一半合并
  if (origin.length <= 1) return

  let step = 1 // 合并的2个数组中每个数组的长度
  const len = origin.length
  const lastIdx = len - 1
  const midLen = Math.ceil(len / 2)
  let cpArr = origin.slice()

  // 计算需要合并几轮，也就是有多少个不同的 step
  let stepCount = 1

  while (step < midLen) {
    step *= 2
    stepCount++
  }
  step = 1

  if (stepCount % 2 === 1) {
    // 奇数轮，则首轮需要 将 cpArr 合并 到 origin 中
    // 因为每轮循环开始前会先交换，所以需要提前交换一次，保证奇数轮时首轮合并入的是 origin
    ;[origin, cpArr] = [cpArr, origin]
  }

  for (let cnt = 0; cnt < stepCount; cnt++) {
    ;[origin, cpArr] = [cpArr, origin] // 每轮交互2个数组，避免来回复制，就是有点费解
    for (let i = 0; i < len; i += 2 * step) {
      const leftEnd = Math.min(i + step - 1, lastIdx)
      const rightStart = leftEnd + 1
      const rightEnd = Math.min(rightStart + step - 1, lastIdx)
      mergeOrderArr(cpArr, origin, i, leftEnd, rightStart, rightEnd)
    }

    step *= 2
  }
}
// #endregion mergeSortIteration

// #region quickSort
/**
 * 返回第lo个元素pivot在 arr[lo,...hi] 中排序后的位置
 * 并且插入对应位置，且 数组前部分 <= pivot <= 数组后部分
 * @param {Array} arr
 * @param {number} lo 左下标
 * @param {number} hi 右下标
 * @returns {number}
 */
function partition(arr, lo, hi) {
  const pivot = arr[lo]

  let i = lo + 1
  let j = hi

  while (i <= j && j <= hi) {
    while (i <= j && arr[i] <= pivot) {
      i++
    }

    while (j >= i && arr[j] >= pivot) {
      j--
    }

    if (i <= j) {
      swapArray(arr, i, j)
      i++
      j--
    }
  }

  swapArray(arr, lo, j)
  return j
}

/**
 * 快速排序-实际操作函数
 * @param {Array} arr
 */
function quickSortMain(arr, lo = 0, hi = arr.length - 1) {
  if (lo >= hi) {
    return
  }

  const pos = partition(arr, lo, hi)
  quickSortMain(arr, lo, pos - 1)
  quickSortMain(arr, pos + 1, hi)
}

/**
 * 快速排序
 * @param {Array} arr
 */
export function quickSort(arr) {
  shuffleArray(arr) // 先打乱数组，避免有序数组导致复杂度O(N^2)
  quickSortMain(arr)
}
// #endregion quickSort

// #region heapSort
/**
 * 将下标为i的元素下沉，调整成大顶堆
 * @param {Array} arr
 * @param {number} i 要下沉的元素下标
 * @param {number} len 堆大小
 * @returns
 */
function sink(arr, i, len) {
  const leftChildIdx = i * 2 + 1
  const rightChildIdx = leftChildIdx + 1

  if (leftChildIdx >= len) {
    return
  }

  let maxChildIdx = leftChildIdx

  if (rightChildIdx < len && arr[rightChildIdx] > arr[leftChildIdx]) {
    maxChildIdx = rightChildIdx
  }

  if (arr[maxChildIdx] > arr[i]) {
    swapArray(arr, i, maxChildIdx) // 把大的换上来
    sink(arr, maxChildIdx, len) // 继续向下调整
  }
}

/**
 * 堆排序
 * 原理：
 * 1. 将数组原地构造为大顶堆
 * 2. 将堆顶和堆尾交换，缩小堆大小，再调整成堆。
 * 3. 不断重复操作2, 直到堆大小为1
 * @param {Array} arr
 */
export function heapSort(arr) {
  let len = arr.length
  if (len <= 1) return

  // step1. 将数组原地构造为大顶堆。先调整倒数第2层，再3层，不断向上调整直到第1个元素，就形成了大顶堆。
  let endParentIdx = (len >> 1) - 1 // 倒数第2层最右边的元素下标
  while (endParentIdx >= 0) {
    sink(arr, endParentIdx, len) // 逐层往上构造大顶堆
    endParentIdx--
  }

  // step2&3, 将堆顶和堆尾交互，缩小堆大小，再从上往下调整堆
  while (len >= 2) {
    --len
    swapArray(arr, 0, len)
    sink(arr, 0, len)
  }
}
// #endregion heapSort
