"use strict";

function solution(k, tangerine) {
  let cache = {};
  tangerine.forEach((v) => {
    if (`${v}` in cache) cache[v] += 1;
    else cache[v] = 1;
  });

  const counts = Object.values(cache).sort((a, b) => b - a);
  let total = k;
  let answer = 0;
  for (let i = 0; i < counts.length; i++) {
    answer += 1;
    total -= counts[i];
    if (total <= 0) break;
  }
  return answer;
}

// 서로 다른 종류의 수 최소화하기

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
