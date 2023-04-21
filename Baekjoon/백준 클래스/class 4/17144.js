const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. 미세먼지는 동시 확산해야 됨
// 2. 공기청정기가 맨 위나 맨 아래에 붙어있다면?

// 문제 풀이 순서
// 1. 공기 청정기의 위치를 찾는다
// 2. while문을 통해 T 값을 줄여서 0보다 클 떄까지 미세먼지를 날리는 함수랑
// 공기 청정기를 돌리는 함수를 실행
// 3. T초 후 전체 먼지의 갯수를 구함

function solution(input) {
  let [R, C, T] = input.shift().split(" ").map(Number);
  input = input.map((v) => v.split(" ").map(Number));
  let answer = 0;
  let upperCleaner = 0;
  let lowerCleaner = 0;
  let flag = false;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  // 공기 청정기 위치 찾기
  for (let row = 0; row < R; row++) {
    for (let col = 0; col < C; col++) {
      if (input[row][col] === -1) {
        upperCleaner = row;
        lowerCleaner = row + 1;
        flag = true;
        break;
      }
    }
    if (flag) break;
  }

  // 미세먼지 확산
  function spreadDust() {
    let spreadList = [];
    for (let row = 0; row < R; row++) {
      for (let col = 0; col < C; col++) {
        if (input[row][col] > 0) {
          const value = Math.floor(input[row][col] / 5);
          for (let i = 0; i < 4; i++) {
            const [nRow, nCol] = [row + dx[i], col + dy[i]];
            if (
              nRow < 0 ||
              nRow >= R ||
              nCol < 0 ||
              nCol >= C ||
              input[nRow][nCol] === -1
            )
              continue;
            spreadList.push([nRow, nCol, value]);
            input[row][col] -= value;
          }
        }
      }
    }

    for (let spread of spreadList) {
      const [row, col, value] = spread;
      input[row][col] += value;
    }
  }

  // 위쪽 공기청정기 순환 (반시계방향)
  function rotateUp(cleanerRow) {
    for (let row = cleanerRow - 2; row >= 0; row--) {
      input[row + 1][0] = input[row][0];
    }

    for (let col = 1; col < C; col++) {
      input[0][col - 1] = input[0][col];
    }

    for (let row = 1; row <= cleanerRow; row++) {
      input[row - 1][C - 1] = input[row][C - 1];
    }

    for (let col = C - 2; col > 0; col--) {
      input[cleanerRow][col + 1] = input[cleanerRow][col];
    }

    input[cleanerRow][1] = 0;
  }

  // 아래쪽 공기청정기 순환 (시계방향)
  function rotateDown(cleanerRow) {
    for (let row = cleanerRow + 2; row < R; row++) {
      input[row - 1][0] = input[row][0];
    }

    for (let col = 1; col < C; col++) {
      input[R - 1][col - 1] = input[R - 1][col];
    }

    for (let row = R - 2; row >= cleanerRow; row--) {
      input[row + 1][C - 1] = input[row][C - 1];
    }

    for (let col = C - 2; col > 0; col--) {
      input[cleanerRow][col + 1] = input[cleanerRow][col];
    }

    input[cleanerRow][1] = 0;
  }

  // 남아있는 미세먼지 양 계산
  function countDust() {
    let result = 0;
    for (let row = 0; row < R; row++) {
      for (let col = 0; col < C; col++) {
        if (input[row][col] > 0) result += input[row][col];
      }
    }
    return result;
  }

  // T 만큼 진행 (확산 -> 위쪽 순환 -> 아래쪽 순환)
  while (T--) {
    spreadDust();
    rotateUp(upperCleaner);
    rotateDown(lowerCleaner);
  }

  answer = countDust();
  return answer;
}

console.log(solution(input));
