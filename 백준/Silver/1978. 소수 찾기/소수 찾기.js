let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.replaceAll("\r", ""));

const n = input.shift();
const arr = input[0].split(" ").map(Number);

function solution(arr) {
  let cnt = 0;

  for (let x of arr) {
    let prime = true;
    if (x === 1) prime = false;
    else {
      for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) prime = false;
      }
    }
    if (prime === true) cnt++;
  }
  return cnt;
}

console.log(solution(arr));
