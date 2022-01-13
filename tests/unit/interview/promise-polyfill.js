const Promise = require('../../../src/interview/promise-polyfill.js')

const resolved = (value) => new Promise((resolve) => resolve(value))
const rejected = (reason) => new Promise((_, reject) => reject(reason))

const deferred = () => {
  let resolve
  let reject
  const promise = new Promise(($resolve, $reject) => {
    resolve = $resolve
    reject = $reject
  })
  return { promise, resolve, reject }
}

module.exports = { resolved, rejected, deferred }
