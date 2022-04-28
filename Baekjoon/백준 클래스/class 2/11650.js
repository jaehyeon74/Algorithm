const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = '';
let arr= input.sort((a,b)=>{
  let x = a.split(" ")[0];
  let y = b.split(" ")[0];
  if (x==y) return (a.split(" ")[1]-b.split(" ")[1]);
  return x-y;
}).forEach((elem)=>{
  result += elem + '\n';
})

console.log(result);

