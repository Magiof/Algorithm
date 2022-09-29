let fs = require('fs');
let input = fs.readFileSync('1654.txt').toString().trim().split('\n');
const [n, t] = input.shift().split(' ').map(Number);
const lines = input.map(Number);
function solution(t, arr) {
  let answer = 0;
  let lt = 1;
  let rt = Math.max(...arr);
  
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let sum = 0;
    for (x of arr) {
      sum += Math.floor(x / mid);
    }

    if (sum < t) rt = mid - 1;

    else if (sum >= t) {
      if (mid > answer) answer = mid;
      lt = mid + 1;
    }
    console.log(mid)
  }
  return answer;
}
console.log(solution(t, lines));
