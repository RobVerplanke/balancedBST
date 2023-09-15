# Binary Search Tree Assignment

This assignment is completed as part of The Odin Project curriculum to gain a deeper understanding of algorithms and their usage.

## Objective

The goal of this assignment is to build a balanced Binary Search Tree (BST) and implement various operations on it. You will create a Node class, a Tree class, and write functions to insert, delete, find, traverse, and rebalance the BST.

## Assignment Description

### Node Class

- Create a Node class or factory that should have attributes for the data it stores as well as its left and right children.

### Tree Class

- Create a Tree class or factory that accepts an array when initialized. The Tree class should have a root attribute which uses the return value of the `buildTree` function.

### buildTree Function

- Write a `buildTree` function that takes an array of data, sorts it, removes duplicates, and turns it into a balanced binary tree full of Node objects appropriately placed. The `buildTree` function should return the level-0 root node of the tree.

### Insert and Delete Functions

- Implement `insert` and `delete` functions which accept a value to insert or delete, respectively. Handle various cases for deletion, such as when a node has children or not.

### Find Function

- Implement a `find` function that accepts a value and returns the node with the given value.

### LevelOrder Function

- Implement a `levelOrder` function which traverses the tree in breadth-first level order and provides each node as an argument to the provided function. This function can be implemented using either iteration or recursion.

### Depth-First Traversal Functions

- Write `inorder`, `preorder`, and `postorder` functions that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function.

### Height Function

- Implement a `height` function which accepts a node and returns its height. Height is defined as the number of edges in the longest path from a given node to a leaf node.

### Depth Function

- Write a `depth` function which accepts a node and returns its depth. Depth is defined as the number of edges in the path from a given node to the tree's root node.

### isBalanced Function

- Create an `isBalanced` function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and right subtree of every node is not more than 1.

### Rebalance Function

- Implement a `rebalance` function that rebalances an unbalanced tree. You'll want to use a traversal method to provide a new array to the `buildTree` function.

### Driver Script

- Write a simple driver script that does the following:
  1. Create a binary search tree from an array of random numbers less than 100.
  2. Confirm that the tree is balanced by calling `isBalanced`.
  3. Print out all elements in level, pre, post, and in order.
  4. Unbalance the tree by adding several numbers greater than 100.
  5. Confirm that the tree is unbalanced by calling `isBalanced`.
  6. Balance the tree by calling `rebalance`.
  7. Confirm that the tree is balanced by calling `isBalanced`.
  8. Print out all elements in level, pre, post, and in order.
