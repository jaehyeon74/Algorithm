function solution(k, dungeons) {
  let answer = 0;
  const visited = Array(dungeons.length).fill(false);
  function dfs(strength, count) {
    answer = Math.max(answer, count);
    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      if (strength >= dungeons[i][0]) {
        dfs(strength - dungeons[i][1], count + 1);
      }
      visited[i] = false;
    }
  }
  dfs(k, 0);
  return answer;
}
