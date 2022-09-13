let fs = require('fs');
let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' '));

function solution(input) {
  let answer = '';

  for (let i = 0; i < input.length - 1; i++) {
    input[i] = input[i].sort((a, b) => a - b);
    for (let j = 0; j < 3; j++) input[i][j] *= input[i][j];
    if (input[i][0] + input[i][1] === input[i][2]) {
      answer += 'right\n';
    } else {
      answer += 'wrong\n';
    }
  }

  return answer.substring(0, answer.length - 1);
}

console.log(solution(input));
