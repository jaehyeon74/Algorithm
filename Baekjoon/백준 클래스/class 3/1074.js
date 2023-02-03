const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (arr) => {
  const [N, r, c] = arr;
  let start = 0;

  const zigzag = (row, column, stage) => {
    if (stage === 1) {
      if (row === 0 && column === 0) return start;
      if (row === 0 && column === 1) return start + 1;
      if (row === 1 && column === 0) return start + 2;
      if (row === 1 && column === 1) return start + 3;
    }

    let middle = Math.pow(2, stage - 1);
    let before_N = Math.pow(4, stage - 1);

    if (row >= middle && column >= middle) {
      start += before_N * 3;
      return zigzag(row - middle, column - middle, stage - 1);
    }
    if (row >= middle && column < middle) {
      start += before_N * 2;
      return zigzag(row - middle, column, stage - 1);
    }
    if (row < middle && column >= middle) {
      start += before_N * 1;
      return zigzag(row, column - middle, stage - 1);
    }
    if (row < middle && column < middle) {
      return zigzag(row, column, stage - 1);
    }
  };

  return zigzag(r, c, N);
};

console.log(solution(input));
