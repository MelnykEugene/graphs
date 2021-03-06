export default class Node {
  constructor(id) {
    this.id = id;
    this.degree = 0;
    this.x = Math.random() * 100 - 50;
    this.y = Math.random() * 100 - 50;
    this.nextX = this.x;
    this.nextY = this.y;
  }

  secondaryConstructor(neighbor) {
    this.neighbors.push(neighbor);
    this.degree = 1;
    neighbor.neighbors.push(this);
    neighbor.degree += 1;
    this.x = Math.random() - 0.5;
    this.y = Math.random() - 0.5;
    this.nextX = this.x;
    this.nextY = this.y;
  }
}
