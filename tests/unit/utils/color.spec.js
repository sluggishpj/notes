import { rgbToHex, hexToRgb } from '@/utils/color'

// rgbToHex
describe('utils.array#rgbToHex', () => {
  it('rgbToHex', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000')
    expect(rgbToHex(40, 42, 54)).toBe('#282a36')
    expect(rgbToHex(0, 51, 255)).toBe('#0033ff')
  })
})

// hexToRgb
describe('utils.array#hexToRgb', () => {
  it('hexToRgb', () => {
    expect(hexToRgb('#000')).toEqual({ r: 0, g: 0, b: 0 })
    expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 })
    expect(hexToRgb('#282a36')).toEqual({ r: 40, g: 42, b: 54 })
    expect(hexToRgb('#0033ff')).toEqual({ r: 0, g: 51, b: 255 })
  })
})
