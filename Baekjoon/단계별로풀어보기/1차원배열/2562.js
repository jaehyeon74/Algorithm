let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let arr = input.map((el)=>parseInt(el));
// let arr2 = arr.slice();

// let A = arr.sort((a,b)=>b-a)[0];
// console.log(A);
// console.log(arr2.indexOf(A)+1);

let max = parseInt(input[0]);
let maxIdx =0;

for (let i =0; i<input.length; i++) {
  if (max<parseInt(input[i])) {
    max = parseInt(input[i]);
    maxIdx =i;
  }
}

console.log(max);
console.log(maxIdx);