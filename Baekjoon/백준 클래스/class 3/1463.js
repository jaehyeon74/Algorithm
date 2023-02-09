const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim() * 1;

function optimisticCounting(num) {
  const dp = Array(num + 1).fill(0);
  dp[1] = 0;
  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 3 == 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    if (i % 2 == 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  return dp[num];
}

console.log(optimisticCounting(input));
