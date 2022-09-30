let fs = require('fs');
let [_, ...input] = fs
  .readFileSync('10814.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', ''));

function solution(arr) {
  let answer;
  answer = arr.sort((a, b) => {
    if (a.split(' ')[0] === b.split(' ')[0]) return;
    else return a.split(' ')[0] - b.split(' ')[0];

  });
  return answer.join('\n');
}
console.log(solution(input));





