let input = require('fs').readFileSync('/dev/stdin').toString();
let n = parseInt(input);
let count =0;
let cycleNumber =0;

//풀이1
do {
  count +=1;
  if (count ==1) {
    if (n<10) {
      cycleNumber = 11*n;
    } else {
      cycleNumber = (n%10 + (n-n%10)/10) %10 + (n%10)*10;
    }
  }
  if (count>1) {
    if (cycleNumber<10) {
      cycleNumber = 11*cycleNumber;
    } else {
      cycleNumber = (cycleNumber%10 + (cycleNumber-cycleNumber%10)/10) %10 + (cycleNumber%10)*10;
    }
  }
} while (cycleNumber !== n)

console.log(count);

//풀이2

let num = input;
let sum;
let i=0;
while (true) {
  i++;

  sum = Math.florr(num/10) + num %10;
  num = (num%10)*10 +sum%10;

  if (input === num) {
    break;
  }
}

console.log(i);