let fs = require('fs');
let input = fs
  .readFileSync('2108.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const n = input.shift();
input = input.sort((a, b) => a - b);

//평균
function getAverage(arr) {
  return Math.round(arr.reduce((a, b) => a + b) / arr.length);
}

// 중앙값
function getMedian(arr) {
  return arr[(arr.length - 1) / 2];
}

// 최빈값
function getMode(arr) {
  const values = [];
  const modes = [];
  const map = new Map();
  for (const num of input) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }

  for (const value of map.values()) {
    values.push(value);
  }
  const countMode = Math.max(...values);

  for (const [key, value] of map) {
    if (value === countMode) modes.push(key);
  }
  const mode = modes.length === 1 ? modes[0] : modes[1];

  return mode;
}

// 범위
function getRange(arr) {
  const range = arr[arr.length - 1] - arr[0];
  return range;
}

console.log(
  `${getAverage(input)}\n${getMedian(input)}\n${getMode(input)}\n${getRange(
    input
  )}`
);
