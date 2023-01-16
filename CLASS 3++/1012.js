let fs = require('fs');
let [T, ...input] = fs
  .readFileSync('1012.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replaceAll('\r', '').split(' ').map(Number));

for (let i = 1; i <= T; i++) {
  const [M, N, K] = input[0];
  const cabbageCoordinates = input.slice(1, K + 1);
  /**
   *  배추 밭 획득
   */
  const field = getField(M, N, cabbageCoordinates);
  input = input.slice(K + 1);
}

function getField(M, N, cabbageCoordinates) {
  const field = [...Array(M)].map(() => Array(N).fill(0));
  for (const coordinate of cabbageCoordinates) {
    field[coordinate[0]][coordinate[1]] += 1;
  }

  return field;
}

function countBug(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {}
  }
}
