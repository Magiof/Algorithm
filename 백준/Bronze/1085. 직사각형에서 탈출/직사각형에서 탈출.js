const fs = require('fs');
const [x, y, w, h] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(x, y, w, h) {
  let length = 0;
  let height = 0;
  w / 2 > x ? (length = x) : (length = w - x);
  h / 2 > y ? (height = y) : (height = h - y);
  return length > height ? height : length;
}
console.log(solution(x, y, w, h));
