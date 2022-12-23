// 풀이를 본 문제
let [N, M, B, ...land] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

let minTime = Number.MAX_VALUE;
let maxHeight = 0;
const heights = Array(257).fill(0);
land.forEach((v) => heights[v]++);

for (let target = 256; target >= 0; target--) {
  let block = B;
  let time = 0;
  heights.forEach((v, i) => {
    block += (i - target) * v;
    if (target > i) {
      time += (target - i) * v;
    } else {
      time += (i - target) * 2 * v;
    }
  });

  if (minTime < time) break;
  if (block < 0) continue;
  if (time < minTime) {
    minTime = time;
    maxHeight = target;
  }
}

console.log(minTime, maxHeight);
