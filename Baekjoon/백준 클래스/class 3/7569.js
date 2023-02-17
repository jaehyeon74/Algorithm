const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N, H] = input.shift().split(" ").map(Number);
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
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value.x, value.y, value?.count);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
  shift() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

const q = new Queue();
const ds = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

let output = 0;
let zeroCount = 0;

for (let i = 0; i < H; i++) {
  for (let j = i * N; j < (i + 1) * N; j++) {
    for (let k = 0; k < M; k++) {
      if (tomatoes[j][k] === 1) q.push({ x: k, y: j, count: 0 });
      if (tomatoes[j][k] === 0) zeroCount++;
    }
  }
}

while (q.size) {
  const { x, y, count } = q.shift();
  for (let i = 0; i < 6; i++) {
    const nx = x + ds[i][0];
    const ny = y + ds[i][1] + ds[i][2] * N;
    if (nx >= 0 && ny >= 0 && nx < M && ny < N * H && tomatoes[ny][nx] === 0) {
      q.push({ x: nx, y: ny, count: count + 1 });
      zeroCount--;
      tomatoes[ny][nx] = 1;
      output = Math.max(output, count + 1);
    }
  }
}

console.log(zeroCount ? -1 : output);
