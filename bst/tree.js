/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import createNode from './node.js';

function buildTree(arr) {
  if (arr.length === 0) return null;

  // Define middle point
  const midIndex = Math.floor(arr.length / 2);
  const root = createNode(arr[midIndex]);

  // Create left and right part
  const leftHalf = arr.slice(0, midIndex);
  const rightHalf = arr.slice(midIndex + 1);

  // Recursivly work down the left and right parts
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
    // If value does not excists in the tree
    if (node === null) return createNode(value);

    // Decide wich tree branch to work with
    if (value < node.data) {
      node.left = this._insert(node.left, value);
    } else if (value > node.data) {
      node.right = this._insert(node.right, value);
    } else {
      return console.log('Value already exists.');
    }

    return node;
  }

  // Delete node

  delete(value) {
    this.root = this._delete(this.root, value);
  }

  _delete(node, value) {
    if (node === null) return node;

    if (value < node.data) {
      node.left = this._delete(node.left, value);
    } else if (value > node.data) {
      node.right = this._delete(node.right, value);
    } else {
      // Node with one child or no child
      if (node.left === null) {
        return node.right;
      } if (node.right === null) {
        return node.left;
      }

      // Node with 2 children
      node.data = this._getMinValue(node.right);

      // Delete node
      node.right = this._delete(node.right, node.data);
    }

    return node;
  }

  _getMinValue(node) {
    let minValue = node.data;

    // Select the most left node
    while (node.left !== null) {
      minValue = node.left.data;
      node = node.left;
    }

    return minValue;
  }

  // Finde node

  find(value) {
    return this._find(this.root, value);
  }

  _find(node, value) {
    if (node === null) return node;

    // Work down the tree
    if (value < node.data) return this._find(node.left, value);
    if (value > node.data) return this._find(node.right, value);

    return node;
  }

  // Level Order

  levelOrder(callback) {
    // If tree is empty, return empty array
    if (this.root === null) return [];

    const queue = [this.root];
    const result = [];

    while (queue.length !== 0) {
      const node = queue[0];

      // Excecute callback function, if there is any
      if (callback) callback(node.data);

      // push value to result array
      result.push(node.data);

      // remove current node from queue
      queue.shift();

      // If there are children, put them in the queue in the right order
      if (node.left !== null) queue.unshift(node.left);
      if (node.right !== null) queue.unshift(node.right);
    }

    return result;
  }

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
