let fs = require('fs');
let input = fs
  .readFileSync('./1259.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

for (let x of input) {
  if (x === 0) break;
  let reverse = String(x).split('').reverse().join('');
  console.log(reverse * 1 === x ? 'yes' : 'no');
}
