function solution(numbers, hand) {
  let answer = "";
  let left = [3, 0];
  let right = [3, 2];
  for (let i = 0; i < numbers.length; i++) {
    const N = numbers[i];
    if (N === 1 || N === 4 || N === 7) {
      answer += "L";
      left = calcPos(N);
    } else if (N === 3 || N === 6 || N === 9) {
      answer += "R";
      right = calcPos(N);
    } else {
      let cur = calcPos(N);
      const leftD = calcD(cur, left);
      const rightD = calcD(cur, right);

      if (leftD < rightD) {
        answer += "L";
        left = cur;
      } else if (leftD > rightD) {
        answer += "R";
        right = cur;
      } else {
        const str = hand === "left" ? "L" : "R";
        answer += str;
        str === "L" ? (left = cur) : (right = cur);
      }
    }
  }

  function calcPos(num) {
    if (num === 0) return [3, 1];
    const a = Math.floor((num - 1) / 3);
    const b = (num - 1) % 3;
    return [a, b];
  }

  function calcD(target, cur) {
    return Math.abs(target[0] - cur[0]) + Math.abs(target[1] - cur[1]);
  }
  return answer;
}
