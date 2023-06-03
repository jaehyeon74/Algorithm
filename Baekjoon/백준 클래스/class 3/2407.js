const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim();

const [n, m] = input.split(" ").map(Number);

const arr = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 0; i <= n; i++) {
  arr[i][0] = 1;
  arr[i][i] = 1;
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
  }
}

console.log(arr[n][m]);
