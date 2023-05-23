const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array(N).fill(0);
let max = 0;
for (let i = 0; i < N; i++) {
  max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
