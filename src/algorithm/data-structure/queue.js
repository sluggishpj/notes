import { FULL, EMPTY } from '../constants'

//#region Queue
class Queue {
  constructor(size) {
    this._data = new Array(size)
    this.size = size
    this.front = 0
    this.back = 0
  }

  // 队尾入队
  enqueue(v) {
    if (!this.isFull()) {
      this._data[this.back++] = v
      return true
    }
    return FULL
  }

  // 队头出队
  dequeue(v) {
    if (!this.isEmpty()) {
      return this._data[this.front++]
    }
    return EMPTY
  }

  // 是否为空
  isEmpty() {
    return this.front === this.back
  }

  // 排到队尾了
  isFull() {
    return this.back === this.size
  }
}
//#endregion Queue

export { Queue }
