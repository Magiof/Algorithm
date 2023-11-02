const fs = require('fs');
const [n, ...map] = fs.readFileSync('2667.txt').toString().split('\n');
const N = Number(n);

function dfs(grid, x, y, visited) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let count = 1;

  visited[x][y] = true;

  for (let i = 0; i < directions.length; i++) {
    const newX = x + directions[i][0];
    const newY = y + directions[i][1];

    if (
      newX >= 0 &&
      newY >= 0 &&
      newX < N &&
      newY < N &&
      grid[newX][newY] === '1' &&
      !visited[newX][newY]
    ) {
      count += dfs(grid, newX, newY, visited);
    }
  }

  return count;
}

function solveComplexes(grid) {
  let visited = new Array(N).fill(false).map(() => new Array(N).fill(false));
  let complexes = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        complexes.push(dfs(grid, i, j, visited));
      }
    }
  }

  complexes.sort((a, b) => a - b);
  const answer = [complexes.length, ...complexes];

  return answer;
}

const grid = map.map((row) => row.split(''));
console.log(solveComplexes(grid).join('\n'));
