function solution(priorities, location) {
  var answer = [];
  const alpha = Array.from({ length: priorities.length }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  while (alpha.length) {
    const alphabet = alpha.shift();
    const id = alphabet.charCodeAt(0) - 65;
    const num = priorities[id];
    let hasBiggerNum = false;

    for (let i = 0; i < alpha.length; i++) {
      const comparison = alpha[i];
      const compareNum = priorities[comparison.charCodeAt(0) - 65];
      if (compareNum > num) {
        hasBiggerNum = true;
        break;
      }
    }

    if (hasBiggerNum) {
      alpha.push(alphabet);
    } else {
      answer.push(id);
    }
  }

  return answer.indexOf(location) + 1;
}
