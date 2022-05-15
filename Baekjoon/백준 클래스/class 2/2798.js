const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let X = input.shift().split(' ')
let N = Number(X[0]);
let maximum = Number(X[1]);
let arr = input[0].split(' ').map(v=>v*1).sort((a,b)=>a-b);

let max =0;

for (let i=0; i<N-2; i++) {
  for (let j=i+1; j<N-1; j++) {
    for (let k= j+1; k<N; k++) {
      let sum = arr[i] +arr[j] + arr[k];
      if (sum<=maximum && sum>max) {
        max = sum;
      }
    }
  }
}

console.log(max)