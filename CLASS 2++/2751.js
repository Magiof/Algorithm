let fs = require('fs');
let [n, ...input] = fs
  .readFileSync('2751.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
input = input.sort((a, b) => a - b).join('\n');
console.log(input);