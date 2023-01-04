const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = input.shift();
const cases = input.map(Number);

function fibonacci(n) {
  let prev = [1, 0];
  let next = [0, 1];
  if (n === 0) return prev.join(" ");
  if (n === 1) return next.join(" ");
  for (let i = 2; i <= n; i++) {
    let newOne = [prev[0] + next[0], prev[1] + next[1]];
    prev = next;
    next = newOne;
  }
  return next.join(" ");
}

function solve(arr) {
  let result = "";

  arr.forEach((elem) => {
    result += fibonacci(elem) + "\n";
  });

  return result;
}

console.log(solve(cases));
