const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function bfs(num, target) {
  const visited = Array(100, 000).fill(false);
  const q = [];
  q.push([num, 0]);
  visited[num] = true;
  while (q.length) {
    const [cur, time] = q.shift();
    if (cur === target) return time;
    for (const next of [cur - 1, cur + 1, 2 * cur]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = 1;
        q.push([next, time + 1]);
      }
    }
  }
}

console.log(bfs(N, K));
