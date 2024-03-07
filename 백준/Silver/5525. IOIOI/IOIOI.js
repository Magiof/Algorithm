const fs = require('fs');
const [N, M, [string]] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', '').split(' '));

function solve(N, M, string) {
  let result = 0;
  let patternCount = 0;

  for (let i = 1; i < M - 1; i++) {
    if (string[i - 1] === 'I' && string[i] === 'O' && string[i + 1] === 'I') {
      patternCount++;
      i++;

      if (patternCount >= N) {
        result++;
        patternCount--;
      }
    } else {
      patternCount = 0;
    }
  }

  return result;
}

console.log(solve(N, M, string));
