let fs = require('fs');
let [len, ...input] = fs
  .readFileSync('10250.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let answer = '';

  for (const question of input) {
    let [H, W, N] = question.split(' ').map(Number);
    const YY = N % H;
    const XX = Math.floor(N / H) + 1;
    answer += YY * 100 + XX + '\n';
    console.log(YY, XX);
  }
  answer = answer.substring(0, answer.length - 1);
  return answer;
}
console.log(solution(input));
