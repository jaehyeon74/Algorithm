const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N =input.length;
for (let i=0; i<N-1; i++) {
  let arr = input[i].split(" ").map((v)=>v*1).sort((a,b)=>a-b);
  let [a,b,c] = arr;
  console.log(isTriangle(a,b,c));
}
function isTriangle (a,b,c) {
  let X = Math.pow(a,2)+Math.pow(b,2);
  let Y = Math.pow(c,2);
  if (X==Y) {
    return 'right';
  } else {
    return 'wrong'
  }
}