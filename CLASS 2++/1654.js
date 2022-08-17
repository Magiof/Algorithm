let fs = require('fs');
let input = fs.readFileSync('1654.txt').toString().split('\n');
const [n, t] = input.shift().split(' ');
const lines = input.map(Number);
function solution(n, t, arr) {
  let answer = 0;
  let lt = 1;
  let rt = Math.min(...arr);
}
