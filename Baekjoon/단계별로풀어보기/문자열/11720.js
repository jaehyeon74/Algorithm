let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let result =0;
let n = parseInt(input[0]);
let sum = input[1].split("").map((el)=>el*1);
sum.forEach((num)=>result+=num);
console.log(result);