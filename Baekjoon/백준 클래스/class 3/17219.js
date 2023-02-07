const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

function solution(num1, num2, problems) {
  let map = new Map();
  let answer = [];

  problems.forEach((v, i) => {
    if (i < num1) {
      const [key, value] = v.split("\r")[0].split(" ");
      map.set(key, value);
    } else {
      const key = v.split("\r")[0];
      answer.push(map.get(key));
    }
  });
  return answer.join("\n");
}
console.log(solution(N, M, input));
