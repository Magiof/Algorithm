let fs = require('fs');
const [n, ...input] = fs
  .readFileSync('18110.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solve(input) {
  if (input.length === 0) return 0;
  const sortedInput = input.sort((a, b) => a - b);
  const sliceNumber = Math.round(input.length * 0.15);
  const slicedInput =
    sliceNumber === 0
      ? sortedInput
      : sortedInput.slice(sliceNumber, -sliceNumber);

  const sum = slicedInput.reduce((acc, current) => acc + current, 0);
  const answer = Math.round(sum / slicedInput.length);

  return answer;
}

console.log(solve(input));
