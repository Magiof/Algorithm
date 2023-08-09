const fs = require('fs');
const [_, input] = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const numbers = input.split(' ').map(Number);

function solve(numbers) {
  const sorted = Array.from(new Set(numbers)).sort((a, b) => a - b);

  const map = new Map(sorted.map((val, idx) => [val, idx]));

  return numbers.map((number) => map.get(number)).join(' ');
}

console.log(solve(numbers));
