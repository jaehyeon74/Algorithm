const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim();

const [N, M] = input.split(" ").map(Number);

const visited = new Array(N + 1).fill(false);
const answer = [];
const arr = [];

function dfs(count, start) {
  if (count === M) {
    answer.push(arr.join(" "));
    return;
  } else {
    for (let i = start; i <= N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      arr.push(i);
      dfs(count + 1, i);
      arr.pop();
      visited[i] = false;
    }
  }
}

dfs(0, 1);
console.log(answer.join("\n"));
