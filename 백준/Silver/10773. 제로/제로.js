const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const k = parseInt(input.shift());

const stack = [];
for (let i = 0; i < k; i++) {
  const num = parseInt(input[i]);
  if (num) {
    stack.push(num);
  } else {
    if (stack.length !== 0) {
      stack.pop();
    }
  }
}

const sum = stack.reduce((acc, cur) => acc + cur, 0);
console.log(sum);