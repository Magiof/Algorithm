const fs = require('fs');
const [x, y, w, h] = fs
  .readFileSync('1085.txt')
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

// 다른풀이
function solution2(x, y, w, h) {
  a = w - x;
  b = h - y;
  min = Math.min(a, b, x, y);
  return min;
}
