let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.pop();

for (let i = 0; i < input.length; i++) {
	let reverseStr = input[i].split("").reverse().join("");
	console.log(input[i] === reverseStr ? "yes" : "no");
}

// const input = require('fs').readFileSync('example.txt').toString().split('\n');
// console.log(input);
// const N = input.length;

// function palindrome (num) {
//   let a = Math.floor((num.length)/2);
//   if (num.length%2==0) {
//     let x = num.slice(0,a).split('');
//     let y = num.slice(a).split('');
//     console.log(JSON.stringify(x)==JSON.stringify(y.reverse()) ? 'yes' : 'no');
//   } else {
//     let x = num.slice(0,a).split('');
//     let y = num.slice(a+1).split('');
//     console.log(JSON.stringify(x)==JSON.stringify(y.reverse()) ? 'yes' : 'no');
//   }
// }

// for (let i=0; i<N-1; i++) {
//   let X = parseInt(input[i]);
//   palindrome(`${X}`);
// }