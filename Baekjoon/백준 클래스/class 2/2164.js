let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = +input;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(n) {
    for (let val = 1; val <= N; val++) {
      let newNode = new Node(val);
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.size++;
    }
  }

  dequeue() {
    while (this.size !== 1) {
      let temp = this.first;
      this.first = temp.next;
      this.size--;
      this.last.next = this.first;
      this.last = this.first;
      this.first = this.first.next;
    }

    return this.first.value;
  }
}

const queue = new Queue();
queue.enqueue(N);
const result = queue.dequeue();
console.log(result);
