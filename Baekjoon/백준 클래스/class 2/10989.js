let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

input.shift();
input.sort((a, b) => a - b).forEach((elem) => console.log(elem));
