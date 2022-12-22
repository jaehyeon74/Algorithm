let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const N = Number(input[0]);
const K = Number(input[1]);

let numArr = Array.from({ length: N }, (_, index) => index + 1);

let acc = 0;

const returnArr = [];

while (returnArr.lenth !== N) {
  acc = (acc + K - 1) % numArr.length;
  returnArr.push(numArr[acc]);
  numArr.splice(acc, 1);

  if (returnArr.length === N) {
    console.log(`<${returnArr.join(", ")}>`);
    break;
  }
}
