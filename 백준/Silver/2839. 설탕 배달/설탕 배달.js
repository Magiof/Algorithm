const fs = require("fs");
const input = Number(fs.readFileSync("dev/stdin").toString());

function solve() {
  let count = 0;
  let weight = input

  while (true) {
    if (weight % 5 === 0) {
      count += weight / 5; 
      break;
    } else if (weight < 3) {
      count = -1;
      break;
    }
    weight -= 3;
    count++;
  }

  return count
}

console.log(solve());
