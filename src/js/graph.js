import Node from "./node.js";
import Edge from "./edge.js";

export default class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
  }

  generateSquare(n) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= n - 1; j++) {
        let node = this.addVertex();
        if (j - 1 >= 0) this.addEdge(i * n + j - 1, i * n + j);
        if (i - 1 >= 0) this.addEdge((i - 1) * n + j, i * n + j);
      }
    }
  }

  generateSheet(n, m) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= m - 1; j++) {
        let node = this.addVertex();
        if (j - 1 >= 0) this.addEdge(i * m + j - 1, i * m + j);
        if (i - 1 >= 0) this.addEdge((i - 1) * m + j, i * m + j);
      }
    }
  }

  generateCyllinder(radius, length) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    for (let i = 0; i <= radius - 1; i++) {
      for (let j = 0; j <= length - 1; j++) {
        let node = this.addVertex();
        if (j - 1 >= 0) this.addEdge(i * length + j - 1, i * length + j);
        if (i - 1 >= 0) this.addEdge((i - 1) * length + j, i * length + j);
      }
    }
    for (let j = 0; j <= length - 1; j++) {
      this.addEdge(j, (radius - 1) * length + j);
    }
  }

  generateTorus(radius, length) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    this.generateCyllinder(radius, length);
    for (var i = 0; i <= radius - 1; i++) {
      this.addEdge(i * length, i * length + length - 1);
    }
  }

  generateKlein(n) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    this.generateCyllinder(n, n);
    for (var i = 0; i <= n - 1; i++) {
      console.log(i);
      this.addEdge(i * n, (n - i) * n - 1);
    }
  }

  generateMobius(n, m) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    this.generateSheet(n, m);
    for (let i = 0; i <= n - 1; i++) {
      this.addEdge(i * m, (n - i) * m - 1);
    }
  }

  generateSolidCube(n) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();

    for (var k = 0; k <= n - 1; k++) {
      for (var i = 0; i <= n - 1; i++) {
        for (var j = 0; j <= n - 1; j++) {
          this.addVertex();
          if (j - 1 >= 0)
            this.addEdge(n * n * k + i * n + j - 1, n * n * k + i * n + j);
          if (i - 1 >= 0)
            this.addEdge(n * n * k + (i - 1) * n + j, n * n * k + i * n + j);
          if (k - 1 >= 0)
            this.addEdge(n * n * (k - 1) + i * n + j, n * n * k + i * n + j);
        }
      }
    }
  }

  generateCube(n) {
    this.nodes = [];
    this.edges = [];
    this.neighbors = new Map();
    this.degrees = new Map();
    this.nodeMap = new Map();
    this.generateSheet(n, 4 * n);

    for (var i = 0; i <= n - 2; i++) {
      for (var j = 0; j <= n - 2; j++) {
        this.addVertex();
        if (j - 1 >= 0)
          this.addEdge(
            4 * n * n + i * (n - 1) + j - 1,
            4 * n * n + i * (n - 1) + j
          );
        if (i - 1 >= 0)
          this.addEdge(
            4 * n * n + (i - 1) * (n - 1) + j,
            4 * n * n + i * (n - 1) + j
          );
      }
    }

    for (var i = 0; i <= n - 2; i++) {
      this.addEdge((n - 1) * 4 * n + 2 * n + 1 + i, 4 * n * n + i);
    }

    /* for (var i = 0; i <= n - 2; i++) {
      for (var j = 0; j <= n - 1; j++) {
        this.addVertex();
        if (j - 1 >= 0)
          this.addEdge(
            4 * n * n + (n - 1) * (n - 1) + i * n + j - 1,
            4 * n * n + (n - 1) * (n - 1) + i * n + j
          );
        if (i - 1 >= 0)
          this.addEdge(
            4 * n * n + (n - 1) * (n - 1) + (i - 1) * n + j,
            4 * n * n + (n - 1) * (n - 1) + i * n + j
          );
      }
    }
    for (var i = 0; i <= n - 1; i++) {
      this.addEdge(2 * n + i + 1, 4 * n * n + (n - 1) * (n - 1) + i);
    }

    //X
    for (var i = 0; i <= n - 1; i++) {
      this.addEdge(4 * n * i, 4 * n * i + 4 * n - 1);
    }

    //A
    for (var i = 0; i <= n - 1; i++) {
      //this.addEdge(4*n*(n-1)+3*n +i , )
    } */
  }

  //generateSphere(n)

  nextId() {
    if (this.nodes.length == 0) return 0;
    else return this.nodes[this.nodes.length - 1].id + 1;
  }

  addVertex() {
    var new_node = new Node(this.nextId());
    this.nodes.push(new_node);
    this.nodeMap[new_node.id] = new_node;
    return new_node;
  }

  addEdge(u, v) {
    this.edges.push(new Edge(this.nodeMap[u], this.nodeMap[v]));
    if (typeof this.neighbors[u] == "undefined") {
      this.neighbors[u] = [v];
    } else this.neighbors[u].push(v);
    if (typeof this.neighbors[v] == "undefined") {
      this.neighbors[u] = [u];
    } else this.neighbors[u].push(u);
    this.nodeMap[u].degree += 1;
    this.nodeMap[v].degree += 1;
  }
}
