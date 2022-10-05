let fs = require('fs');
let [_, str] = fs.readFileSync('15829.txt').toString().trim().split('\n');

function solution(str) {
  let answer = 0;
  let r = 1;

  for (let i = 0; i < str.length; i++) {
    const assignedNumber = str.charCodeAt(i) - 96; //a=1~~~z=26

    answer += assignedNumber * r; //🎇

    r *= 31;
    r %= 1234567891;
    answer %= 1234567891;
  }

  return answer;
}

console.log(solution(str));
