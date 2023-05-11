const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim();

const sol = (input) => {
  const [N, K] = input.split(" ").map(Number);
  const visited = Array(100001).fill(false);
  const q = [[N, 0]];

  while (q.length) {
    const [pos, time] = q.shift();
    if (pos === K) return time;
    visited[pos] = true;

    const doubled = 2 * pos;
    if (!visited[doubled] && doubled >= 0 && doubled <= 100000) {
      q.unshift([doubled, time]);
    }
    for (let X of [pos - 1, pos + 1]) {
      if (!visited[X] && X >= 0 && X <= 100000) {
        q.push([X, time + 1]);
      }
    }
  }
};

console.log(sol(input));
