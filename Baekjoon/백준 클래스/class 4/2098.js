const fs = require("fs");
const board = fs
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [N] = board.shift();

let cost = Array.from(Array(N), () => Array(1 << N).fill(-1));
const dfs = (now, visited) => {
  if (visited == (1 << N) - 1) {
    if (board[now][0] == 0) return Infinity;
    else return board[now][0];
  }

  if (cost[now][visited] != -1) return cost[now][visited];

  cost[now][visited] = Infinity;

  for (let i = 0; i < N; i++) {
    if (board[now][i] == 0) continue;
    if (visited & (1 << i)) continue;
    cost[now][visited] = Math.min(
      cost[now][visited],
      board[now][i] + dfs(i, visited | (1 << i))
    );
  }
  return cost[now][visited];
};

console.log(dfs(0, 1));
