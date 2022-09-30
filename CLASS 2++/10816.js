let fs = require('fs');
let [N, arr1, M, arr2, ..._] = fs
  .readFileSync('10816.txt')
  .toString()
  .trim()
  .split('\n');
arr1 = arr1.split(' ').map(Number);
arr2 = arr2.split(' ').map(Number);

function solution(arr1, arr2) {
  let numbersForCompare = arr1.sort((a, b) => a - b);
  for (let i = 0; i < arr2.length; i++) {
    let lt = 0
    let rt = numbersForCompare.length -1
    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      
    }
  }
}
console.log(solution(arr1, arr2));
