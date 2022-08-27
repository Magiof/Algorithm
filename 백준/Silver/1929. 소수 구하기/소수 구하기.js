const fs = require('fs');
const [N,M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let prime = Array(M + 1).fill(true);
prime[0] = prime[1] = false;

function solution(N,M) {
  for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if(prime[i]) {
      let j = 2; 
      while(i * j <= M) { 
        prime[i * j] = false; 
        j++;  
      }
    }
  }
  
  let result = []; 
  for(let i = N; i <= M; i++) { 
    if(prime[i]) { 
		result.push(i);
    }
  }
  return result.join('\n')
}

console.log(solution(N,M))