const fs = require('fs');
const [_, ...input] = fs.readFileSync('1002.txt').toString().trim().split('\n');
const cases = input.map((_case) => _case.split(' ').map(Number));

function solve(cases) {
  const answers = cases.map((_case) => {
    const [x1, y1, r1, x2, y2, r2] = _case;
    const distance = calcHypotenuse(Math.abs(x2 - x1), Math.abs(y2 - y1));
    if (distance === 0 && r1 === 0 && r2 === 0) return 1;
    if (distance === 0 && r1 === r2) return -1;
    if (distance > r1 + r2) return 0;
    if (distance === r1 + r2) return 1;
    if (distance < Math.abs(r1 - r2)) return 0;
    if (distance === Math.abs(r1 - r2)) return 1;
    if (distance !== 0 && distance < r1 + r2) return 2;
  });

  return answers.join('\n');
}

function calcHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

console.log(solve(cases));
