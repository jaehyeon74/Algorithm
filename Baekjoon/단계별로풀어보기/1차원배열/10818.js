let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr = input[1].split(" ").map((el)=>parseInt(el));

arr.sort((a,b)=>a-b);
console.log(arr[0],arr[arr.length-1]);


// const minNum = Math.min.apply(null,arr);
// const maxNum = Math.max.apply(null,arr);

// console.log(minNum,maxNum);