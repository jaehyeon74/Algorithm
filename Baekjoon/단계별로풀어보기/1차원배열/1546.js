let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = parseInt(input[0]);
let arr =input[1]
        .split(" ")
        .map((el)=>parseInt(el));

let maxNum = Math.max.apply(null,arr);
// Math.max(...arr);
let sum =0;
arr.forEach((score)=>{
  sum += (score/maxNum)*100;
});
console.log(sum/N);
arr.reduce