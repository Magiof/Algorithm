let fs = require("fs");
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
const xArr = [];
const yArr = [];
for (let i = 0; i < input.length; i++) {
  xArr.push(input[i][0]);
  yArr.push(input[i][1]);
}
xArr.sort()
yArr.sort()
const x = xArr[0]===xArr[1] ? xArr[2] : xArr[0]
const y = yArr[0]===yArr[1] ? yArr[2] : yArr[0]
console.log(x)
console.log(y)