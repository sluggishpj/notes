// 字典树

//#region TrieNode
// 字典树结点
class TrieNode {
  constructor(val = '') {
    this.num = 1 // 有多少单词通过这个节点，即由根到该节点组成的字符串模式出现的次数
    this.children = new Map() // 所有儿子结点，key 是 val，值是对应的 TrieNode
    this.isEnd = false // 是否有以该结点结尾的单词
    this.val = val // 节点的值
  }
}
//#endregion TrieNode

//#region insert
/**
 * 插入单词
 * @param {TrieNode} root 根结点
 * @param {String} str 要插入的单词
 */
function insert(root, str) {
  for (let char of str) {
    if (root.children.has(char)) {
      // 结点已存在
      root = root.children.get(char)
      root.sum++
    } else {
      // 结点不存在，新增结点
      const node = new TrieNode(char)
      root.children.set(char, node)
      root = node
    }
  }
  root.isEnd = true
}
//#endregion insert

//#region has
/**
 * 在字典树中查找一个完全匹配的单词
 * @param {TrieNode} root 根结点
 * @param {String} str 要查找的单词
 * @returns {Boolean}
 */
function has(root, str) {
  if (!str) {
    return false
  }
  for (let char of str) {
    if (root.children.has(char)) {
      root = root.children.get(char)
    } else {
      return false
    }
  }
  return root.isEnd
}
//#endregion has
