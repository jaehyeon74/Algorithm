const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [[H, W], blocks] = input.map((row) => row.split(" ").map(Number));

let total = 0;

for (let i = 0; i < W; i++) {
  const curBlock = blocks[i];
  if (curBlock === H) continue;
  let left = curBlock;
  let right = curBlock;

  for (let j = i - 1; j >= 0; j--) {
    const leftBlock = blocks[j];
    if (leftBlock >= curBlock) {
      left = Math.max(leftBlock, left);
    }
  }

  for (let j = i + 1; j < W; j++) {
    const rightBlock = blocks[j];
    if (rightBlock >= curBlock) {
      right = Math.max(rightBlock, right);
    }
  }

  total += Math.min(left, right) - curBlock;
}

console.log(total);
