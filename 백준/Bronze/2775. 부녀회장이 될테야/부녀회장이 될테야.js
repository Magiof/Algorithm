let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let number = Number(input[0]);
input.shift();

let k;
let n;
let array = [];

for (let i = 0; i < number * 2; i = i + 2) {
  k = Number(input[i]);
  n = Number(input[i + 1]);
  array.push([k, n]);
}

let floor = [];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  k = array[i][0];
  n = array[i][1];
  for (let j = 0; j <= k; j++) {
    floor[j] = [];
    for (let m = 1; m <= n; m++) {
      if (j === 0) {
        floor[j].push(m);
      } else {
        sum += floor[j - 1][m - 1];
        floor[j].push(sum);
        if (m === n) {
          sum = 0;
        }
      }
    }
  }
  console.log(floor[k][n - 1]);
}
