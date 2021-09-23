import {
  bubbleSort, selectSort, insertSort, shellSort,
} from '@/algorithm/algorithms/array-sorting-algorithms'

describe('冒泡排序', () => {
  let randomArr
  let ascendArr
  let ascendArrCp
  let descendArr

  beforeEach(() => {
    randomArr = [2, 462, 45, 5, 234, 7, 73, 5, 5, 35, 7, 23, 578, 34, 53]
    ascendArr = [2, 5, 5, 5, 7, 7, 23, 34, 35, 45, 53, 73, 234, 462, 578]
    ascendArrCp = ascendArr.slice()
    descendArr = [578, 462, 234, 73, 53, 45, 35, 34, 23, 7, 7, 5, 5, 5, 2]
  })

  it('空数组', () => {
    const arr = []
    bubbleSort(arr)
    expect(arr).toEqual([])
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
  let randomArr
  let ascendArr
  let ascendArrCp
  let descendArr

  beforeEach(() => {
    randomArr = [2, 462, 45, 5, 234, 7, 73, 5, 5, 35, 7, 23, 578, 34, 53]
    ascendArr = [2, 5, 5, 5, 7, 7, 23, 34, 35, 45, 53, 73, 234, 462, 578]
    ascendArrCp = ascendArr.slice()
    descendArr = [578, 462, 234, 73, 53, 45, 35, 34, 23, 7, 7, 5, 5, 5, 2]
  })

  it('空数组', () => {
    const arr = []
    selectSort(arr)
    expect(arr).toEqual([])
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
  let randomArr
  let ascendArr
  let ascendArrCp
  let descendArr

  beforeEach(() => {
    randomArr = [2, 462, 45, 5, 234, 7, 73, 5, 5, 35, 7, 23, 578, 34, 53]
    ascendArr = [2, 5, 5, 5, 7, 7, 23, 34, 35, 45, 53, 73, 234, 462, 578]
    ascendArrCp = ascendArr.slice()
    descendArr = [578, 462, 234, 73, 53, 45, 35, 34, 23, 7, 7, 5, 5, 5, 2]
  })

  it('空数组', () => {
    const arr = []
    insertSort(arr)
    expect(arr).toEqual([])
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
  let randomArr
  let ascendArr
  let ascendArrCp
  let descendArr

  beforeEach(() => {
    randomArr = [2, 462, 45, 5, 234, 7, 73, 5, 5, 35, 7, 23, 578, 34, 53]
    ascendArr = [2, 5, 5, 5, 7, 7, 23, 34, 35, 45, 53, 73, 234, 462, 578]
    ascendArrCp = ascendArr.slice()
    descendArr = [578, 462, 234, 73, 53, 45, 35, 34, 23, 7, 7, 5, 5, 5, 2]
  })

  it('空数组', () => {
    const arr = []
    shellSort(arr)
    expect(arr).toEqual([])
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
