const fs = require('fs');
const n = fs.readFileSync('1436.txt').toString() * 1;

let cnt = 1;
let number = 666;

while (1) {
  if (number.toString().includes('666')) {
    if (cnt === n) break;
    cnt++;
  }
  number++;
}

console.log(number);