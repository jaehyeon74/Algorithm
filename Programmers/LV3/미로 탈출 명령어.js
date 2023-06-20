function solution(n, m, x, y, r, c, k) {
  const stack = [[x, y, []]];
  let result = "impossible";

  while (stack.length) {
    const [x_pos, y_pos, path] = stack.pop();
    if (path.length === k && x_pos === r && y_pos === c) {
      result = path.join("");
      break;
    }
    let remain = k - path.length;
    let shortest_path = Math.abs(x_pos - r) + Math.abs(y_pos - c);
    if (remain < shortest_path || remain % 2 !== shortest_path % 2) continue;
    if (x_pos > 1) stack.push([x_pos - 1, y_pos, [...path, "u"]]);
    if (y_pos < m) stack.push([x_pos, y_pos + 1, [...path, "r"]]);
    if (y_pos > 1) stack.push([x_pos, y_pos - 1, [...path, "l"]]);
    if (x_pos < n) stack.push([x_pos + 1, y_pos, [...path, "d"]]);
  }
  return result;
}
