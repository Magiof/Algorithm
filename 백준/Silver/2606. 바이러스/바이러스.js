const fs = require('fs');
const [N, M, ...input] = fs
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', '').split(' ').map(Number));

function createGraph() {
  const graph = {};
  input.map(([from, to]) => {
    graph[from] = graph[from] ? [...graph[from], to] : [to];
    graph[to] = graph[to]
      ? graph[to].includes(from)
        ? graph[to]
        : [...graph[to], from]
      : [from];
  });

  return graph;
}

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length) {
    let node = stack.pop();
    if (!graph[node]) return [node];

    if (!visited.includes(node)) {
      visited.push(node);
      stack = stack.concat(graph[node].sort((a, b) => b - a));
    }
  }

  return visited;
}

function solve() {
  const graph = createGraph();
  const dfsResult = dfs(graph, 1);

  return dfsResult.length - 1;
}

console.log(solve());