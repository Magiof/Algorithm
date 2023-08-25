const fs = require('fs');
const [n, ...input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const cases = input.map(Number);

// 다이내믹 프로그래밍
function solve(cases) {
  const dp = [0, 1, 2, 4];
  for (let i = 4; i < 11; i++) {
    dp.push(dp[i - 1] + dp[i - 2] + dp[i - 3]);
  }

  const answer = cases.map((num) => dp[num]).join('\n');

  return answer;
}

console.log(solve(cases));
