/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import createNode from './node.js';

function buildTree(arr) {
  if (arr.length === 0) return null;

  const midIndex = Math.floor(arr.length / 2);
  const root = createNode(arr[midIndex]);

  const leftHalf = arr.slice(0, midIndex);
  const rightHalf = arr.slice(midIndex + 1);

  root.left = buildTree(leftHalf);
  root.right = buildTree(rightHalf);

  return root;
}

export default class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  // Insert new node
  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (node === null) return createNode(value);

    if (value < node.data) {
      node.left = this._insert(node.left, value);
    } else if (value > node.data) {
      node.right = this._insert(node.right, value);
    } else {
      return console.log('Value already exists.');
    }

    return node;
  }

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
