// 답지확인
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, ...arr] = input;
n = Number(n);
arr = arr.map((v) => v.split(" ").map((elem) => +elem));

function solution(num, times) {
  const sortedArr = times.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let nowClass = sortedArr[0];
  let answer = 1;

  for (let i = 1; i < num; i++) {
    const temp = sortedArr[i];
    if (nowClass[1] <= temp[0]) {
      nowClass = sortedArr[i];
      answer += 1;
    }
  }
  return answer;
}
console.log(solution(n, arr));
