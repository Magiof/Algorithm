const fs = require('fs');
const [S, i] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', ''));
console.log(S[Number(i) - 1]);
