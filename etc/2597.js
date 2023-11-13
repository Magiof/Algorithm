const fs = require('fs');
const [N, ...input] = fs.readFileSync('2597.txt').toString().trim().split('\n');

function solve(N, input) {
  let [start, end] = [0, Number(N)];
  let [reds, blues, yellows] = input.map((points) =>
    points.split(' ').map(Number)
  );

  ({ start, end, blues, yellows } = fold(1, start, end, {
    reds,
    blues,
    yellows,
  }));

  ({ start, end, yellows } = fold(2, start, end, {
    blues,
    yellows,
  }));

  ({ start, end } = fold(3, start, end, {
    yellows,
  }));

  return (end - start).toFixed(1);
}
function fold(count, start, end, { reds, blues, yellows }) {
  if (count === 1) {
    if (reds[1] === reds[0]) return { start, end, blues, yellows };
    const redsHalf = (reds[1] + reds[0]) / 2;
    let half = (end + start) / 2;
    if (half - redsHalf >= 0) start = redsHalf;
    else end = redsHalf;
    blues = getNewPointsAfterFold(start, end, blues);
    yellows = getNewPointsAfterFold(start, end, yellows);

    return { start, end, blues, yellows };
  }
  if (count === 2) {
    if (blues[1] === blues[0]) return { start, end, blues, yellows };
    const bluesHalf = (blues[1] + blues[0]) / 2;
    let half = (end + start) / 2;
    if (half - bluesHalf >= 0) start = bluesHalf;
    else end = bluesHalf;
    yellows = getNewPointsAfterFold(start, end, yellows);

    return { start, end, blues, yellows };
  }
  if (count === 3) {
    if (yellows[1] === yellows[0]) return { start, end, blues, yellows };
    const yellowsHalf = (yellows[1] + yellows[0]) / 2;
    let half = (end + start) / 2;
    if (half - yellowsHalf >= 0) start = yellowsHalf;
    else end = yellowsHalf;

    return { start, end, blues, yellows };
  }
}

function getNewPointsAfterFold(start, end, points) {
  return points
    .map((point) => {
      if (point < start) return start + (start - point);
      else if (point > end) return end - (point - end);
      else return point;
    })
    .sort();
}
console.log(solve(N, input));
