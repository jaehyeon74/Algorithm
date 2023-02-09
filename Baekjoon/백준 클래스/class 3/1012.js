const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const T = input.shift() * 1;

function BFS([startX, startY], lengthX, lengthY, Map) {
  const queue = [[startX, startY]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (!Map[x][y]) continue;
    else Map[x][y] = 0;

    for (let i = 0; i < 4; i++) {
      const [directionsX, directionsY] = directions[i];
      const X = directionsX + x;
      const Y = directionsY + y;
      if (X < lengthX && Y < lengthY && X >= 0 && Y >= 0 && Map[X][Y]) {
        queue.push([X, Y]);
      }
    }
  }
}

for (let i = 0; i < T; i++) {
  let count = 0;
  const [M, N, K] = input.shift().split(" ").map(Number);
  const map = Array.from({ length: M }, () => Array(N).fill(0));
  for (let k = 0; k < K; k++) {
    const [baechuX, baechuY] = input.shift().split(" ").map(Number);
    map[baechuX][baechuY] = 1;
  }

  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      if (map[x][y] == 1) {
        BFS([x, y], M, N, map);
        count++;
      }
    }
  }
  console.log(count);
}

// 1. 각 테스트 케이스별 그래프를 그린다
// 2. 배추가 심어져있는 위치를 1로 변경
// 3. 이차원배열로 되어있는 그래프를 탐색하며 1을 찾는다
// 4. 위치한 1을 기준으로 상하좌우 탐색하여 모두 0으로 만들어준다
// 5. 필요한 벌레의 마리수를 +1한다
// 6. 계속 반복
