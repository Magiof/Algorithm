const fs = require('fs');
const [n, ...stairs] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solve(n, stairs) {
  // 계단이 하나만 있을 경우, 그 계단의 점수가 정답입니다.
  if (n === 1) return stairs[0];

  let dp = Array(n).fill(0);
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];

  // 계단이 적어도 세 개 이상 있을 경우
  if (n > 2) {
    dp[2] = Math.max(stairs[1] + stairs[2], stairs[0] + stairs[2]);
  }

  for (let i = 3; i < n; i++) {
    // 최대 점수는 한 계단을 건너뛰거나 두 계단을 건너뛸 때 각각 얻을 수 있습니다.
    dp[i] = Math.max(
      dp[i - 3] + stairs[i - 1] + stairs[i],
      dp[i - 2] + stairs[i]
    );
  }

  return dp[n - 1];
}

console.log(solve(n, stairs));
