const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => v * 1);
const arr = input.map((v) => v.split("\r")[0]);

const map = new Map();
const valuesMap = new Map();
const result = [];

for (let i = 0; i < N; i++) {
  map.set(i + 1, arr[i]);
  valuesMap.set(arr[i], i + 1);
}

for (let i = N; i < N + M; i++) {
  if (isNaN(arr[i] * 1)) {
    result.push(valuesMap.get(arr[i]));
  } else result.push(map.get(arr[i] * 1));
}

console.log(result.join("\n"));
