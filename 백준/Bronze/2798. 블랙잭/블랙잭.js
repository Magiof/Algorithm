let fs = require('fs');
let [N, arr] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' '));
const M = N[1] * 1;
arr = arr.map(Number);

function solution(arr) {
  let answer = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        if (sum > M) continue;
        if (sum > answer) answer = sum;
      }
    }
  }

  return answer;
}
console.log(solution(arr));
