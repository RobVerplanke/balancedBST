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

// Show tree
prettyPrint(balancedBST.root);

// Confirm tree is balanced
console.log(`Balanced: ${balancedBST.isBalanced()}`);

// Print tree in levelorder
console.log(`Levelorder: ${balancedBST.levelOrder()}`);

// Print tree in preorder
console.log(`Preorder: ${balancedBST.preOrder()}`);

// Print tree in postorder
console.log(`Postorder: ${balancedBST.postOrder()}`);

// Print tree in inorder
console.log(`Inorder: ${balancedBST.inOrder()}`);

// Unbalance the tree
balancedBST.insert(110);
balancedBST.insert(120);
balancedBST.insert(130);
balancedBST.insert(140);

// Confirm tree is UNbalanced
console.log(`Balanced: ${balancedBST.isBalanced()}`);

// Show tree
prettyPrint(balancedBST.root);

// Rebalance tree
console.log('\n balancing tree...\n');
balancedBST.rebalance();

// Show tree
prettyPrint(balancedBST.root);

// Confirm tree is balanced
console.log(`Balanced: ${balancedBST.isBalanced()}`);

// Print tree in levelorder
console.log(`Levelorder: ${balancedBST.levelOrder()}`);

// Print tree in preorder
console.log(`Preorder: ${balancedBST.preOrder()}`);

// Print tree in postorder
console.log(`Postorder: ${balancedBST.postOrder()}`);

// Print tree in inorder
console.log(`Inorder: ${balancedBST.inOrder()}`);
