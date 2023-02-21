const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

function solution(n) {
  let arr = [1, 2, 4];
  if (n === 1) return arr[0];
  if (n === 2) return arr[1];
  if (n === 3) return arr[2];
  for (let i = 4; i <= n; i++) {
    let newNum = arr[0] + arr[1] + arr[2];
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = newNum;
  }
  return arr[2];
}

for (let i = 0; i < N; i++) {
  const inputNum = +input[i];
  console.log(solution(inputNum));
}
