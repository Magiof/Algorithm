let fs = require('fs');
let input = fs
  .readFileSync('1018.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', ''));
const [N, M] = input.shift().split(' ').map(Number);

let chess1 = [];
let chess2 = [];
for (let i = 0; i <= 7; i++) {
  chess1[i] = '';
  chess2[i] = '';
  if (i % 2 === 0) {
    for (let j = 0; j <= 7; j++) {
      if (j % 2 === 0) {
        chess1[i] += 'W';
        chess2[i] += 'B';
      } else {
        chess1[i] += 'B';
        chess2[i] += 'W';
      }
    }
  } else {
    for (let j = 0; j <= 7; j++) {
      if (j % 2 === 0) {
        chess1[i] += 'B';
        chess2[i] += 'W';
      } else {
        chess1[i] += 'W';
        chess2[i] += 'B';
      }
    }
  }
}

let diff1 = Number.MAX_SAFE_INTEGER;
let diff2 = Number.MAX_SAFE_INTEGER;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let a = 0;
    let b = 0;
    let board = [];
    board.push(input[i].slice(j, j + 8));
    board.push(input[i + 1].slice(j, j + 8));
    board.push(input[i + 2].slice(j, j + 8));
    board.push(input[i + 3].slice(j, j + 8));
    board.push(input[i + 4].slice(j, j + 8));
    board.push(input[i + 5].slice(j, j + 8));
    board.push(input[i + 6].slice(j, j + 8));
    board.push(input[i + 7].slice(j, j + 8));
    for (let k = 0; k < 8; k++) {
      for (let n = 0; n < 8; n++) {
        if (board[k][n] !== chess1[k][n]) a++;
        if (board[k][n] !== chess2[k][n]) b++;
      }
    }
    if (a < diff1) diff1 = a;
    if (b < diff2) diff2 = b;
  }
}

console.log(diff1 < diff2 ? diff1 : diff2);
