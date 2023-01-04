const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const N = input.shift();
const lines = input.map((kgCm) => kgCm.split(" ").map(Number));

function solve(arr, target) {
  let rank = [];
  for (let i = 0; i < target; i++) {
    let counter = 0;
    for (let j = 0; j < target; j++) {
      if (i !== j) {
        if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) counter++;
      }
    }
    rank.push(counter + 1);
  }

  return rank.join(" ");
}

console.log(solve(lines, N));
