let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const coordinates = input.map((v) => v.split(" ").map((v) => +v));

const sortedArr = coordinates.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  if (a[1] === b[1]) {
    if (a[0] > b[0]) return 1;
    if (a[0] === b[0]) return 0;
    if (a[0] < b[0]) return -1;
  }
  if (a[1] < b[1]) return -1;
});

const result = sortedArr.map((v) => v.join(" ")).join("\n");

console.log(result);
