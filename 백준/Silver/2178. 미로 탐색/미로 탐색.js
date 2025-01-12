const fs = require('fs');
const [size, ...input] = fs
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '2178.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = size.split(' ').map(Number);
const maze = input.map((e) => e.split('').map(Number));

function solve() {
  const target = [N - 1, M - 1];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [[0, 0]];
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: M }).fill(false)
  );
  visited[0][0] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    //도착
    if (x === target[0] && y === target[1]) {
      return maze[x][y];
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx <= target[0] &&
        ny <= target[1] &&
        maze[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
        maze[nx][ny] = maze[x][y] + 1;
      }
    }
  }
}
console.log(solve());
