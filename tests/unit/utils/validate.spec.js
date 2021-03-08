import { isValidHttpUrl } from '@/utils/validate'

// isValidHttpUrl
describe('utils.array#isValidHttpUrl', () => {
  it('isValidHttpUrl', () => {
    expect(isValidHttpUrl('www.example.com')).toBe(false)
    expect(isValidHttpUrl('javascript:void(0)')).toBe(false)
    expect(isValidHttpUrl('http://..')).toBe(true)
    expect(isValidHttpUrl('https://example..com')).toBe(true)
    expect(isValidHttpUrl('http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&docid=nIv5rk2GyP3hXM&tbnid=isiOkMe3nCtexM:&ved=0CAUQjRw&url=http%3A%2F%2Fanimalcrossing.wikia.com%2Fwiki%2FLion&ei=ygZXU_2fGKbMsQTf4YLgAQ&bvm=bv.65177938,d.aWc&psig=AFQjCNEpBfKnal9kU7Zu4n7RnEt2nerN4g&ust=1398298682009707')).toBe(true)
  })
})
