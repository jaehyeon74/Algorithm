const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
input.forEach((X) => {
  const [a, b] = X.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

function bfs(start) {
  let count = 0;
  const q = [[start, count]];
  let visited = Array(N).fill(false);
  let sum = 0;

  while (q.length) {
    let [node, cnt] = q.shift();
    if (!visited[node]) {
      visited[node] = true;
      sum += cnt;
      cnt++;
      const neighbor = graph[node].map((v) => [v, cnt]);
      q.push(...neighbor);
    }
  }

  return sum;
}

let answer = [];

for (let i = 1; i <= N; i++) {
  answer.push(bfs(i));
}

let min = Math.min(...answer);
console.log(answer.indexOf(min) + 1);
