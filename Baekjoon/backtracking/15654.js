const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const visited = [];

arr.forEach((x) => {
  visited[x] = false;
});

const answer = [];
const row = [];

function dfs(count) {
  if (count === M) {
    answer.push(row.join(" "));
    return;
  } else {
    for (let i = 0; i < N; i++) {
      const num = arr[i];
      if (visited[num]) continue;
      visited[num] = true;
      row.push(num);
      dfs(count + 1);
      row.pop();
      visited[num] = false;
    }
  }
}

dfs(0);
console.log(answer.join("\n"));
