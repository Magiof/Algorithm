let fs = require('fs');
let [_, ...input] = fs
  .readFileSync('10866.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', ''));

function solution(input) {
  let deque = [];
  let answer = '';
  for (let action of input) {
    if (action.includes(' ')) {
      action = action.split(' ');
      switch (action[0]) {
        case 'push_back':
          deque.push(action[1]);
          break;
        case 'push_front':
          deque = [action[1], ...deque];
      }
    }
    switch (action) {
      case 'pop_front':
        answer += `${deque.length ? deque.shift() : -1}\n`;
        break;
      case 'pop_back':
        answer += `${deque.length ? deque.pop() : -1}\n`;
        break;
      case 'size':
        answer += `${deque.length}\n`;
        break;
      case 'empty':
        answer += `${deque.length ? 0 : 1}\n`;
        break;
      case 'front':
        answer += `${deque.length ? deque[0] : -1}\n`;
        break;
      case 'back':
        answer += `${deque.length ? deque[deque.length - 1] : -1}\n`;
        break;
    }
  }

  return answer;
}

console.log(solution(input));
