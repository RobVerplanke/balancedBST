class Node {
  constructor(data, left, right) {
    this.data = (data === null ? null : data);
    this.left = (left === null ? null : left);
    this.right = (right === null ? null : right);
  }
}

export default function createNode(value) {
  return new Node(value);
}
