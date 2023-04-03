function solution(brown, yellow) {
  let realAnswer = [];
  let gob = +brown + +yellow;
  const answer = [];
  for (let i = 1; i <= gob; i++) {
    if (gob % i === 0) answer.push(i);
  }
  const length = answer.length;
  const limit = Math.floor(length / 2);

  for (let i = 0; i <= limit; i++) {
    const pair = answer[length - 1 - i];
    const val = 2 * (answer[i] + pair) - 4;
    if (val === +brown || val === +yellow) realAnswer = [pair, answer[i]];
  }
  return realAnswer;
}
