const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [[R, C, T], ...dust] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

function solve(R, C, T, dust) {
  const ds = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const cleaner = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (dust[i][j] == -1) cleaner.push([j, i]);
    }
  }

  cleaner.sort((a, b) => a[1] - b[1]);

  const [upCleaner, downCleaner] = cleaner;

  function spread() {
    const copyArr = Array.from({ length: R }, () => Array(C).fill(0));

    for (let y = 0; y < R; y++) {
      for (let x = 0; x < C; x++) {
        const dustAmount = dust[y][x];
        if (dustAmount <= 0) continue;
        for (let k = 0; k < 4; k++) {
          const dx = x + ds[k][0];
          const dy = y + ds[k][1];
          if (dx >= 0 && dx < C && dy >= 0 && dy < R && dust[dy][dx] !== -1) {
            const mock = Math.floor(dustAmount / 5);
            dust[y][x] -= mock;
            copyArr[dy][dx] += mock;
          }
        }
      }
    }

    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (dust[i][j] !== -1) {
          dust[i][j] += copyArr[i][j];
        }
      }
    }
  }
  function cleanUp() {
    const upCleaner_Y = upCleaner[1];

    for (let Y = upCleaner_Y - 1; Y >= 1; Y--) {
      dust[Y][0] = dust[Y - 1][0];
    }

    for (let X = 0; X < C - 1; X++) {
      dust[0][X] = dust[0][X + 1];
    }

    for (let Y = 0; Y < upCleaner_Y; Y++) {
      dust[Y][C - 1] = dust[Y + 1][C - 1];
    }

    for (let X = C - 1; X >= 1; X--) {
      dust[upCleaner_Y][X] = dust[upCleaner_Y][X - 1];
    }
    dust[upCleaner_Y][1] = 0;
  }
  function cleanDown() {
    const downCleaner_Y = downCleaner[1];
    for (let Y = downCleaner_Y + 1; Y < R - 1; Y++) {
      dust[Y][0] = dust[Y + 1][0];
    }

    for (let X = 0; X < C - 1; X++) {
      dust[R - 1][X] = dust[R - 1][X + 1];
    }

    for (let Y = R - 1; Y > downCleaner_Y; Y--) {
      dust[Y][C - 1] = dust[Y - 1][C - 1];
    }

    for (let X = C - 1; X >= 1; X--) {
      dust[downCleaner_Y][X] = dust[downCleaner_Y][X - 1];
    }
    dust[downCleaner_Y][1] = 0;
  }
  function getSum() {
    let sum = 0;
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (dust[i][j] > 0) sum += dust[i][j];
      }
    }
    return sum;
  }

  while (T--) {
    spread();
    cleanUp();
    cleanDown();
  }

  const answer = getSum();
  return answer;
}

console.log(solve(R, C, T, dust));
