let fs = require('fs');
let [_, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', ''));

function solution(input) {
  const queue = [];
  let answer = '';
  for (const action of input) {
    if (action.includes(' ')) {
      queue.push(action.split(' ')[1]);
      continue;
    }
    switch (action) {
      case 'pop':
        answer += `${queue.length ? queue.shift() : -1}\n`;
        break;
      case 'size':
        answer += `${queue.length}\n`;
        break;
      case 'empty':
        answer += `${queue.length ? 0 : 1}\n`;
        break;
      case 'front':
        answer += `${queue.length ? queue[0] : -1}\n`;
        break;
      case 'back':
        answer += `${queue.length ? queue[queue.length - 1] : -1}\n`;
        break;
    }
  }

  return answer;
}

console.log(solution(input));
