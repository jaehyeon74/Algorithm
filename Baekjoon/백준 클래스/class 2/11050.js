const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>v*1);
let [A,B] = input;

function factorial (n) {
  let N = Array(n).fill().map((arr,i)=>{return i+1}).reduce((p,c)=>{return p*c},1);
  return N;
}

console.log(factorial(A)/(factorial(B)*factorial(A-B)))
