let fs = require('fs');
let input = fs
  .readFileSync('18111.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' '));

const [N, M, B] = input.shift().map(Number);
let avg = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    avg += input[i][j] * 1;
  }
}
avg = Math.round((avg /= N * M));

const arr = [];

function solution() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      arr.push(avg-input[i][j])
    }
  }
  return arr
}

console.log(solution())