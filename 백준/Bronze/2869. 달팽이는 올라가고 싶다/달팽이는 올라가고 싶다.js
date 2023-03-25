const fs = require("fs");
const [A, B, V] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

function solve() {
  return Math.ceil((V - B) / (A - B));
}

console.log(solve());
