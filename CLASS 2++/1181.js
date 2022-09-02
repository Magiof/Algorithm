let fs = require('fs');
let input = fs
  .readFileSync('1181.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', ''));

input.shift();

let sorted = input.sort((a, b) => {
  if (a.length === b.length) {
    for(let i=0; i<a.length; i++){
        let A=a.charCodeAt(i)       // 알파벳을 아스키코드로 변환
        let B=b.charCodeAt(i)
        if(A<B) return A-B
        if(A>B) return A-B
    }
  } else return a.length - b.length;
});

const set = new Set(sorted)
const answer = [...set]

console.log(answer.join('\n'));
