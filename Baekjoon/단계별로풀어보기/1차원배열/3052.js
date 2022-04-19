let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((el)=>parseInt(el));

let arr = input.map((num)=>{
  return num%42;
});
let newArr = arr.reduce((prev,cur)=>{
  if (prev.indexOf(cur)==-1) {
    prev.push(cur);
  }
  return prev;
},[])

console.log(newArr.length);