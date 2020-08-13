//#region Stack
class Stack {
  constructor() {
    this._data = []
  }
  top() {
    return this._data[this.size() - 1]
  }
  empty() {
    return this._data.length === 0
  }
  size() {
    return this._data.length
  }
  push(v) {
    this._data.push(v)
  }
  pop() {
    return this._data.pop()
  }
}
//#endregion Stack

export { Stack }
