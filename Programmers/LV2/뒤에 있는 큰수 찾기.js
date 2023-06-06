// function solution(numbers) {
//     let answer = []
//     let i =0;
//     let j =0;
//     while (i<numbers.length) {
//         const cur = numbers[i]
//         const after = numbers[j]
//         if (j >= numbers.length) {
//             answer.push(-1)
//             i = i + 1
//             j = i+1
//             continue
//         }
//         if (i===j) {
//             j++
//         } else {
//             if (cur < after) {
//                 answer.push(after)
//                 i++
//             } else {
//                 j++
//             }
//         }
//     }
//     return answer;
// }

function solution(numbers) {
  const stack = [];
  let answer = Array(numbers.length).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  while (stack.length) {
    answer[stack.pop()] = -1;
  }
  return answer;
}
