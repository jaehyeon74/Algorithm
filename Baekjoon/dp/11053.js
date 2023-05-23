const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array(N).fill(0);
for (let i = 0; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[j] > max) {
      // 여기서 만약 dp[j]>max 조건이 없다면
      // 최대값이 max값으로 대입되는 것이 아니라 가장 마지막에 들어온 dp[j]
      // 값이 max 값으로 설정된다
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
