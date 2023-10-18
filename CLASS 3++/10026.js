const fs = require('fs');
const [n, ...picture] = fs.readFileSync('10026.txt').toString().split('\n');

const N = Number(n);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function isValid(x, y, visited) {
  return x >= 0 && x < N && y >= 0 && y < N && !visited[x][y];
}

function dfs(x, y, color, isColorBlind, visited) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (isValid(nx, ny, visited)) {
      if (isColorBlind && (color === 'R' || color === 'G')) {
        if (picture[nx][ny] === 'R' || picture[nx][ny] === 'G') {
          dfs(nx, ny, picture[nx][ny], isColorBlind, visited);
        }
      } else if (picture[nx][ny] === color) {
        dfs(nx, ny, color, isColorBlind, visited);
      }
    }
  }
}

function countRegions(isColorBlind) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        dfs(i, j, picture[i][j], isColorBlind, visited);
        count++;
      }
    }
  }

  return count;
}

const normalCount = countRegions(false);
const colorBlindCount = countRegions(true);

console.log(`${normalCount} ${colorBlindCount}`);
