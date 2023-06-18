const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

function row_check(s, column, sign) {
  for (let i = 0; i < 3; i++) {
    if (sign !== s[3 * i + column]) return false;
  }
  return true;
}

function column_check(s, row, sign) {
  for (let i = 0; i < 3; i++) {
    if (sign !== s[3 * row + i]) return false;
  }
  return true;
}

function diagonal_check(s, sign) {
  if (s[4] === sign && s[4] === s[0] && s[4] === s[8]) {
    return true;
  }
  if (s[4] === sign && s[4] === s[2] && s[4] === s[6]) {
    return true;
  }
  return false;
}

function check(str) {
  let count_O = 0;
  let count_X = 0;
  let isXWin = 0;
  let isOWin = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;
      if (str[id] === "O") count_O++;
      else if (str[id] === "X") count_X++;
    }
  }

  if (count_O > count_X) return false;
  if (count_X - count_O > 1) return false;

  for (let i = 0; i < 3; i++) {
    if (row_check(str, i, "X") || column_check(str, i, "X")) isXWin++;
  }
  for (let i = 0; i < 3; i++) {
    if (row_check(str, i, "O") || column_check(str, i, "O")) isOWin++;
  }
  if (diagonal_check(str, "X")) isXWin++;
  if (diagonal_check(str, "O")) isOWin++;

  if (isXWin > isOWin) {
    if (count_X - count_O === 1) return true;
  } else if (isOWin > isXWin) {
    if (count_X - count_O === 0) return true;
  } else {
    if (isXWin === 0 && count_O === 4 && count_X === 5) return true;
  }

  return false;
}

input.forEach((eachCase) => {
  const result = check(eachCase) ? "valid" : "invalid";
  console.log(result);
});

// X 가 승리했는지, O가 승리했는지
// X가 승리했으면 X의 갯수가 무조건 하나 많아야 함
// O가 승리했으면 X와 O의 갯수가 같아야 함
// 둘 다 승리하지 못했을 경우 둘의 갯수는 각각 5, 4여야 한다
// 그 외의 경우 모두 false 처리
// 둘다 승리하는 경우도 제외해야 할 듯
