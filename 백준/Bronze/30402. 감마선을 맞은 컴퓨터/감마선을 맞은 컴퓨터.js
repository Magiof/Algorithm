const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();
function solve(input) {
  for (string of input)
    if (string === 'w') {
      return 'chunbae';
    } else if (string === 'b') {
      return 'nabi';
    } else if (string === 'g') {
      return 'yeongcheol';
    }
}
console.log(solve(input));
