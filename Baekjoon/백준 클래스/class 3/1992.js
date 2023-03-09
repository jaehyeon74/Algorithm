const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const nums = input.slice(1).map((v) => v.split("").map(Number));

const quadTree = [];

function recursion(n, x, y) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += nums[y + j][x + i];
    }
  }

  if (total === 0) quadTree.push(0);
  else if (total === n * n) quadTree.push(1);
  else {
    n /= 2;
    quadTree.push("(");
    recursion(n, x, y);
    recursion(n, x + n, y);
    recursion(n, x, y + n);
    recursion(n, x + n, y + n);
    quadTree.push(")");
  }
}

recursion(N, 0, 0);
console.log(quadTree.join(""));

// 색종이 만들기 문제와 비슷
// recursion에서 현재 화면이 모두 같은 색이면 현재 색깔을 quadTree에 추가하고,
// 그렇지 않으면 화면을 4분할하여 각각의 화면별로 재귀호출한다
// 괄호는 화면이 분할되기 전과 후에만 필요
