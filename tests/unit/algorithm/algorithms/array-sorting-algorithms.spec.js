import {
  bubbleSort,
  selectSort,
  insertSort,
  shellSort,
  mergeSortRecursion,
  mergeSortIteration,
  quickSort,
  heapSort,
  countSort,
  bucketSort,
  radixSort,
} from '@/algorithm/algorithms/array-sorting-algorithms'
import { generateRandomIntArray } from '@/utils/array'
import { getRandomInt } from '@/utils/number'

let emptyArr
let randomArr
let ascendArr
let ascendArrCp
let descendArr
let descendArrCp

beforeEach(() => {
  emptyArr = []
  randomArr = generateRandomIntArray(getRandomInt(10, 20), 0, 1000)
  ascendArr = randomArr.slice().sort((a, b) => a - b)
  ascendArrCp = ascendArr.slice()
  descendArr = randomArr.slice().sort((a, b) => b - a)
  descendArrCp = descendArr.slice()
})

describe('冒泡排序', () => {
  it('空数组', () => {
    bubbleSort(emptyArr)
    expect(emptyArr).toEqual([])
  })

  it('乱序->升序', () => {
    bubbleSort(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    bubbleSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    bubbleSort(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
})

describe('选择排序', () => {
  it('空数组', () => {
    selectSort(emptyArr)
    expect(emptyArr).toEqual([])
  })

  it('乱序->升序', () => {
    selectSort(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    selectSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    selectSort(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
})

describe('插入排序', () => {
  it('空数组', () => {
    insertSort(emptyArr)
    expect(emptyArr).toEqual([])
  })

  it('乱序->升序', () => {
    insertSort(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    insertSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    insertSort(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
})

describe('希尔排序', () => {
  it('空数组', () => {
    shellSort(emptyArr)
    expect(emptyArr).toEqual([])
  })

  it('乱序->升序', () => {
    shellSort(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    shellSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    shellSort(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
})

describe('归并排序-递归版本', () => {
  it('空数组', () => {
    mergeSortRecursion(emptyArr)
    expect(emptyArr).toEqual([])
  })

  it('乱序->升序', () => {
    mergeSortRecursion(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    mergeSortRecursion(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    mergeSortRecursion(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
})

describe('归并排序-循环迭代版本', () => {
  it('空数组', () => {
    mergeSortIteration(emptyArr)
    expect(emptyArr).toEqual([])
  })

  it('乱序->升序', () => {
    mergeSortIteration(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    mergeSortIteration(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    mergeSortIteration(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
})

describe('快速排序', () => {
  it('空数组', () => {
    quickSort(emptyArr)
    expect(emptyArr).toEqual([])
  })

  it('乱序->升序', () => {
    quickSort(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    quickSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    quickSort(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
})

describe('堆排序', () => {
  it('空数组', () => {
    heapSort(emptyArr)
    expect(emptyArr).toEqual([])
  })

  it('乱序->升序', () => {
    heapSort(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    heapSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    heapSort(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
})

describe('计数排序', () => {
  it('空数组', () => {
    countSort(emptyArr)
    expect(emptyArr).toEqual([])
  })

  it('乱序->升序', () => {
    countSort(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    countSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    countSort(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
})

describe('桶排序', () => {
  it('空数组', () => {
    const arr = bucketSort(emptyArr)
    expect(arr).toEqual([])
  })

  it('乱序->升序', () => {
    const arr = bucketSort(randomArr)
    expect(arr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    const arr = bucketSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
    expect(arr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    const arr = bucketSort(descendArr)
    expect(descendArr).toEqual(descendArrCp)
    expect(arr).toEqual(ascendArr)
  })
})

describe('基数排序', () => {
  it('空数组', () => {
    const arr = radixSort(emptyArr)
    expect(arr).toEqual([])
  })

  it('乱序->升序', () => {
    const arr = radixSort(randomArr)
    expect(arr).toEqual(ascendArr)
  })

  it('升序->升序', () => {
    const arr = radixSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
    expect(arr).toEqual(ascendArrCp)
  })

  it('降序->升序', () => {
    const arr = radixSort(descendArr)
    expect(descendArr).toEqual(descendArrCp)
    expect(arr).toEqual(ascendArr)
  })
})
