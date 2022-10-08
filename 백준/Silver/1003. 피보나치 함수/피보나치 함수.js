let fs = require('fs');
let [_, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(arr) {
  const answer = [];
  for (const num of arr) {
    let cntOne = 0;
    let cntZero = 1;

    for (let j = 1; j <= num; j++) {
      const temp = cntZero;
      cntZero = cntOne;
      cntOne = temp + cntOne;
    }

    answer.push(`${cntZero} ${cntOne}`);
  }
  return answer.join('\n');
}

console.log(solution(input));
