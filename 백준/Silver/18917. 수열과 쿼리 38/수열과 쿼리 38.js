const fs = require('fs');
const [N, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');
const cases = input.map((_case) => _case.split(' ').map(Number));

function solve() {
  const answers = [];
  let sum = 0,
    xor = 0;

  for (const [queryNumber, element] of cases) {
    switch (queryNumber) {
      case 1:
        sum += element;
        xor ^= element;
        break;

      case 2:
        sum -= element;
        xor ^= element;
        break;

      case 3:
        answers.push(sum);
        break;

      case 4:
        answers.push(xor);
        break;
    }
  }
  const answer = answers.join('\n');

  return answer;
}

console.log(solve());
