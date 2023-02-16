const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const tomatoes = input.map((v) => v.split(" ").map(Number));

class Node {
  constructor(x, y, count = -1) {
    this.x = x;
    this.y = y;
    this.count = count;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(value) {
    const node = new Node(value.x, value.y, value?.count);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  shift() {
    if (!this.size) return null;
    const node = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return node;
  }
}

const q = new Queue();
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

let output = 0;
let zeroCount = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (tomatoes[i][j] === 1) {
      q.push({ x: j, y: i, count: 0 });
    }
    if (tomatoes[i][j] === 0) {
      zeroCount++;
    }
  }
}

while (q.size) {
  const { x, y, count } = q.shift();
  for (let i = 0; i < 4; i++) {
    const nx = x + ds[i][0];
    const ny = y + ds[i][1];
    if (tomatoes?.[ny]?.[nx] === 0) {
      q.push({ x: nx, y: ny, count: count + 1 });
      zeroCount--;
      tomatoes[ny][nx] = 1;
      output = Math.max(output, count + 1);
    }
  }
}

console.log(zeroCount ? -1 : output);
