const [N, M, S] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(solution(N * 1, M * 1, S));

function solution(N, M, S) {
  let count = 0;
  // 원하는 패턴인지 확인할 변수
  let ioiPattern = 0;

  // O(n) 문자열을 한바퀴 돌면서 조건 확인
  for (let i = 0; i < M - 2; i++) {
    // IOI 인 경우 카운트 시작
    if (S[i] === "I" && S[i + 1] === "O" && S[i + 2] === "I") {
      ioiPattern++;

      // 원하는 패턴인 경우
      if (ioiPattern === N) {
        ioiPattern--;
        count++;
      }

      // o는 볼 필요 없음
      i++;
    } else {
      ioiPattern = 0;
    }
  }

  return count;
}
