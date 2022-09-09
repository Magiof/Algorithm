const fs = require('fs');
const N = fs.readFileSync('2292.txt').toString() * 1;

function solution(N) {
  let endOfLayer = 1;
  let layer = 1;
  while (N > endOfLayer) {
    endOfLayer += 6 * layer;
    layer++;
  }

  return layer;
}

console.log(solution(N));
