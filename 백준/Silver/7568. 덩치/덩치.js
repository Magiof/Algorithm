const fs = require('fs');
let [_, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

function solution(people) {
  const result = [];
  for (let i = 0; i < people.length; i++) {
    const target = people[i];
    let rank = 1;
    for (let j = 0; j < people.length; j++) {
      if (i === j) continue;
      const comparison = people[j];
      if (target[0] < comparison[0] && target[1] < comparison[1]) rank++;
    }
    result.push(rank);
  }
  const answer = result.join(' ');

  return answer;
}

console.log(solution(input));
