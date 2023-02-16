const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const colors = input.map((v) => v.split("\r")[0].split(""));
let visited = Array.from({ length: N }, () => new Array(N).fill(0));

class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val.x, val.y);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }
  shift() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function BFS([startX, startY], map) {
  const queue = new Queue();
  queue.push({ x: startX, y: startY });
  while (queue.size) {
    const { x, y } = queue.shift();
    if (visited[x][y]) continue;
    else visited[x][y] = 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + ds[i][0];
      const ny = y + ds[i][1];
      if (nx < N && nx >= 0 && ny < N && ny >= 0 && map[nx][ny] === map[x][y]) {
        queue.push({ x: nx, y: ny });
      }
    }
  }
}

let count_able = 0;
let count_disable = 0;

const notNormalMan = [...colors].map((row) =>
  row.map((v) => (v === "B" ? "B" : "R"))
);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      BFS([i, j], colors);
      count_able++;
    }
  }
}

visited = Array.from({ length: N }, () => new Array(N).fill(0));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      BFS([i, j], notNormalMan);
      count_disable++;
    }
  }
}
console.log(`${count_able} ${count_disable}`);
