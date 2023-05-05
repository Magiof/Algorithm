const fs = require('fs');
let [target, trees] = fs.readFileSync('2805.txt').toString().trim().split('\n');
target = Number(target.split(' ')[1]);
trees = trees.split(' ').map(Number);

function cutTrees(height, trees) {
  let result = 0;
  trees.forEach((tree) => {
    if (tree > height) {
      result += tree - height;
    }
  });

  return result;
}

function solution(target, trees) {
  let [max, min, answer] = [Math.max(...trees), 0, 0];
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const result = cutTrees(mid, trees);

    if (result === target) return mid;
    else if (result >= target) {
      if (mid > answer) answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return answer;
}

console.log(solution(target, trees));
