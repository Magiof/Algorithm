let fs = require('fs');
const [_, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solve(input) {
  let [numbers, ...spliceNumbers] = input;

  numbers = numbers.split(' ').map(Number);
  const sums = [];
  numbers.map((v, i) => {
    if (i === 0) sums.push(v);
    else sums.push(v + sums[i - 1]);
  });

  const answers = spliceNumbers.map((spliceNumber) => {
    const [startIndex, endIndex] = spliceNumber.split(' ').map(Number);

    return startIndex === 1
      ? sums[endIndex - 1]
      : sums[endIndex - 1] - sums[startIndex - 2];
  });

  return answers.join('\n');
}

console.log(solve(input));
