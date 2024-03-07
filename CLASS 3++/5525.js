const fs = require('fs');
const [N, M, [string]] = fs
  .readFileSync('5525.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', '').split(' '));

function solve(N, string) {
  const pattern = `${'IO'.repeat(N)}I`;

  let count = 0;
  for (let i = 0; i < string.length - pattern.length + 1; i++) {
    if (string[i] === 'I') {
      if (string.slice(i, i + pattern.length) === pattern) {
        count++;
        i++;
      }
    }
  }

  return count;
}

function solveOptimized(N, M, string) {
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

console.log(solve(N, string));
console.log(solveOptimized(N, M, string));
