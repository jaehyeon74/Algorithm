const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = +fs.readFileSync(filePath).toString().trim();

let count_five = Math.floor(input / 5);
let count_25 = Math.floor(input / 25);
let count_125 = Math.floor(input / 125);

console.log(count_five + count_25 + count_125);
