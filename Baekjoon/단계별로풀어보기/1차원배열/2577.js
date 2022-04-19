let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);
let N = (A*B*C).toString().split("");

for (i=0; i<=9; i++) {
  const result = N.filter((num)=>{
    return Number(num)==i;
  });
  console.log(result.length);
}