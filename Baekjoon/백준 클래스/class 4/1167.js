const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const sol = (input) => {
  const N = +input.shift();
  const tree = Array.from({ length: N + 1 }, () => []);
  input.map((str) => {
    const [node, ...nextInfo] = str.split(" ").map(Number);
    for (let i = 0; i < nextInfo.length - 1; i += 2) {
      tree[node].push([nextInfo[i], nextInfo[i + 1]]);
    }
  });
  let check = Array(N + 1).fill(0);
  let max = { node: 0, dist: Number.MIN_SAFE_INTEGER };

  function dfs(node, dist) {
    check[node] = 1;
    if (max.dist < dist) max = { node, dist };
    for (let [nextNode, nextDist] of tree[node]) {
      if (check[nextNode]) continue;
      dfs(nextNode, dist + nextDist);
    }
  }

  dfs(1, 0);
  max.dist = Number.MIN_SAFE_INTEGER;
  check = new Array(N + 1).fill(0);

  dfs(max.node, 0);
  return max.dist;
};

console.log(sol(input));

// 트리의 지름은 다음과 같이 구한다
// dfs를 통해 임의의 정점 x으로부터 가장 먼 정점 y 을 구한다
// dfs를 통해 구해진 y 정점으로부터 가장 먼 정점 z를 구한다
// y정점과 z정점을 잇는 경로가 트리의 지름이 된다
