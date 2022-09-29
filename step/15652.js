const fs = require('fs');
const [N,M] = fs.readFileSync('15652.txt').toString().trim().split(' ').map(Number);

function solution(N, M) {
    let arr = new Array(M).fill(1)
    let str='';
    for(let i=1; i<=arr.length; i++){
        arr[arr.length-1]=i
        str+=arr.join(' ')+'\n'
        if(i===arr.length){
            
        }
    }
    return str
}
console.log(solution(N,M))