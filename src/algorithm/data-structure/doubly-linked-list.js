//#region DLNode
class DLNode {
  constructor(value = null) {
    this.value = value // 数据
    this.prior = null // 指向前一个结点
    this.next = null // 指向下一个结点
  }
}
//#endregion DLNode

//#region insertAfter
/**
 * 在p结点后插入node结点
 * @param {DLNode} p 结点p
 * @param {DLNode} node 结点node
 */
function insertAfter(p, node) {
  let n = p.next

  p.next = node
  node.prior = p

  node.next = n
  n && (n.prior = node)
}
//#endregion insertAfter

// #region deleteNextNode
/**
 * 删除链表中的某个结点p的直接后继结点
 * @param {DLNode} p 结点p
 * @returns {DLNode} 返回删除的结点，也就是p的下一个结点
 */
function deleteNextNode(p) {
  const node = p.next
  const q = node && node.next

  if (!node) {
    // p 是最后1个结点
    return node
  }

  p.next = q

  if (q) {
    // node 不是最后1个结点
    q.prior = p
  }

  return node
}
//#endregion deleteNextNode

//#region deleteNode
/**
 * 删除链表中的某个结点p
 * @param {DLNode} p 结点p
 */
function deleteNode(p) {
  // 1. 将 p.next结点 的value覆盖掉 p结点 的 value
  // 2. 删除 p.next结点
  let node = p.next
  p.value = node && node.value
  deleteNextNode(p)
}
//#endregion deleteNode

export { DLNode, insertAfter, deleteNextNode, deleteNode }
