function solution(s, n) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    const num = s.charCodeAt(i);
    if (num >= 65 && num <= 90) {
      const newNum = 65 + ((num + n - 65) % 26);
      str += String.fromCharCode(newNum);
    } else if (num >= 97 && num <= 122) {
      const newNum = 97 + ((num + n - 97) % 26);
      str += String.fromCharCode(newNum);
    } else {
      str += " ";
    }
  }
  return str;
}
