const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

let answer = "";
let [n, ...arr] = input;
n = +n;
arr = arr.map(Number).sort((a, b) => a - b);

let min = Math.min(...arr);
let max = Math.max(...arr);
let mid = (arr.length - 1) / 2;
const avg = arr.reduce((acc, curr) => acc + curr / n, 0);
let cache = {};

arr.forEach((elem) => {
  cache[elem] = cache[elem] ? cache[elem] + 1 : 1;
});
const modeArr = Object.entries(cache).sort((a, b) => {
  if (b[1] === a[1]) return a[0] - b[0];
  return b[1] - a[1];
});
let mode = modeArr[0][0];
if (n >= 2 && modeArr[0][1] === modeArr[1][1]) mode = modeArr[1][0];

answer += Math.round(avg) + "\n";
answer += arr[mid] + "\n";
answer += mode + "\n";
answer += max - min + "\n";

console.log(answer);
