let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i=0; i<input.length; i++) {
  let n =  input[i].split(" ");
  console.log(parseInt(n[0])+parseInt(n[1]));
}