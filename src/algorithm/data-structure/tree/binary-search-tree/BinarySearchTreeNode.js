import BinaryTreeNode from '../BinaryTreeNode'
import Comparator from '@/utils/comparator'

export default class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null, compareFunction) {
    super(value)
    this.compareFunction = compareFunction
    this.nodeValueComparator = new Comparator(compareFunction)
  }
}
