/* eslint-disable */
// REF: https://github.com/Lucifier129/promise-aplus-impl/blob/master/src/naive.js

// #region Promise
function isObject(o) {
  return !!(o && typeof o === 'object')
}

function isFunction(fn) {
  return typeof fn === 'function'
}

function isPromise(pro) {
  return pro instanceof Promise
}

function isThenable(pro) {
  return (isObject(pro) || isFunction(pro)) && 'then' in pro
}

// 3个状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

// promise 状态已确定，再调用 then 方法
function handleCallback(callback, state, result) {
  const { onFulfilled, onRejected, resolve, reject } = callback
  try {
    if (state === FULFILLED) {
      isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result)
    } else if (state === REJECTED) {
      isFunction(onRejected) ? resolve(onRejected(result)) : reject(result)
    }
  } catch (err) {
    reject(err)
  }
}

// promise Resolution Procedure 决议过程
function resolvePromise(promise, result, resolve, reject) {
  if (result === promise) {
    // 自身
    return reject(new TypeError('Can not fulfill promise with itself'))
  }

  if (isPromise(result)) {
    // 返回 Promise
    return result.then(resolve, reject)
  }

  if (isThenable(result)) {
    try {
      const { then } = result
      if (isFunction(then)) {
        return new Promise(then.bind(result)).then(resolve, reject)
      }
    } catch (err) {
      return reject(err)
    }
  }

  resolve(result)
}

// 更新状态和数据，同时执行 callbacks
function transition(pro, state, result) {
  if (pro.state !== PENDING) {
    return
  }
  pro.state = state
  pro.result = result
  const { callbacks } = pro

  setTimeout(() => {
    while (callbacks.length) {
      handleCallback(callbacks.shift(), state, result)
    }
  })
}

function Promise(executor) {
  this.state = PENDING
  this.result = undefined
  this.callbacks = []

  let ignore = false // 避免重复执行

  function resolve(res) {
    if (ignore) {
      return
    }
    ignore = true
    resolvePromise(
      this,
      res,
      (val) => {
        transition(this, FULFILLED, val)
      },
      (err) => {
        transition(this, REJECTED, err)
      }
    )
  }

  function reject(reason) {
    if (ignore) {
      return
    }
    ignore = true
    transition(this, REJECTED, reason)
  }

  try {
    executor(resolve.bind(this), reject.bind(this))
  } catch (err) {
    reject.call(this, err)
  }
}

// then 方法返回 Promise
Promise.prototype.then = function (onFulfilled, onRejected) {
  return new Promise((resolve, reject) => {
    const callback = { onFulfilled, onRejected, resolve, reject }
    if (this.state === PENDING) {
      this.callbacks.push(callback)
    } else {
      // promise 已经 fulfilld/rejected 了，这时候再then，直接拿到对应的result 进行处理
      setTimeout(() => {
        handleCallback(callback, this.state, this.result)
      }, 0)
    }
  })
}

// #endregion Promise
module.exports = Promise

function wait(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (n % 2 === 0) {
        reject(n)
      } else {
        resolve(n)
      }
    }, n * 1000)
  })
}

const p = wait(3)
p.then((pres1) => {
  console.log('pres1', pres1) // 3
}).then((pres1_1) => {
  console.log('pres1_1', pres1_1) // undefined
})

p.then((pres2) => {
  console.log('pres2', pres2) // 3
}).then((pres2_1) => {
  console.log('pres2_1', pres2_1) // undefined
})

const err = wait(4)
err.then(
  (res) => {
    console.log('err res', res)
  },
  (err) => {
    console.log('err', err) // 4
  }
)
