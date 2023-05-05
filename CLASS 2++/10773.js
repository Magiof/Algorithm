const fs = require('fs');
[_, ...input] = fs.readFileSync('10773.txt').toString().trim().split('\n');
input = input.map(Number);

function solution(numbers) {
  const stack = [];
  for (const number of numbers) {
    if (number !== 0) stack.push(number);
    else if (!stack.length) continue;
    else stack.pop();
  }

  const answer = stack.length
    ? stack.reduce((prev, current) => prev + current, 0)
    : 0;

  return answer;
}

console.log(solution(input));
