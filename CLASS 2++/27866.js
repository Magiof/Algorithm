const fs = require('fs');
const [S, i] = fs
  .readFileSync('27866.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', ''));
console.log(S[Number(i) - 1]);
