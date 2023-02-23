const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const numbers = input.map((v) => v.split(" ").map(Number));
const patterns = [
  [
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [1, 0],
    [0, 1],
    [1, 1],
  ],
  [
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  [
    [1, 0],
    [2, 0],
    [2, -1],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 1],
    [1, 0],
    [2, 0],
  ],
  [
    [1, 0],
    [1, -1],
    [1, -2],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [1, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  [
    [0, 1],
    [1, 1],
    [1, 2],
  ],
  [
    [1, 0],
    [1, -1],
    [2, -1],
  ],
  [
    [0, -1],
    [1, -1],
    [1, -2],
  ],
  [
    [1, 0],
    [1, -1],
    [2, -1],
  ],
  [
    [1, 0],
    [2, 0],
    [1, 1],
  ],
  [
    [0, 1],
    [0, 2],
    [1, 1],
  ],
  [
    [1, 0],
    [2, 0],
    [1, -1],
  ],
  [
    [1, 0],
    [1, -1],
    [1, 1],
  ],
];

let MAX = -Infinity;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < patterns.length; k++) {
      let x1 = j + patterns[k][0][0];
      let x2 = j + patterns[k][1][0];
      let x3 = j + patterns[k][2][0];
      let y1 = i + patterns[k][0][1];
      let y2 = i + patterns[k][1][1];
      let y3 = i + patterns[k][2][1];
      const condition1 =
        x1 >= 0 && x1 < M && x2 >= 0 && x2 < M && x3 >= 0 && x3 < M;
      const condition2 =
        y1 >= 0 && y1 < N && y2 >= 0 && y2 < N && y3 >= 0 && y3 < N;
      if (condition1 && condition2) {
        const count =
          numbers[i][j] + numbers[y1][x1] + numbers[y2][x2] + numbers[y3][x3];
        MAX = Math.max(MAX, count);
      }
    }
  }
}

console.log(MAX);
