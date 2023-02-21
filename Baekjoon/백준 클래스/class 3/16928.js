const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const ladders = [];
const snakes = [];

for (let i = 0; i < N; i++) {
  const ladderInfo = input[i].split(" ").map(Number);
  ladders.push(ladderInfo);
}

for (let i = N; i < M + N; i++) {
  const snakeInfo = input[i].split(" ").map(Number);
  snakes.push(snakeInfo);
}

function bfs(L, S) {
  const visited = Array(101).fill(false);
  const q = [];
  q.push([1, 0]);
  visited[1] = true;

  while (q.length) {
    const [cur, time] = q.shift();
    if (cur === 100) return time;
    for (const next of [cur + 1, cur + 2, cur + 3, cur + 4, cur + 5, cur + 6]) {
      if (!visited[next] && next >= 0 && next <= 100) {
        let moved = next;
        visited[next] = 1;
        const filteredLadder = L.find((x) => x[0] === next);
        const filteredSnake = S.find((x) => x[0] === next);
        if (filteredLadder) {
          moved = filteredLadder[1];
          visited[moved] = 1;
        }
        if (filteredSnake) {
          moved = filteredSnake[1];
          visited[moved] = 1;
        }
        q.push([moved, time + 1]);
      }
    }
  }
}

console.log(bfs(ladders, snakes));
