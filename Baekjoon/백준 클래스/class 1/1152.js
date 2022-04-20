let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let wordsArr = input.trim().split(' '); 
let countOfWords = 0;

for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i] !== '') {
    countOfWords++;
  }
}

console.log(countOfWords);