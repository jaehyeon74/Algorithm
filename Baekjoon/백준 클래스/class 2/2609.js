const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map((v)=>v*1).sort((a,b)=>b-a);
let [A,B] = input;

function divisor (n) {
  let arr =[];
  for (let i=1; i<=n; i++) {
    if (n%i==0) arr.push(i)
  }
  return arr;
}

let maxN = divisor(A).filter(x=>divisor(B).includes(x)).pop();
let minN = A * B / maxN;
console.log(maxN);
console.log(minN);