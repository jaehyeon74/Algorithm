const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim();
const [N, K, P, X] = input.split(" ").map(Number);

function solve(N, K, P, X) {
  const neonSign = [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
  ];

  let answer = 0;

  function compareSigns(num1, num2) {
    let count = 0;
    for (let i = 0; i < 7; i++) {
      if (neonSign[num1][i] !== neonSign[num2][i]) count++;
    }
    return count;
  }

  function dfs(displayNum, digits, count) {
    if (digits === K) {
      if (
        count >= 1 &&
        count <= P &&
        Number(displayNum) >= 1 &&
        Number(displayNum) <= N
      ) {
        answer++;
      }
    } else {
      const currentFloor = X.toString();
      for (let j = 0; j < 10; j++) {
        const compareCount = compareSigns(j, Number(currentFloor[digits]));
        if (count + compareCount > P) continue;
        dfs(displayNum + j, digits + 1, count + compareCount);
      }
    }
  }
  dfs("", 0, 0);
  return answer;
}

console.log(solve(N, K, P, X));
