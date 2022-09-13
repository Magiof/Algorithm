let fs = require('fs');
let input = fs
  .readFileSync('9012.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', ''));
input.shift();

function solution(input) {
  let answer = '';

  loop1: for (const question of input) {
    if (question[0] === ')') {
      answer += 'NO\n';
      continue;
    }

    const stack = [];
    for (const string of question) {
      if (string === '(') {
        stack.push(string);
      } else if (string === ')' && stack.length) {
        stack.pop();
      } else {
        answer += 'NO\n';
        continue loop1;
      }
    }
    stack.length ? (answer += 'NO\n') : (answer += 'YES\n');
  }

  return answer.substring(0, answer.length - 1);
}

console.log(solution(input));
