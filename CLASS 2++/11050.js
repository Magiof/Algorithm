let fs = require('fs');
let [n, k] = fs.readFileSync('11050.txt').toString().split(' ').map(Number);

function factoral(number) {
  let answer = 1;
  if (number === 0) return answer;
  for (let i = 1; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

function solution(n, k) {
  const answer = factoral(n) / (factoral(n - k) * factoral(k));
  return answer;
}

console.log(solution(n, k));
