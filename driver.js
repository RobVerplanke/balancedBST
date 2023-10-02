import formatData from './bst/dataFormatter.js';
import Tree from './bst/tree.js';

// Original array
const data = [1, 7, 4, 23, 8, 59, 4, 33, 5, 1, 9, 2, 18];

// Order elements in the original array and remove all duplicates
const formattedData = formatData(data);

// Create a balanced BST
const balancedBST = new Tree(formattedData);

// Visualize the tree (provided in assignment)
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

prettyPrint(balancedBST.root);
