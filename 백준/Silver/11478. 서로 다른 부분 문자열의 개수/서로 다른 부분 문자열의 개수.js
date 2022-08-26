const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();

//  substr substring slice의 성능 차이 크게 없음
function solution(str) {
  const set = new Set();
  for (let start = 0; start < str.length; start++) {
    for (let len = 1; len < str.length - start + 1; len++) {
      const partOfStr = str.substr(start, len);
      if (!set.has(partOfStr)) set.add(partOfStr);
    }
  }
  return set.size;
}
console.log(solution(str));
