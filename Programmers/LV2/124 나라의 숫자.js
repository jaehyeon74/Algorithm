function solution(n) {
  var answer = "";
  const digit = [1, 2, 4];
  while (n > 3) {
    answer = digit[(n - 1) % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }
  answer = digit[(n - 1) % 3] + answer;
  return answer;
}
