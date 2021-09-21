import { bubbleSort } from '@/algorithm/algorithms/array-sorting-algorithms'

describe('冒泡排序', () => {
  let randomArr
  let ascendArr
  let ascendArrCp
  let descendArr
  let descendArrCp

  beforeEach(() => {
    randomArr = [2, 462, 45, 5, 234, 7, 73, 5, 5, 35, 7, 23, 578, 34, 53]
    ascendArr = [2, 5, 5, 5, 7, 7, 23, 34, 35, 45, 53, 73, 234, 462, 578]
    ascendArrCp = ascendArr.slice()
    descendArr = [578, 462, 234, 73, 53, 45, 35, 34, 23, 7, 7, 5, 5, 5, 2]
    descendArrCp = descendArr.slice()
  })

  it('乱序->升序', () => {
    bubbleSort(randomArr)
    expect(randomArr).toEqual(ascendArr)
  })

  it('乱序->降序', () => {
    bubbleSort(randomArr, false)
    expect(randomArr).toEqual(descendArr)
  })

  it('升序->升序', () => {
    bubbleSort(ascendArr)
    expect(ascendArr).toEqual(ascendArrCp)
  })

  it('升序->降序', () => {
    bubbleSort(ascendArr, false)
    expect(ascendArr).toEqual(descendArr)
  })
  it('降序->升序', () => {
    bubbleSort(descendArr)
    expect(descendArr).toEqual(ascendArr)
  })
  it('降序->降序', () => {
    bubbleSort(descendArr, false)
    expect(descendArr).toEqual(descendArrCp)
  })
})
