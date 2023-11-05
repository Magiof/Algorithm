const fs = require('fs');
const [NL, ...input] = fs
  .readFileSync('1173.1.txt')
  .toString()
  .trim()
  .split('\n');
const [N, L] = NL.split(' ').map(Number);
const horses = input.map((e) => e.replace('\r', ''));

function solve(L, horses) {
  const blackCounts = horses.map((e) => {
    let black = 0;
    for (let i = 0; i < L; i++) {
      if (i === 0) {
        if (e[i] === '1') black++;
      } else if (e[i] === '1' && e[i - 1] !== '1') black++;
    }
    return black;
  });
  const a = Math.max(...blackCounts);
  const b = blackCounts.filter((v) => v === a).length;

  return [a, b];
}
console.log(solve(L, horses).join(' '));
