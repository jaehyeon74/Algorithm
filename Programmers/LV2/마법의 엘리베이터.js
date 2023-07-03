function solution(storey) {
  // 가장 높은 수를 설정해줍니다.
  let answer = Number.MAX_SAFE_INTEGER;

  // DFS 함수를 만들어줍니다.
  // num 숫자, counter 층
  function dfs(num, counter) {
    // 성능을 위해 기존에 구해둔 answer보다 counter가 높다면 종료시킵니다.
    if (counter >= answer) return;

    // num이 0이 되면 answer에 현재 까지 더한 층 값을 넣어줍니다.
    if (num === 0) answer = counter;
    else {
      // num이 0이 아닐시 일단 일의 자리 수를 구하고
      let res = num % 10;

      // 재귀를 통해 DFS(깊이우선탐색)을 실행합니다.
      // 층을 내려갔을 경우
      // num으로 그냥 나누기 10을 하고 counter로는 미리 구한 값을 더해줍니다.
      dfs(Math.floor(num / 10), counter + res);

      // 층을 올라갔을 경우
      // num을 10으로 나누고 올라가기 떄문에 1층을 더해줍니다.
      // counter는 10층에서 구한 값을 뺸 값을 더해줍니다.
      dfs(Math.floor(num / 10) + 1, counter + 10 - res);
    }
  }
  dfs(storey, 0);
  return answer;
}
