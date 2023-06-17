const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [Y, X, dir] = input[1].split(" ").map(Number);
const maps = input.slice(2).map((row) => row.split(" ").map(Number));

const ds = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

function bfs(x, y, d) {
  let count = 1;
  const q = [[x, y, d]];
  maps[y][x] = -1;
  while (q.length) {
    const [a, b, direction] = q.shift();
    let isEveryDirClean = true;
    for (let i = 0; i < 4; i++) {
      const moveDir = (direction + 3 - i) % 4;
      const dx = a + ds[moveDir][0];
      const dy = b + ds[moveDir][1];
      if (dx >= 0 && dy >= 0 && dx < M && dy < N && maps[dy][dx] === 0) {
        count++;
        isEveryDirClean = false;
        maps[dy][dx] = -1;
        q.push([dx, dy, moveDir]);
        break;
      }
    }
    if (isEveryDirClean) {
      const dx = a - ds[direction][0];
      const dy = b - ds[direction][1];
      if (dx >= 0 && dy >= 0 && dx < M && dy < N) {
        if (maps[dy][dx] === 1) break;
        q.push([dx, dy, direction]);
      }
    }
  }
  return count;
}

const answer = bfs(X, Y, dir);
console.log(answer);
