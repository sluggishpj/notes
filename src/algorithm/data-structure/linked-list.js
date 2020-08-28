import { ERROR } from '../constants'

//#region SLNode
class SLNode {
  constructor(value = null, next = null) {
    this.value = value // 数据
    this.next = next // 指向下一个结点
  }
}
//#endregion SLNode

// #region insertAfter
/**
 * 在p结点后插入node结点
 * @param {SLNode} p 结点p
 * @param {SLNode} node 结点node
 */
function insertAfter(p, node) {
  if (!p || !node) {
    return ERROR
  }
  node.next = p.next
  p.next = node
}
//#endregion insertAfter

//#region deleteNextNode
/**
 * 删除链表中的某个结点p的直接后继结点
 * @param {SLNode} p 结点p
 * @returns {SLNode} 返回删除的结点，也就是p的下一个结点
 */
function deleteNextNode(p) {
  if (!p) {
    return ERROR
  }
  const n = p.next
  p.next = n && n.next
  return n
}
//#endregion deleteNextNode

//#region deleteNode
/**
 * 不给头结点【或者没有头结点】删除链表中的某个结点p
 * @param {SLNode} p 结点p
 */
function deleteNode(p) {
  // 1. 将 p结点 的 next结点 的 value 覆盖掉 p结点 的 value
  // 2. 删除 p结点 的 next结点
  if (!p) {
    return ERROR
  }
  let n = p.next
  p.value = n && n.value
  deleteNextNode(p)
}
//#endregion deleteNode

//#region deleteNodeByHead
/**
 * 删除链表中的特定结点
 * @param {SLNode} head 头结点
 * @param {valueType} value 目标结点的value
 */
function deleteNodeByHead(head, value) {
  let n = head
  while (n && n.next && n.next.value !== value) {
    n = n.next
  }
  // 找到目标结点的前一个结点n
  return deleteNextNode(n)
}
//#endregion deleteNodeByHead

//#region searchNode
/**
 * 查找并返回目标结点
 * @param {SLNode} head 链表头结点
 * @param {someType} value 结点的数据
 * @returns {SLNode} 找到的结点/null
 */
function searchNode(head, value) {
  if (!head) {
    return ERROR
  }
  let n = head
  while (n && n.value !== value) {
    n = n.next
  }
  return n
}
//#endregion searchNode

//#region traverse
/**
 * 遍历链表
 * @param {SLNode} head 链表头结点
 */
function* traverse(head) {
  let n = head
  while (n) {
    yield n.value
    n = n.next
  }
}
//#endregion traverse

//#region reverseTraversal
/**
 * 反向遍历链表
 * @param {SLNode} head 链表头结点
 */
function* reverseTraversal(head) {
  if (!head) {
    return ERROR
  }
  if (head.next === null) {
    yield head.value
  } else {
    for (let v of reverseTraversal(head.next)) {
      yield v
    }
    yield head.value
  }
}
//#endregion reverseTraversal

export {
  SLNode,
  insertAfter,
  deleteNextNode,
  deleteNode,
  deleteNodeByHead,
  searchNode,
  traverse,
  reverseTraversal
}
