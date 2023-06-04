const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const triangle = input.map((row) => row.split(" ").map(Number));
const dp = Array.from({ length: N }, (_, i) => Array(i + 1).fill(0));

for (let i = 0; i < N; i++) {
  const row = triangle[i];
  if (i === 0) {
    dp[0][0] = row[0];
    continue;
  }
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + row[j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + row[j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j - 1] + row[j], dp[i - 1][j] + row[j]);
    }
  }
}

console.log(Math.max(...dp[N - 1]));
