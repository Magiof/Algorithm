const fs = require('fs');
const N = fs.readFileSync('1676.txt').toString() * 1;

//5의 갯수가 곧 0의 갯수이지 않을까..?
function getCountFive(currentNum) {
  let n = currentNum;
  let cnt = 0;
  if (!n) return 0
  while (n / 5 === parseInt(n / 5)) {
    n /= 5;
    cnt++;
  }
  return cnt;
}

function solution(N) {
  let answer = 0;
  for (let i = 0; i <= N; i++) {
    answer += getCountFive(i)
  }
  return answer
}

console.log(solution(N))
