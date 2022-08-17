let fs = require('fs');
let input = fs.readFileSync('1654.txt').toString().trim().split('\n');
const [n, t] = input.shift().split(' ').map(Number);
const lines = input.map(Number);
function solution(t, arr) {
  let answer = 0;
  let lt = 0;
  let rt = Math.max(...arr);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    let sum = arr.map(e => parseInt(e / mid)).reduce((a, b) => a + b)
    if (sum === t) {
      answer = mid;
      break;
    }
    else if (sum < t) rt = mid
    else if (sum > t) lt = mid
    console.log(answer, lt, mid, rt, sum, arr)
  }
  return answer
}
console.log(solution(t, lines))