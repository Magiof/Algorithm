const fs = require('fs');
const [L, ...cases] = fs
  .readFileSync('6064.txt')
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

// 답:
// 1599959999
// 1599960000
// -1
// -1
// 39998
// 39999
// 120000
// 4
// 12
// 60
// 1
// 12
// 5
// 5
// 1
