let fs = require('fs');
let [n, k] = fs.readFileSync('11866.txt').toString().split(' ').map(Number);

let people = new Array(n).fill(1).map((v, i) => i + 1);

function solution(arr) {
  let answer = '<';
  while (arr.length > 0) {
    for (let i = 0; i < k - 1; i++) {
      people.push(people.shift());
    }
    answer += `${people.shift()}, `;
  }
  return answer;
}
console.log(solution(people).slice(0, -2) + '>');
