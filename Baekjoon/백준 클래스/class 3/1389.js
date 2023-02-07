const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);
const edges = input.map((v) => v.split(" ").map(Number));
const bacon = Array(N + 1).fill(0);
const graph = Array.from({ length: N + 1 }, () => []);
edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const BFS = (start) => {
  const visited = Array(N + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length) {
    let [node, count] = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      bacon[start] += count++;
      graph[node].forEach((v) => queue.push([v, count]));
    }
  }
};

for (let i = 1; i <= N; i++) {
  BFS(i);
}

bacon.shift();
console.log(bacon.indexOf(Math.min(...bacon)) + 1);
// BFS에서 queue에 [사람, 단계 수]를 push하면서

// 처음 방문하는 노드일 경우 start번째 사람의 베이컨 단계를 count만큼 더하고,

// queue에는 node번째 사람과 연결된 사람들을 [사람, 단계 수 + 1]로 push한다.

// 이렇게 하면 bacon[start]에는 start번째 사람의 베이컨 단계가 저장된다.

// start를 1부터 N까지 반복문으로 BFS를 하면 모든 사람의 베이컨 단계가 bacon에 저장된다.

// 마지막으로 bacon의 최솟값의 인덱스를 출력한다.

// (0번째 인덱스가 포함되면 최솟값이 항상 0으로 잘못 나오기 때문에 shift한 뒤,

// indexOf로 구한 인덱스에 1을 더해준다.)
