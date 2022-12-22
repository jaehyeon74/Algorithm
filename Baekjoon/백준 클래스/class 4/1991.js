let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();
input = input.map((e) => e.split("\r")[0].split(" "));

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = new Node("A");
  }

  insert() {
    const map = new Map();
    for (let [parent, left, right] of input) {
      map.set(parent, [left, right]);
    }
    function insertData(node) {
      const [left, right] = map.get(node.value);
      if (left !== ".") {
        let newNode = new Node(left);
        node.left = newNode;
        insertData(newNode);
      }
      if (right !== ".") {
        let newNode = new Node(right);
        node.right = newNode;
        insertData(newNode);
      }
      return;
    }
    insertData(this.root);
  }

  // DFS-PreOrder 전위순회 Recursively
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      if (!node.left || !node.right) return;
    }
    traverse(current);
    return data.join("");
  }

  // DFS-PostOrder 후위순회
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
      return;
    }
    traverse(this.root);
    return data.join("");
  }

  // DFS-InOrder 중위순회
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
      return;
    }
    traverse(this.root);
    return data.join("");
  }
}

let newTree = new Tree();
newTree.insert();
console.log(newTree.DFSPreOrder());
console.log(newTree.DFSPostOrder());
console.log(newTree.DFSInOrder());
