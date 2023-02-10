const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift() * 1;

function GCD(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);
  return b === 0 ? a : GCD(b, a % b);
}

function LCM(originalA, originalB) {
  const gcd = GCD(originalA, originalB);
  return (originalA * originalB) / gcd;
}

function solution(M, N, x, y) {
  const lcm = LCM(M, N);
  const bigOne = Math.max(M, N);
  const smallOne = bigOne === M ? N : M;
  let rest_bigOne = bigOne === M ? x : y;
  let rest_smallOne = bigOne === M ? y : x;
  const count = lcm / bigOne;
  let answer = -1;
  for (let i = 0; i < count; i++) {
    let temp = i * bigOne + rest_bigOne;
    if (
      temp % smallOne === rest_smallOne ||
      (temp % smallOne === 0 && rest_smallOne === smallOne)
    ) {
      answer = temp;
      break;
    }
  }
  return answer;
}

for (let i = 0; i < T; i++) {
  const [testM, testN, testx, testy] = input.shift().split(" ").map(Number);
  console.log(solution(testM, testN, testx, testy));
}
