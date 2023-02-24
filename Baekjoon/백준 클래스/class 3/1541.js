const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("-");

function solution(arr) {
  let totalCount = +arr
    .shift()
    .split("+")
    .reduce((acc, curr) => acc + curr * 1, 0);

  if (arr.length === 0) return totalCount;

  arr.forEach((elem) => {
    if (elem.indexOf("+") !== -1) {
      const count = elem.split("+").reduce((acc, curr) => acc + curr * 1, 0);
      totalCount -= count;
    } else totalCount -= +elem;
  });

  return totalCount;
}

console.log(solution(input));
