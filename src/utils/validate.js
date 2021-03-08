/**
 * 是否合法http[s]链接，兼容性问题：https://caniuse.com/?search=URL
 * @param {string} str
 * @returns {boolean}
 * @ref https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
 */
export function isValidHttpUrl(str) {
  let url

  try {
    url = new URL(str)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}
