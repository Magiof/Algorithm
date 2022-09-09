let fs = require('fs');
let [N, arr1, M, arr2] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' '));
const list = arr1.map(Number).sort((a,b) => (a-b));
const target = arr2.map(Number);

function solution(list, target) {
  let answer = '';
  loop1: for (const numToCheck of target) {
    let lt = 0;
    let rt = list.length - 1;
    if (numToCheck < list[lt] || numToCheck > list[rt]) {
      answer += '0\n';
      continue;
    }

    loop2: while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);

      if (numToCheck > list[mid]) {
        lt = mid + 1;
      } else if (numToCheck < list[mid]) {
        rt = mid - 1;
      } else if (numToCheck === list[mid]) {
        answer += '1\n';
        continue loop1;
      }
    }

    answer += '0\n';
  }

  return answer.substring(0, answer.length - 1);
}

console.log(solution(list, target));
