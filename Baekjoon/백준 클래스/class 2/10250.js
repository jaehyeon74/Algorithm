const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const allLeng = Number(input[0])

const findRoomNum = (arrs) => {
  const [floornum, roomnum, clientnum] = arrs.split(' ').map(ele=>Number(ele))
  let cnt = 0
  for(let i=1; i<=roomnum; i++){
    for(let j=1; j<=floornum; j++){
      cnt++
      if(cnt===clientnum){
        console.log(Number(String(j)+String(i<10?"0"+String(i):i)))
        break;
      }}
    if(cnt===clientnum) break
  }}

for(let k=1; k<=allLeng; k++) findRoomNum(input[k]);


// 풀었지만 백준에서 오류남
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

// let T = parseInt(input.shift());

// function getRoomNumber (a,c) {
//   let share = Math.floor(c/a);
//   let remainder = c%a;
//   return (remainder*100 + share +1);
// }
// for (let i=0; i<T; i++) {
//   let HWN= input[i].split(' ');
//   let H = parseInt(HWN.shift());
//   HWN.shift();
//   let N = parseInt(HWN.shift());
//   console.log(getRoomNumber(H,N));
// }