const fs = require('fs');
const [[n, m], ...map] = fs
  .readFileSync('14940.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', '').split(' ').map(Number));

function shortestDistance(n, m, map) {
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];
  let queue = [];
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  let distances = Array.from({ length: n }, () => Array(m).fill(-1));

  // Find target location
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 2) {
        queue.push([i, j]);
        visited[i][j] = true;
        distances[i][j] = 0;
      }
    }
  }

  while (queue.length > 0) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        !visited[nx][ny] &&
        map[nx][ny] === 1
      ) {
        visited[nx][ny] = true;
        distances[nx][ny] = distances[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0) distances[i][j] = 0;
    }
  }

  return distances;
}

let result = shortestDistance(n, m, map);

const rows = result.map((row) => row.join(' ')).join('\n');
console.log(rows);
