let fs = require('fs');
let input = fs
  .readFileSync('2750.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const len = input.shift();





// 삽입 정렬
function insertionSort(arr) {
  let answer = '';
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  answer = arr.join('\n');
  return answer;
}






// 버블 정렬   🎇제일 뒤가 먼저 결정 됨🎇
function bubbleSort(arr) {
  let answer = '';
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
  answer = arr.join('\n');
  return answer;
}



console.log(insertionSort(input));
console.log(bubbleSort(input));
