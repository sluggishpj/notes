import { generateArray, initArray } from '@/utils/array'

// generateArray
describe('utils.array#generateArray', () => {
  it('1 维数组', () => {
    expect(generateArray(3, 'a')).toEqual(['a', 'a', 'a'])
  })

  it('2 维数组', () => {
    const twoArr = generateArray(2, 3, 'a')
    expect(twoArr).toEqual([
      ['a', 'a', 'a'],
      ['a', 'a', 'a'],
    ])
    twoArr[1][1] = 'b'
    expect(twoArr).toEqual([
      ['a', 'a', 'a'],
      ['a', 'b', 'a'],
    ])
  })

  it('3 维数组', () => {
    const threeArr = generateArray(2, 3, 4, 'a')
    expect(threeArr).toEqual([
      [
        ['a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a'],
      ],
      [
        ['a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a'],
      ],
    ])

    threeArr[1][1][1] = 'b'

    expect(threeArr).toEqual([
      [
        ['a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a'],
        ['a', 'a', 'a', 'a'],
      ],
      [
        ['a', 'a', 'a', 'a'],
        ['a', 'b', 'a', 'a'],
        ['a', 'a', 'a', 'a'],
      ],
    ])
  })
})

// initArray
describe('utils.array#initArray', () => {
  it('基本数据类型', () => {
    const arr = initArray(3, 'a')
    expect(arr).toEqual(['a', 'a', 'a'])

    const arr2 = initArray(3, [])
    arr2[0][0] = '00'
    expect(arr2[0][0]).toBe('00')
    // 引用的是同一个 空数组[]
    expect(arr2[1][0]).toBe('00')
  })

  it('函数', () => {
    const arr = initArray(3, () => [])
    arr[0][0] = '00'
    expect(arr[0][0]).toBe('00')
    // 因为是函数返回的新数组，故引用的是不是同一个 空数组[]
    expect(arr[1][0]).toBe(undefined)

    const arr2 = initArray(3, (v, i) => i)
    expect(arr2).toEqual([0, 1, 2])
  })
})
