let fs = require('fs');
let [_, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', ''));

function solution(input) {
  const stack = [];
  let answer='';
  for (const action of input) {
    if (action.includes('push')) {
      stack.push(action.split(' ')[1]);
    } else if (action.includes('pop')) {
      answer += `${stack.length ? stack.pop() : -1}\n`;
    } else if (action.includes('size')) {
      answer += `${stack.length}\n`;
    } else if (action.includes('empty')) {
      answer += `${stack.length ? 0 : 1}\n`;
    } else if (action.includes('top')) {
      answer += `${stack.length ? stack[stack.length - 1] : -1}\n`;
    }
  }
  return answer.substring(0, answer.length - 1);
}

console.log(solution(input));
