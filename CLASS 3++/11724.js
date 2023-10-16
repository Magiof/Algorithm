const fs = require('fs');
const [[N, M], ...lines] = fs
  .readFileSync('11724.txt')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.replace('\r', '').split(' ').map(Number));

function createGraph(M, N, lines) {
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let [u, v] of lines) {
    graph[u].push(v);
    graph[v].push(u);
  }

  return graph;
}

function dfs(graph, node, visited) {
  if (visited[node]) return;
  visited[node] = true;

  for (const neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}

function solve(M, N, lines) {
  const graph = createGraph(M, N, lines);

  let count = 0;
  const visited = Array(N + 1).fill(false);
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(graph, Number(i), visited);
      count++;
    }
  }

  return count;
}

console.log(solve(M, N, lines));
