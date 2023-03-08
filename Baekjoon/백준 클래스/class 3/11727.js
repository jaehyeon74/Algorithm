const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = +fs.readFileSync(filePath).toString().trim();

function solution(n) {
  const arr = Array(n + 1).fill(0);
  arr[1] = 1;
  arr[2] = 3;
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] * 2 + arr[i - 1]) % 10007;
  }
  return arr[n];
}
console.log(solution(input));
