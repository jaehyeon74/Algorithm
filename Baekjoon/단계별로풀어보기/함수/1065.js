let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let count =0;
function grad (n) {
  if (n<100) {
    return n;
  }
  if (n>=100 && n<=1000) {
    for (let i=100; i<=n; i++) {
      let a = Math.floor(i/100);
      let b = Math.floor(i/10)%10;
      let c = i%10;
      if (a == 2*b-c) {
        count+=1;
      }
    }
    return count + 99;
  }
}
console.log(grad(input));