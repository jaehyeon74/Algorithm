let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);
let arr =[];
for (let i=1; i<=count; i++) {
  let score = input[i].split(" ");
  let num2 = score.shift()*1;
  let count =0;

  let avg = score.map((v)=>parseInt(v)).reduce((prev,cur)=>prev+cur,0);
  avg/=num2;

  for (let j =0; j<num2; j++) {
    if (Number(score[j])>avg) {
      count++;
    }
  }
  let result = ((count/num2)*100).toFixed(3);
  console.log(result+"%");
}
