const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

function solution(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;
  let answer = [1, 2];
  for (let i = 3; i <= num; i++) {
    let x = (answer[0] + answer[1]) % 10007;
    answer[0] = answer[1];
    answer[1] = x;
  }
  return answer[1];
}

console.log(solution(N));
