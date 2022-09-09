const fs = require('fs');
const N = fs.readFileSync('/dev/stdin').toString() * 1;

function solution(N) {
  let answer = 0;
  for (let i = 0; i <= N; i++) {
    let tempNumber = 0;
    let sumDisits = 0;
    let n = i;
    do {
      sumDisits += n % 10;
      n = Math.floor(n / 10);
    } while (n > 0);

    tempNumber = i + sumDisits;
    if (tempNumber === N) {
      answer = i;
      break;
    }
  }

  return answer;
}

console.log(solution(N));
