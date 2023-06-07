function solution(numbers) {
  let answer_list = [];
  for (let number of numbers) answer_list.push(number.toString());
  // 내림차순
  answer_list.sort(function (a, b) {
    return b + a - (a + b);
  });

  return answer_list.join("")[0] == "0" ? "0" : answer_list.join("");
}
