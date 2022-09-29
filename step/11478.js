const fs = require('fs');
const str = fs.readFileSync('11478.txt').toString();

//  substr substring slice의 성능 차이 크게 없음
function solution(str) {
  const set = new Set();
  for (let start = 0; start < str.length; start++) {
    for (let len = 1; len < str.length - start + 1; len++) {
      const partOfStr = str.substr(start, len);
      set.add(partOfStr);
      console.log(11111, partOfStr)
    }
  }
  return set.size;
}
console.log(solution(str));
