export default class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export function createNode(value) {
  return new Node(value);
}
