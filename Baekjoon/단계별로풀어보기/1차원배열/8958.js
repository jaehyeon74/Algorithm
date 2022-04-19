// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let N = Number(input.shift());

// let result = [];
// let sum =0;
// let answer = "";

// for (let i=0; i<=(N-1); i++) {
//   result = input[i].trim().split('X').filter((el)=>el);
//   sum = result.map((str)=>str.length)
//               .map((n)=>(n)*(n+1)/2)
//               .reduce((prev,cur)=>prev+cur);
//   console.log(sum);
// }

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    
    sum += count;
  }
  
  console.log(sum);
}



