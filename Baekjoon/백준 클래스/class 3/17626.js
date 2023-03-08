const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = +fs.readFileSync(filePath).toString().trim();

// function solution(n) {
//   let arr = Array(n + 1).fill(0);
//   let N = Math.floor(Math.sqrt(n));
//   const stack = [];

//   for (let i = 1; i <= N; i++) {
//     let a = Math.pow(i, 2);
//     arr[a] = 1;
//   }
//   if (arr[n] !== 0) return arr[n];

//   for (let m = 1; m <= N; m++) {
//     for (let n = 1; n <= m; n++) {
//       let newNum = Math.pow(m, 2) + Math.pow(n, 2);
//       if (arr[newNum] === 0) {
//         arr[newNum] = 2;
//         stack.push(newNum);
//       }
//     }
//   }
//   if (arr[n] !== 0) return arr[n];

//   for (let j = 1; j <= N; j++) {
//     stack.forEach((num) => {
//       let newNumm = num + Math.pow(j, 2);
//       if (arr[newNumm] === 0) {
//         arr[newNumm] = 3;
//       }
//     });
//   }
//   if (arr[n] !== 0) return arr[n];

//   return 4;
// }

const solution = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let min = 4;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j]);
    }
    dp[i] = min + 1;
  }
  return dp[n];
};

console.log(solution(input));
