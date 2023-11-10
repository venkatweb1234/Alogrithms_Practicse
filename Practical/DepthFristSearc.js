function DFS(graph, node) {
  const visited = new Set();
  function dfsRecursive(node) {
    if (!node || visited.has(node)) return;
    visited.add(node);
    console.log(node);
    for (const neighbor of graph[node]) {
      dfsRecursive(neighbor);
    }
  }
  dfsRecursive(node);
}

// Sample graph represented as an adjacency list
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
const node = "A";
console.log(DFS(graph, node));
