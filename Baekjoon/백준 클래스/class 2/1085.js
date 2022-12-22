const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(" ")
  .map((v) => +v);
const [x, y, w, h] = input;
const xLength = Math.min(x, w - x);
const yLength = Math.min(y, h - y);
console.log(Math.min(xLength, yLength));
