const fs = require('fs');
const [nm, ...input] = fs
  .readFileSync('17219.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', ''));
// .map((e) => e.replace('\r', '').split(' '));

const [n, m] = nm.split(' ').map(Number);

function prepareSolving(n, m, input) {
  const slicedInput = input.slice(0, n);
  const ask = input.slice(n);
  const map = new Map();

  for (const element of slicedInput) {
    const [site, password] = element.split(' ');
    map.set(site, password);
  }

  return { map, ask };
}

function solve(n, m, input) {
  const { map, ask } = prepareSolving(n, m, input);
  let answer = ask.map((site) => map.get(site));
  answer = answer.join('\n');

  return answer;
}

console.log(solve(n, m, input));
