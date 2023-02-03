const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

input.shift();

function padovanNum(num) {
  if (num === 1) return 1;
  if (num === 2) return 1;
  if (num === 3) return 1;
  if (num === 4) return 2;
  if (num === 5) return 2;
  let baseArr = [1, 1, 1, 2, 2];
  for (let i = 6; i <= num; i++) {
    let newNum = baseArr[4] + baseArr[0];
    const [_, ...remainArr] = baseArr;
    baseArr = [...remainArr, newNum];
  }
  return baseArr[4];
}

function solution(arr) {
  let result = arr.map((v) => padovanNum(v)).join("\n");
  return result;
}

console.log(solution(input));
