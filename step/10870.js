const fs = require('fs');
const n = fs.readFileSync('10870.txt').toString() * 1;

function solution(n){
    if (n===0) return 0
    if (n===1) return 1
    return solution(n-1)+solution(n-2)
}

console.log(solution(n))