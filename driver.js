import formatData from './bst/dataFormatter';
import Tree from './bst/tree';

// Original array
const data = [1, 7, 4, 23, 8, 59, 4, 33, 5, 1, 9, 2, 18];

// Order elements in the original array and remove all duplicates
const formattedData = formatData(data);

// Create a balanced BST
Tree(formattedData);
