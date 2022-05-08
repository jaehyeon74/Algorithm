const stack = [];
let top = 0;
let answer = "";

const cmdObj = {
  push: (x) => (stack[top++] = x),            // 1. arrow function
  pop: () => {
    if (top) {
      top--;
      return stack.splice(-1);
    } else return -1;
  },
  size: () => top,
  empty: () => (!top ? 1 : 0),
  top: () => (top ? stack[top - 1] : -1),    // 2. 삼항 조건 연산자
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  input.map((line, idx) => {                // 3. map함수의 두번째 인자
    if (idx === 0) return;
    const [cmd, num] = line.split(" ");        // 4. 구조분해할당
    if (cmd === "push") {
      cmdObj[cmd](parseInt(num));
    } else answer += `${cmdObj[cmd]()}\n`;    // 5. 템플릿리터럴
  });

  console.log(answer);
  process.exit();
});