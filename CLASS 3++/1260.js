const fs = require('fs');
const [[N, M, V], ...input] = fs
  .readFileSync('1260.txt')
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

function bfs(graph, start) {
  let visited = [];
  let queue = [start];

  while (queue.length) {
    let node = queue.shift();
    if (!graph[node]) return [node];

    if (!visited.includes(node)) {
      visited.push(node);
      queue = queue.concat(graph[node].sort((a, b) => a - b));
    }
  }

  return visited;
}

function solve() {
  const graph = createGraph();
  const dfsResult = dfs(graph, V)?.join(' ');
  const bfsResult = bfs(graph, V)?.join(' ');
  return `${dfsResult}\n${bfsResult}`;
}

console.log(solve());
