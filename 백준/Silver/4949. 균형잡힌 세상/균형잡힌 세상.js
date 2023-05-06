const fs = require('fs');
let input = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', ''));

function solution(sentences) {
  const results = [];
  loop1: for (const sentence of sentences) {
    const stack = [];
    if (sentence === '.') {
      const answer = results
        .map((result) => (result ? 'yes' : 'no'))
        .join(`\n`);
      return answer;
    }
    loop2: for (const letter of sentence) {
      if (letter === '(' || letter === '[') stack.push(letter);
      if (letter === ')') {
        if (stack[stack.length - 1] === '(') stack.pop();
        else {
          results.push(false);
          continue loop1;
        }
      }
      if (letter === ']') {
        if (stack[stack.length - 1] === '[') stack.pop();
        else {
          results.push(false);
          continue loop1;
        }
      }
    }
    results.push(!stack.length);
  }
}

console.log(solution(input));
