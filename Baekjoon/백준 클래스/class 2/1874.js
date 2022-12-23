// 풀이를 본 문제
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, ...nums] = input;
const numbeers = nums.map((i) => Number(i));

function solution(n, numbers) {
  const stack = [];
  let answer = "";
  let count = 1;

  for (let i = 0; i < n; i++) {
    const number = numbers.shift();

    while (count <= number) {
      stack.push(count++);
      answer += "+ ";
    }

    const poppedItem = stack.pop();
    if (poppedItem !== number) {
      return "NO";
    }
    answer += "- ";
  }

  return answer.split(" ").join("\n");
}

const answer = solution(n, numbeers);
console.log(answer);
