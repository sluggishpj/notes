import {
  bubbleSort,
  selectSort,
  insertSort,
  shellSort,
  mergeSortRecursion,
  mergeSortIteration,
  quickSort,
} from '@/algorithm/algorithms/array-sorting-algorithms'
import { generateRandomIntArray } from '@/utils/array'
import { getRandomInt } from '@/utils/number'

let emptyArr
let randomArr
let ascendArr
let ascendArrCp
let descendArr

beforeEach(() => {
  emptyArr = []
  randomArr = generateRandomIntArray(getRandomInt(10, 20), 0, 1000)
  ascendArr = randomArr.slice().sort((a, b) => a - b)
  ascendArrCp = ascendArr.slice()
  descendArr = randomArr.slice().sort((a, b) => b - a)
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
