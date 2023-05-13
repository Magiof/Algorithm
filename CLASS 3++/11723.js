const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('11723.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', '').split(' '));

function solve(input) {
  let set = {};
  let answer = [];
  for (const operate of input) {
    let [operator, number] = operate;
    if (number) number = String(number);
    switch (operator) {
      case 'add':
        set[number] = true;
        break;
      case 'remove':
        delete set[number];
        break;
      case 'check':
        answer.push(set[number] ? 1 : 0);
        break;
      case 'toggle':
        set[number] = !set[number];
        break;
      case 'all':
        for (let i = 1; i <= 20; i++) {
          set[String(i)] = true;
        }
        break;
      case 'empty':
        set = {};
        break;
    }
  }
  answer = answer.join('\n');

  return answer;
}

console.log(solve(input));
