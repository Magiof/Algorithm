let fs = require('fs');
let [_, ...points] = fs
  .readFileSync('11651.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', ''));

function solution(arr) {
  const answer = arr.sort((a, b) => {
    if (a.split(' ')[1] === b.split(' ')[1])
      return a.split(' ')[0] - b.split(' ')[0];
    else return a.split(' ')[1] - b.split(' ')[1];
  });
  return answer;
}

console.log(...solution(points));
