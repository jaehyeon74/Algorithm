const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let N= Number(input.shift());
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const uniqueValues = new Set(sorted);
console.log(Array.from(uniqueValues).join('\n'));

//2번째 풀이
// const N = input.shift();
// const sorted = [];
// const lengthArr = input.map(str => str.length);
// const max = Math.max.apply(null, lengthArr);
// const min = Math.min.apply(null, lengthArr);

// for (let i = min; i <= max; i++) {
//   const group = [];
//   for (let j = 0; j < N; j++) {
//     if (input[j].length === i) {
//       if (group.indexOf(input[j]) === -1) group.push(input[j]);
//     }
//   }
//   if (group.length > 1) {
//     sorted.push(...group.sort());
//   } else {
//     sorted.push(...group);
//   }
// }