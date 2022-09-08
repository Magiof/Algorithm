let fs = require('fs');
let input = fs
  .readFileSync('1874.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const len = input.shift();

function solution(arr, len) {
  let answer = '';
  const plus = '+\n';
  const minus = '-\n';
  let cursor = 0;
  let temp = [...new Array(len)].map((v, i) => i + 1);

  for (const targetNumber of arr) {
    let countRepeat = temp.indexOf(targetNumber) + 1;
    if (countRepeat > cursor) {
      answer += plus.repeat(countRepeat - cursor);
    } else if (countRepeat < cursor) {
      return 'NO';
    }
    cursor = countRepeat;
    temp.splice(cursor - 1, 1);
    answer += minus;
    cursor--;
  }

  return answer.substring(0, answer.length - 1);
}

console.log(solution(input, len));
