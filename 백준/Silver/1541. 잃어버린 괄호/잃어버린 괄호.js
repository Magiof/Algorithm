const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();

function findMinimumValue(expression) {
  const minusGroups = expression.split('-');

  let result = 0;

  for (let i = 0; i < minusGroups.length; i++) {
    const numbers = minusGroups[i].split('+').map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    if (i === 0) {
      result += sum;
    } else {
      result -= sum;
    }
  }

  return result;
}

const expression = input;
console.log(findMinimumValue(expression));
