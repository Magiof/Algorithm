const fs = require('fs');
const N = fs.readFileSync('/dev/stdin').toString() * 1;

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
