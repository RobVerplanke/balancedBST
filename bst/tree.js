import { removeDuplicates, sortArray } from './dataFormatter';

export default class BinaryTree {
  constructor() {
    this.root = null;
  }

  buildTree(arr) {
    const uniqueElementsArray = removeDuplicates(arr);
    const sortedArray = sortArray(uniqueElementsArray);
  }

  insert(value) {

  }

  delete(value) {

  }

  find(value) {

  }

  levelOrder(func) {

  }

  inOrder(func) {

  }

  preOrder(func) {

  }

  postOrder(func) {

  }

  height(node) {

  }

  depth(node) {

  }

  isBalanced(tree) {

  }

  rebalance(tree) {

  }
}
