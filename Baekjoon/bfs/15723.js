const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift()
const graph = Array.from({length:26},()=>Array(26).fill(false))

for (let i=0; i<N; i++) {
  const [from,to] = input.shift().split(' is ')
  const num1 = from.charCodeAt(0)- 'a'.charCodeAt(0)
  const num2 = to.charCodeAt(0)- 'a'.charCodeAt(0)
  graph[num1][num2]=true
}

const M = +input.shift()
const questions = []

for (let i=0; i<M; i++) {
  const [from,to] = input.shift().split(' is ')
  questions.push([from.charCodeAt(0)- 'a'.charCodeAt(0),to.charCodeAt(0)- 'a'.charCodeAt(0)])
}

function floyd() {
  for (let i=0; i<26; i++) {
    for (let j=0; j<26; j++) {
      for (let k=0; k<26; k++) {
        graph[j][k] = graph[j][k] || graph[j][i] && graph[i][k]
      }
    }
  }
}

floyd()

questions.forEach(([from,to])=>{
  if (graph[from][to]) {
    console.log('T')
  } else {
    console.log('F')
  }
})

