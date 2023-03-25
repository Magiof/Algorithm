const fs = require('fs');
const [NM, ...names] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);

function getIntersection() {
  const aTypeNames = names.slice(0, N).sort((a, b) => a.localeCompare(b));
  const bTypeNames = names.slice(N).sort((a, b) => a.localeCompare(b));
  const intersection = [];
  let i = 0,
    j = 0;

  while (i < aTypeNames.length && j < bTypeNames.length) {
    if (aTypeNames[i] < bTypeNames[j]) {
      i++;
    } else if (aTypeNames[i] > bTypeNames[j]) {
      j++;
    } else {
      intersection.push(aTypeNames[i]);
      i++;
      j++;
    }
  }

  return intersection;
}

function getResult() {
  const intersection = getIntersection();
  const intersectionElement = intersection.join(`\n`);
  const intersectionLength = intersection.length;
  const result = `${intersectionLength}\n${intersectionElement}`;

  return result;
}
console.log(getResult());
