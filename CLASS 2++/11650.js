let fs = require('fs');
let [_, ...points] = fs
  .readFileSync('11650.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', ''));

function solution(arr) {
  const answer = arr.sort((a, b) => {
    if (a.split(' ')[0] === b.split(' ')[0])
      return a.split(' ')[1] - b.split(' ')[1];
    else return a.split(' ')[0] - b.split(' ')[0];
  });
  return answer;
}

console.log(...solution(points));
