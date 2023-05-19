const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const house = input.slice(1).map((row) => row.split(" ").map(Number));
house.unshift([0, 0, 0]);

let dp = Array.from({ length: N + 1 }, () => Array(3).fill(0));
dp[1] = house[1];
for (let n = 2; n <= N; n++) {
  for (let j = 0; j < 3; j++) {
    dp[n][j] = +Infinity;
    for (let k = 0; k < 3; k++) {
      if (j === k) continue;
      dp[n][j] = Math.min(dp[n - 1][k] + house[n][j], dp[n][j]);
    }
  }
}

console.log(Math.min(...dp[N]));
