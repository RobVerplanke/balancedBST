/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import formatData from './dataFormatter.js';
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
    // If value does not excist in the tree, create new node
    if (node === null) return createNode(value);

    // Recursive call
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

      // Excecute callback function, if there is one
      if (callback) callback(node.data);

      // push value to result array
      result.push(node.data);

      // remove current node from queue
      queue.shift();

      // If there are children, put them in the queue in the right order
      if (node.right) queue.unshift(node.right);
      if (node.left) queue.unshift(node.left);
    }

    return result;
  }

  // Preorder DLR
  preOrder(callback) {
    const result = [];

    // Helper function for recursion
    function recursivePreOrder(node) {
      // Excecute callback function, if there is one
      if (callback) callback(node.data);

      // push value of current node to result array
      result.push(node.data);

      // Recusrivly traverse left subtree
      if (node.left) recursivePreOrder(node.left);

      // Recusrivly traverse right subtree
      if (node.right) recursivePreOrder(node.right);
    }
    recursivePreOrder(this.root);

    return result;
  }

  // Inorder LDR
  inOrder(callback) {
    const result = [];

    // Helper function for recursion
    function recursiveInOrder(node) {
      // Return at empty node
      if (node === null) return;

      // Excecute callback function, if there is one
      if (callback) callback(node.data);

      // Recusrivly traverse left subtree
      if (node.left) recursiveInOrder(node.left);

      // push value of current node to result array
      result.push(node.data);

      // Recusrivly traverse right subtree
      if (node.right) recursiveInOrder(node.right);
    }
    recursiveInOrder(this.root);

    return result;
  }

  // Postorder LRD
  postOrder(callback) {
    const result = [];

    // Helper function for recursion
    function recursivePostOrder(node) {
      // Return at empty node
      if (node === null) return;

      // Excecute callback function, if there is one
      if (callback) callback(node.data);

      // Recusrivly traverse right subtree
      if (node.left) recursivePostOrder(node.left);

      // Recusrivly traverse left subtree
      if (node.right) recursivePostOrder(node.right);

      // push value of current node to result array
      result.push(node.data);
    }
    recursivePostOrder(this.root);

    return result;
  }

  // Height of a node

  height(node = this.root) {
    if (node === null) return -1;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Depth of a node
  depth(value) {
    const node = this.root;
    const level = 0;
    return this._depth(value, node, level);
  }

  _depth(value, node, level) {
    if (node === null) return -1;
    if (value === node.data) return level;

    if (value < node.data) return this._depth(value, node.left, level + 1);
    if (value > node.data) return this._depth(value, node.right, level + 1);

    return -1; // Value not found
  }

  isBalanced(node = this.root) {
    if (node === null) return true;

    // Loop through left and right subtree
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    // Check if difference is not > 2
    const diff = Math.abs(leftHeight - rightHeight);

    if (diff > 1) return false;

    return true;
  }

  rebalance(tree) {
    if (tree === null) return tree;

    const newData = this.levelOrder(tree);
    this.root = this.buildTree(formatData(newData));

    return this.root;
  }
}
