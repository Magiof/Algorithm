const fs = require('fs');
const [N, r, c] = fs.readFileSync('1074.txt').toString().split(' ').map(Number);

function findZVisitOrder(N, r, c) {
  let count = 0;

  while (N > 0) {
    const size = Math.pow(2, N - 1);
    const quadrant = (r < size ? 0 : 2) + (c < size ? 0 : 1);

    count += quadrant * size * size;

    if (r >= size) r -= size;
    if (c >= size) c -= size;
    N--;
  }

  return count;
}

console.log(findZVisitOrder(N, r, c));
