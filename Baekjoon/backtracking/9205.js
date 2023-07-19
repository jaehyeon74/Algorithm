const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = +input.shift();

function calcDist(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

while (T--) {
  const N = +input.shift();

  const list = [];
  for (let i = 0; i < N + 2; i++) {
    const [X, Y] = input.shift().split(" ").map(Number);
    list.push([X, Y]);
  }

  const visited = Array(N + 2).fill(false);

  function dfs(from, to, places, visited) {
    if (from === to) return true;

    return places.some((next, i) => {
      if (!visited[i] && calcDist(places[from], next) <= 1000) {
        visited[i] = true;
        const res = dfs(i, to, places, visited);
        if (res) return true;
      }
      return false;
    });
  }

  const result = dfs(0, N + 1, list, visited);
  console.log(result ? "happy" : "sad");
}
