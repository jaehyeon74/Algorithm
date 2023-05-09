const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [v, e] = input.shift().split(" ").map(Number);
const start = +input.shift();
const graph = Array.from({ length: v + 1 }, () => []);
const distance = Array.from({ length: v + 1 }, () => Infinity);
const visited = new Array(v + 1).fill(false);

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(data) {
    this.values.push(data);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const [node, dist] = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let [parentNode, parentDist] = this.values[parentIdx];
      if (dist >= parentDist) break;
      this.values[parentIdx] = [node, dist];
      this.values[idx] = [parentNode, parentDist];
      idx = parentIdx;
    }
  }

  extractMin() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const elem = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild[1] < elem[1]) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild[1] < elem[1]) ||
          (swap && rightChild[1] < leftChild[1])
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = elem;
      idx = swap;
    }
  }
}

const pq = new MinBinaryHeap();
input.forEach((row) => {
  const [from, to, weight] = row.split(" ").map(Number);
  graph[from].push([to, weight]);
});

distance[start] = 0;
pq.insert([start, 0]);

while (pq.values.length > 0) {
  const [curNode, dist] = pq.extractMin();
  if (visited[curNode]) continue;

  visited[curNode] = true;
  for (let [nextNode, nextDist] of graph[curNode]) {
    if (distance[nextNode] > distance[curNode] + nextDist) {
      distance[nextNode] = nextDist + distance[curNode];
      pq.insert([nextNode, distance[nextNode]]);
    }
  }
}

const answer = distance
  .map((v) => (v === Infinity ? "INF" : v))
  .slice(1)
  .join("\n");

console.log(answer);
