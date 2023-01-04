const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = input.shift();
const numArr = input.map(Number);

let stack = [];
numArr.forEach((num) => {
  num === 0 ? stack.pop() : stack.push(num);
});

const answer = stack.reduce((acc, curr) => acc + curr, 0);

console.log(answer);
