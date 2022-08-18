const fs = require('fs');
const N = fs.readFileSync('11653.txt').toString() * 1;

function solution(N) {
  if (N === 1) return;
  let number = N;
  let result = [];
  for (let i = 2; i <= Math.floor(N); i++) {
    if (number / i === Math.round(number / i)) {
      result.push(i);
      number = number / i;
      if (number === 1) break;
      i--;
    }
  }
  if (result.length < 1) console.log(N);
  else console.log(result.join('\n'));
}
solution(N);
