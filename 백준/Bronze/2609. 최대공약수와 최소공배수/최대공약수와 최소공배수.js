const fs = require('fs');
let [N, M] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// 소인수 분해 후 이중 for문 실행하면 시간초과
// 유클리드 호제법
function solution(N, M) {
  let max = Math.max(N, M);
  let min = Math.min(N, M);
  let LCM = 1; //최소공배수
  let GCD = min; //최대공약수
  while (max % min !== 0) {
    let n = max % min;
    max = min;
    min = n;
    GCD = n;
  }
  LCM = (N * M) / GCD;
  return `${GCD}\n${LCM}`;
}

console.log(solution(N, M));
