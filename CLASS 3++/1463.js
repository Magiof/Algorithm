const fs = require('fs');
const input = +fs.readFileSync('1463.txt').toString();

// 다이내믹 프로그래밍
function solve(input) {
  const dp = [0, 0, 1, 1];
  for (let i = 4; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[input];
}

console.log(solve(input));
