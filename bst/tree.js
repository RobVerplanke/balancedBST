// eslint-disable-next-line import/extensions
import formatData from './dataFormatter';
import Node from './node';

export default class BinaryTree {
  constructor() {
    this.root = null;
  }

  buildTree(arr) {
    const data = formatData(arr);
    const newNode = new Node(value);
    const middleIndex = Math.floor(data.length / 2);
    const middleElement = data[middleIndex];
    const leftHalf = data.slice(0, middleIndex);
    const rightHalf = data.slice(middleIndex);

    this.root = middleElement;

    if (data.length === 0) return data;

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
