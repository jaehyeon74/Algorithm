let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let N = parseInt(input.shift());

for (let i=0; i<(N); i++) {
  let answer = '';
  const [num2, str] = input[i].split(' ');
  for (let j=0; j<str.length; j++) {
    answer += str[j].repeat(num2);
  }
  console.log(answer);
}