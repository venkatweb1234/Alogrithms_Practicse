class Graph {
  constructor() {
    this.adjencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      this.adjencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjencyList[vertex1].add(vertex2);
    this.adjencyList[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjencyList[vertex1].delete(vertex2);
    this.adjencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjencyList[vertex];
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjencyList[vertex1].has(vertex2) &&
      this.adjencyList[vertex2].has(vertex1)
    );
  }
  display() {
    for (let vertex in this.adjencyList) {
      console.log(vertex + " ->" + [...this.adjencyList[vertex]]);
    }
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();
console.log(graph.hasEdge("A", "C"));
// graph.removeEdge("A", "B");
graph.removeVertex("B");
graph.display();
