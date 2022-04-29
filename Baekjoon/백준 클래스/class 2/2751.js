const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>parseInt(v));
input.shift()
let arr = input.sort((a,b)=>a-b)
let result = arr[0] + '\n';

for (let i=0; i<arr.length; i++) {
  if (i>=1 && arr[i]!==arr[i-1]) {
    result += arr[i] +'\n';
  }
}

console.log(result.trim());
