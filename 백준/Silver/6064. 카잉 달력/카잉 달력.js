const fs = require('fs');
const [L, ...cases] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((cases) => cases.split(' ').map(Number));

function findYear(M, N, x, y) {
  while (x <= M * N) {
    if (((x - 1) % N) + 1 === y) {
      return x;
    }
    x += M;
  }
  return '-1';
}

function solve(cases) {
  const answer = [];
  for (const _case of cases) {
    const [M, N, x, y] = _case;
    answer.push(findYear(M, N, x, y));
  }

  return answer.join('\n');
}

console.log(solve(cases));