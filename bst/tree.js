// eslint-disable-next-line import/extensions
import createNode from './node';

function buildTree(arr) {
  if (arr.length === 0) return null;

  const midIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midIndex);
  const rightHalf = arr.slice(midIndex);

  const root = createNode(arr[midIndex]);

  root.left = buildTree(leftHalf);
  root.right = buildTree(rightHalf);

  return root;
}

export default class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  //   insert(value) {

  //   }

  //   delete(value) {

  //   }

  //   find(value) {

  //   }

  //   levelOrder(func) {

  //   }

  //   inOrder(func) {

  //   }

  //   preOrder(func) {

  //   }

  //   postOrder(func) {

  //   }

  //   height(node) {

  //   }

  //   depth(node) {

  //   }

  //   isBalanced(tree) {

  //   }

  //   rebalance(tree) {

//   }
}
