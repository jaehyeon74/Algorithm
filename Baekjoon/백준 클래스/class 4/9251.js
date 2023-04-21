// LCS
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.replace("\r", ""));

const [S1, S2] = input;

function LongestCommonSubsequence(s1, s2) {
  const lcsMatrix = Array.from({ length: s2.length + 1 }, () =>
    Array(s1.length + 1).fill(null)
  );
  for (let columnIndex = 0; columnIndex <= s1.length; columnIndex++) {
    lcsMatrix[0][columnIndex] = 0;
  }
  for (let rowIndex = 0; rowIndex <= s2.length; rowIndex++) {
    lcsMatrix[rowIndex][0] = 0;
  }
  for (let rowIndex = 1; rowIndex <= s2.length; rowIndex++) {
    for (let columnIndex = 1; columnIndex <= s1.length; columnIndex++) {
      if (s1[columnIndex - 1] === s2[rowIndex - 1]) {
        lcsMatrix[rowIndex][columnIndex] =
          lcsMatrix[rowIndex - 1][columnIndex - 1] + 1;
      } else {
        lcsMatrix[rowIndex][columnIndex] = Math.max(
          lcsMatrix[rowIndex - 1][columnIndex],
          lcsMatrix[rowIndex][columnIndex - 1]
        );
      }
    }
  }

  if (!lcsMatrix[s2.length][s1.length]) return "";
  const longestSequence = [];
  let columnIndex = s1.length;
  let rowIndex = s2.length;

  while (columnIndex > 0 || rowIndex > 0) {
    if (s1[columnIndex - 1] === s2[rowIndex - 1]) {
      longestSequence.unshift(s1[columnIndex - 1]);
      columnIndex -= 1;
      rowIndex -= 1;
    } else if (
      lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]
    ) {
      columnIndex -= 1;
    } else {
      rowIndex -= 1;
    }
  }

  return longestSequence.join("");
}

console.log(LongestCommonSubsequence(S1, S2));
