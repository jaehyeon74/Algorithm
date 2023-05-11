const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const sol = (input) => {
  const N = +input[0];
  const tree = Array.from({ length: N + 1 }, () => []);
  for (let i = 1; i < input.length; i++) {
    const [p, c, w] = input[i].split(" ").map(Number);
    tree[p].push([c, w]);
    tree[c].push([p, w]);
  }
  let visited = Array(N + 1).fill(false);
  let max = { node: 0, max_length: Number.MIN_SAFE_INTEGER };

  const dfs = (node, dist) => {
    visited[node] = true;
    if (max.max_length < dist) max = { node, max_length: dist };
    for (let [nextNode, nextDist] of tree[node]) {
      if (visited[nextNode]) continue;
      dfs(nextNode, dist + nextDist);
    }
  };

  dfs(1, 0);
  visited = new Array(N + 1).fill(false);
  max.max_length = Number.MIN_SAFE_INTEGER;

  dfs(max.node, 0);
  return max.max_length;
};

console.log(sol(input));
