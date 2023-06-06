const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
numbers.sort((a, b) => a - b);

let arr = new Set();
const visited = Array(N).fill(false);

function dfs(count, curArr) {
  if (count === M) {
    const str = curArr.join(" ");
    arr.add(str);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(count + 1, [...curArr, numbers[i]]);
    visited[i] = false;
  }
}

dfs(0, []);

const answer = [...arr].join("\n");

console.log(answer);
