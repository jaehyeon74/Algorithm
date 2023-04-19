const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const edges = input.map((elem) => elem.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});
let cnt = 0;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(...values) {
    values.forEach((value) => {
      const node = new Node(value);
      if (!this.first) {
        this.first = node;
        this.last = node;
      } else {
        let temp = this.first;
        this.first = node;
        this.first.next = temp;
      }
      this.size++;
    });
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.value;
  }

  clear() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

function solve(N, graph) {
  let count = 0;
  const visited = new Array(N + 1).fill(false);
  const stack = new Stack();
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i, visited, stack, graph);
      count++;
    }
  }
  return count;
}

function dfs(start, visited, stack, graph) {
  if (graph[start].length === 0) {
    visited[start] = true;
    return;
  }
  stack.clear();
  stack.push(start);
  while (stack.size) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      stack.push(...graph[node]);
    }
  }
}

console.log(solve(N, graph));
