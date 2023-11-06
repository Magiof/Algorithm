const fs = require('fs');
const [a, b] = fs
  .readFileSync('2338.txt')
  .toString()
  .trim()
  .split('\n')
  .map(BigInt);
console.log(`${a + b}\n${a - b}\n${a * b}`);
