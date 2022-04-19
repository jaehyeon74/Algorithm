let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map((v)=>v*1).map((v)=>v**2);

let result = input.reduce((p,c)=>{
  return (p+c)%10;
},0)

console.log(result);