class Node {
  constructor(data, left, right) {
    this.data = (data === null ? null : data);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

export default function createNode(value) {
  return new Node(value);
}
