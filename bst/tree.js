// eslint-disable-next-line import/extensions
import Node, { createNode } from './node';
import formatData from './dataFormatter';

export default class BinaryTree {
  constructor(arr) {
    this.root = null;
    this.data = formatData(arr);
  }
  
  buildTree(arr) {

    const midIndex = Math.floor(data.length / 2);
    const midElement = arr[midIndex];
    
    const leftHalf = arr.slice(0, midIndex);
    const rightHalf = arr.slice(midIndex);

    if (arr.length <= 1) return arr;

    buildTree(leftHalf);
    buildTree(rightHalf);

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
// }
