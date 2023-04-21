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

function LCS(string1, string2) {
  const lcs = (s1, s2, memo = {}) => {
    if (!s1 || !s2) return "";
    if (memo[`${s1}:${s2}`]) return memo[`${s1}:${s2}`];
    if (s1[0] === s2[0])
      return s1[0] + lcs(s1.substring(1), s2.substring(1), memo);

    const nextLCS1 = lcs(s1.substring(1), s2, memo);
    const nextLCS2 = lcs(s1, s2.substring(1), memo);
    const nextLongest =
      nextLCS1.length >= nextLCS2.length ? nextLCS1 : nextLCS2;

    memo[`${s1}:${s2}`] = nextLongest;

    return nextLongest;
  };

  return lcs(string1, string2);
}

console.log(LCS(S1, S2));
