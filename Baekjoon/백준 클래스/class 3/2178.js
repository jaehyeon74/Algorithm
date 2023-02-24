const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("\r")[0].split("").map(Number));
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function solution(MAP, X, Y) {
  const q = [{ x: 1, y: 1, count: 1 }];
  const visited = Array.from({ length: Y }, () => Array(X).fill(false));
  let answer = 0;
  while (q.length) {
    let { x, y, count } = q.shift();
    for (let i = 0; i < 4; i++) {
      const dy = y - 1 + ds[i][0];
      const dx = x - 1 + ds[i][1];
      if (
        dx >= 0 &&
        dy >= 0 &&
        dx < X &&
        dy < Y &&
        !visited[dy][dx] &&
        MAP[dy][dx] === 1
      ) {
        if (dx === X - 1 && dy === Y - 1) {
          answer = count + 1;
          return answer;
        }
        visited[dy][dx] = true;
        q.push({ x: dx + 1, y: dy + 1, count: count + 1 });
      }
    }
  }
}

console.log(solution(map, M, N));
