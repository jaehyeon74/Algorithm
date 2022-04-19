// 못 푼 문제
let input = require('fs').readFileSync('example.txt').toString().toUpperCase();

const result = new Array(26).fill(0);

for (let i=0; i<input.length; i++) {
  // 문자열의 길이 동안 반복해야 되므로 26이 아니라 input.length이다!!
  result [input.charCodeAt(i)-65]++;
}

let max = Math.max(...result);
let index = result.indexOf(max);

let isSame = false;

for (let j=0; j<26; j++) {
  if (result[j]==max && j!==index) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index+65));