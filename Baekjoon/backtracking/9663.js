const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim();

// 백트랙킹 N-Queen
// DFS 알고리즘을 통해 퀸을 하나씩 배치해서 다음 칸에 배치할 수 있는지 확인
function solution(n) {
  let answer = 0;

  const dfs = (board, row) => {
    if (row === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        board[row + 1] = i; // 다음 라인에 퀸을 배치
        if (isValid(board, row + 1)) dfs(board, row + 1);
        // 1차원 배열로 매번 값을 덮어쓰기 때문에 미방문 처리를 해줄 필요가 없다
        // 정답은 최종라인까지 도달해야 하나씩 카운트되기 때문에 초기화할 필요가 없다
      }
    }
  };

  const isValid = (board, row) => {
    for (let i = 1; i < row; i++) {
      if (board[i] === board[row]) return false;
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
    }
    return true;
  };

  for (let i = 1; i <= n; i++) {
    const board = new Array(n + 1).fill(0);
    board[1] = i; // 체스판의 첫번째 세로라인 중 i 칸에 퀸을 배치
    dfs(board, 1); // 배치가 완료된 체스판과 현재 세로 라인인 1을 dfs 함수에 전달
  }

  return answer;
}

console.log(solution(+input));
