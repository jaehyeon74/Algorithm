let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = "";
let X =0;

for (let i=97; i<=122; i++) {
  X = String.fromCharCode(i);
  result += `${input.indexOf(X)} `;
}

console.log(result);