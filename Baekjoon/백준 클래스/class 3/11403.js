const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const graph = input.map((v) => v.split(" ").map(Number));

const output = Array.from({ length: N }, () => Array(N).fill(0));
const dfs = (node, start, visited) => {
  for (let i = 0; i < N; i++) {
    if (graph[node][i] && !visited[i]) {
      visited[i] = true;
      output[start][i] = 1;
      dfs(i, start, visited);
    }
  }
};

for (let i = 0; i < N; i++) {
  const visited = Array(N).fill(false);
  dfs(i, i, visited);
}

console.log(output.map((v) => v.join(" ")).join("\n"));
