const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let AB = input.shift().split(' ');
let A = Number(AB[0]);
let B = Number(AB[1]);
let returnArr = [];

let whiteFirst = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
]

let blackFirst = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB'
]

function printWhiteFirst(x,y) {
  let count = 0;
  for (let i=y; i<y+8; i++) {
    for (let j=x; j<x+8; j++) {
      if (input[i][j]!==whiteFirst[i-y][j-x]) {
        count++;
      }
    }
  }
  return count++;
}

function printBlackFirst(x,y) {
  let count = 0;
  for (let i=y; i<y+8; i++) {
    for (let j=x; j<x+8; j++) {
      if (input[i][j]!==blackFirst[i-y][j-x]) {
        count++;
      }
    }
  }
  return count++;
}

for (let i=0; i<=B-8; i++) {
  for (let j=0; j<=A-8; j++) {
    returnArr.push(printWhiteFirst(j,i))
    returnArr.push(printBlackFirst(j,i))
  }
}
console.log(Math.min(...returnArr))


