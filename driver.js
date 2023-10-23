/* eslint-disable import/extensions */
import formatData from './bst/dataFormatter.js';
import Tree from './bst/tree.js';
import prettyPrint from './bst/prettyPrint.js';

// Original array
const data = [1, 7, 4, 23, 8, 59, 4, 33, 5, 1, 9, 2, 18];

// Order elements in the original array and remove all duplicates
const formattedData = formatData(data);

// Create a balanced BST
const balancedBST = new Tree(formattedData);

prettyPrint(balancedBST.root);
console.log(`Balanced: ${balancedBST.isBalanced()}`);
console.log(`Level-order: ${balancedBST.levelOrder()}`);
