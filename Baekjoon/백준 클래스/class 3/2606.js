const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const connectionsNum = +input.shift();
const arr = input.map((x) => x.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
arr.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function dfs(start) {
  let stack = [start];
  const visited = Array(N + 1).fill(false);
  const order = [];
  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      order.push(node);
      stack.push(...graph[node]);
    }
  }
  return order.length - 1;
}

console.log(dfs(1));
