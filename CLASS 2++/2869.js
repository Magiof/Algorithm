const fs = require("fs");
const [A, B, V] = fs.readFileSync("2869.txt").toString().split(" ").map(Number);

function solve() {
  return Math.ceil((V - B) / (A - B));
}

console.log(solve());
