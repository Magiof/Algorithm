const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('20529.txt')
  .toString()
  .trim()
  .split('\n');

function prepareSolving(n, input) {
  const cases = [];
  for (let i = 0; i < n * 2; i += 2) {
    cases.push([input[i + 1].split(' '), Number(input[i])]);
  }

  return cases;
}

function getDistance(a, b) {
  let distance = 0;
  for (let i = 0; i < 4; i++) if (a[i] !== b[i]) distance++;

  return distance;
}

function getMinDistanceBetweenThreeNodes(nodes) {
  if (nodes.length > 32) return 0;
  const n = nodes.length;
  let minDistance = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const totalDistance =
          getDistance(nodes[i], nodes[j]) +
          getDistance(nodes[j], nodes[k]) +
          getDistance(nodes[i], nodes[k]);
        minDistance = Math.min(minDistance, totalDistance);
      }
    }
  }

  return minDistance;
}

function solve(n, input) {
  const answers = [];
  const cases = prepareSolving(n, input);

  for (const _case of cases) {
    const answer = getMinDistanceBetweenThreeNodes(_case[0]);
    answers.push(answer);
  }

  return answers.join('\n');
}

console.log(solve(n, input));
