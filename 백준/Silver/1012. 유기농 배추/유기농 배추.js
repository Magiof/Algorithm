let fs = require('fs');
let [T, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', '').split(' ').map(Number));

const answer = [];
for (let i = 1; i <= T; i++) {
  const [M, N, K] = input[0];
  const cabbageCoordinates = input.slice(1, K + 1);

  const field = getField(M, N, cabbageCoordinates);
  input = input.slice(K + 1);

  answer.push(countBug(field));
}

function getField(M, N, cabbageCoordinates) {
  const field = [...Array(M)].map(() => Array(N).fill(0));
  for (const coordinate of cabbageCoordinates) {
    field[coordinate[0]][coordinate[1]] += 1;
  }

  return field;
}

function countBug(field) {
  let visited = new Array(field.length)
    .fill(false)
    .map(() => new Array(field[0].length).fill(false));
  let bugCount = 0;

  function dfs(x, y) {
    // 방문한 위치를 참으로 설정
    visited[x][y] = true;
    // 상하좌우 방향의 좌표를 설정
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newX < field.length &&
        newY >= 0 &&
        newY < field[0].length &&
        field[newX][newY] === 1 &&
        !visited[newX][newY]
      )
        dfs(newX, newY);
    }
  }

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[0].length; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        bugCount++;
        dfs(i, j);
      }
    }
  }

  return bugCount;
}

console.log(answer.join('\n'));