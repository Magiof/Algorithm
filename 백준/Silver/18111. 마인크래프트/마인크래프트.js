let fs = require('fs');
let [[N, M, B], ..._blocks] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' '));
const blocks = [];
_blocks.map((e) => e.map((e) => blocks.push(+e)));
blocks.sort((a, b) => b - a);

function solution(arr) {
  let time = Number.MAX_SAFE_INTEGER;
  let floor = 0;

  loop1: for (let i = 0; i <= 256; i++) {
    let tempSum = 0;
    let currentBlock = +B;
    for (const block of arr) {
      if (block > i) {
        tempSum += (block - i) * 2;
        currentBlock += block - i;
      } else if (block < i) {
        if (currentBlock < i - block) break loop1;
        tempSum += i - block;
        currentBlock -= i - block;
      }
    }

    if (tempSum <= time) {
      time = tempSum;
      floor = i;
    }
  }

  return `${time} ${floor}`;
}

console.log(solution(blocks));
