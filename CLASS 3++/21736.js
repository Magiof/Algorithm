const fs = require('fs');
const input = fs.readFileSync('21736.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const campus = input.map((e) => e.split(''));

function campusPeople(N, M, campus) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let doyeonX, doyeonY;

  // 도연이의 위치를 찾습니다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (campus[i][j] === 'I') {
        doyeonX = i;
        doyeonY = j;
        break;
      }
    }
  }

  let q = [];
  let dist = new Array(N).fill(0).map(() => new Array(M).fill(-1));

  // 시작점인 도연이의 위치를 큐에 추가하고 거리를 0으로 설정합니다.
  q.push([doyeonX, doyeonY]);
  dist[doyeonX][doyeonY] = 0;

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 캠퍼스 범위 내에 있고, 방문하지 않았으며, 벽이 아니라면 탐색합니다.
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < M &&
        dist[nx][ny] === -1 &&
        campus[nx][ny] !== 'X'
      ) {
        dist[nx][ny] = dist[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }

  let peopleCount = 0;

  // 각 위치에서의 거리를 검사하여 사람을 찾으면 카운트를 증가시킵니다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (campus[i][j] === 'P' && dist[i][j] !== -1) {
        peopleCount++;
      }
    }
  }

  return peopleCount === 0 ? 'TT' : peopleCount;
}

console.log(campusPeople(N, M, campus));
