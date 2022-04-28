const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input.shift());

let arr= input.map((user)=>{
  age = parseInt(user.split(" ")[0]);
  userName = String(user.split(" ")[1]);
  return { age, userName};
});

let result = arr.sort((x,y)=>{return x.age-y.age})
                .map((obj)=>{
                  return `${obj.age} ${obj.userName}`;
                });

for (x of result) {
  console.log(x);
}