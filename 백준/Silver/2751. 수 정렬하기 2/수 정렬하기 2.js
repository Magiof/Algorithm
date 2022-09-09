let fs = require('fs');
let[n,...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
input = input.sort((a, b) => a - b).join('\n');
console.log(input)