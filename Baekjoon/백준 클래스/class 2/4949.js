// 답지 확인 풀이
const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const arr = fs.readFileSync(file).toString().trim().split("\n");

const open = ["(", "["];
const closed = [")", "]"];

const answer = [];

arr.pop();
arr.forEach((row) => {
  let isNo = false;
  let stack = [];
  for (let i = 0; i < row.length; i++) {
    if (open.includes(row[i])) stack.push(row[i]);
    if (closed.includes(row[i])) {
      if (stack.pop() !== open[closed.indexOf(row[i])]) {
        answer.push("no");
        isNo = true;
        break;
      }
    }
  }
  if (!isNo) {
    stack.length === 0 ? answer.push("yes") : answer.push("no");
  }
});

console.log(answer.join("\n"));
