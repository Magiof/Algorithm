let fs = require('fs');
let input = fs
  .readFileSync('1620.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', ''));
const [N, M] = input.shift().split(' ').map(Number);
const arr = input.slice(0, N);
const questions = input.slice(N);

function solution(arr, questions) {
  let answer = '';

  const map = new Map(arr.map((e, i) => [e, i + 1]));

  for (let x of questions) {
    Number.isNaN(x*1)   // 숫자형으로 변환하지 않으면 map.get(x)=== undefind
      ? (answer += map.get(x).toString())
      : (answer += arr[x - 1]);
    answer += '\n';
  }
  console.log(map)
  return answer;
}
console.log(solution(arr, questions));
