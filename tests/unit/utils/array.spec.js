import { generateArray } from '@/utils/array'

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
