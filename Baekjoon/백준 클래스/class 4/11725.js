let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();
const tree = Array.from({ length: N + 1 }, () => []);
const check = new Array(N + 1).fill(0);
input = input.map((e) => e.split(" ").map(Number));
for (let [from, to] of input) {
  tree[from].push(to);
  tree[to].push(from);
}

const queue = [];
check[1] = 1;
for (let next of tree[1]) {
  check[next] = 1;
  queue.push(next);
}

while (queue.length) {
  const cur = queue.shift();
  for (let next of tree[cur]) {
    if (!check[next]) {
      check[next] = cur;
      queue.push(next);
    }
  }
}

const result = check.slice(2).join("\n");

console.log(result);
