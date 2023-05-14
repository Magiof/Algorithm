const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');
const times = input[0].split(' ').map(Number);

function solve(times) {
  const length = times.length;
  const sortedTimes = times.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < length; i++) {
    const add = sortedTimes[i] * (length - i);
    answer += add;
  }

  return answer;
}

console.log(solve(times));
