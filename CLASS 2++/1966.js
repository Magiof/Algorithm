let fs = require('fs');
let input = fs.readFileSync('1966.txt').toString().trim().split('\n');
const n = input[0];

function solution(target, arr) {
  let cnt = 1;
  let queue = [...arr];
  while (1) {
    if (queue[0] === Math.max(...queue)) {
      if (target === 0) return cnt;
      else if (target !== 0) {
        queue.shift();
        cnt++;
        target--;
      }
    } else {
      target === 0 ? (target = queue.length - 1) : target--;
      queue.push(queue.shift());
    }
  }
}

for (let i = 1; i <= n; i++) {
  let target = input[i * 2 - 1].split(' ').map(Number)[1];
  let arr = input[i * 2].split(' ').map(Number);
  console.log(solution(target, arr));
}
