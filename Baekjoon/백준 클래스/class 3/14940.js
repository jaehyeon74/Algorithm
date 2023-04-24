const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((row) => row.split(" ").map(Number));
const answerArr = Array.from({ length: n }, () => Array(m).fill(-1));
const visited = Array.from({ length: n }, () => Array(m).fill(false));

const q = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) answerArr[i][j] = 0;
    if (map[i][j] === 2) {
      answerArr[i][j] = 0;
      q.push([j, i, 0]);
    }
  }
}
// 2부터 시작해서
// 2주변의 값들은 1씩 카운팅해서 채우고
// 0을 만나면
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
while (q.length) {
  const [x, y, count] = q.shift();
  for (let i = 0; i < 4; i++) {
    const dx = x + ds[i][0];
    const dy = y + ds[i][1];
    if (
      dx >= 0 &&
      dy >= 0 &&
      dx < m &&
      dy < n &&
      map[dy][dx] === 1 &&
      !visited[dy][dx]
    ) {
      visited[dy][dx] = true;
      answerArr[dy][dx] = count + 1;
      q.push([dx, dy, count + 1]);
    }
  }
}

const answer = answerArr.map((row) => row.join(" ")).join("\n");

console.log(answer);
