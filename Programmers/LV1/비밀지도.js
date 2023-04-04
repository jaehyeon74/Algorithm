function solution(n, arr1, arr2) {
  var answer = [];
  const Digit2Arr1 = arr1.map((v) => changeTo2Digit(v, n));
  const Digit2Arr2 = arr2.map((v) => changeTo2Digit(v, n));
  for (let i = 0; i < n; i++) {
    answer.push(numToPattern(n, Digit2Arr1[i], Digit2Arr2[i]));
  }
  return answer;
}

function changeTo2Digit(num, N) {
  let answer = "";
  let Mock = Math.floor(num / 2);
  let Namuji = num % 2;
  answer = Namuji + answer;

  for (let i = 2; i <= N; i++) {
    Namuji = Mock % 2;
    Mock = Math.floor(Mock / 2);
    answer = Namuji + answer;
  }

  return answer;
}

function numToPattern(n, num1, num2) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    if (num1[i] == "1" || num2[i] == "1") answer += "#";
    else answer += " ";
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
