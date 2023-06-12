const fs = require('fs');
const [NK, ...input] = fs
  .readFileSync('11047.txt')
  .toString()
  .trim()
  .split('\n');

const [N, K] = NK.split(' ').map(Number);
const coins = input.map(Number);

function solve(coins, K) {
  let count = 0;

  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];
    if (K >= coin) {
      count += Math.floor(K / coin);
      K %= coin;
    }
    if (K === 0) {
      break;
    }
  }

  return count;
}
console.log(solve(coins, K));
