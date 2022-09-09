const fs = require('fs');
const N = fs.readFileSync('2164.txt').toString() * 1;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) this.head = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }
  getSize() {
    return this._size;
  }
}

function solution(N) {
  let answer = 0;
  const node = new LinkedList();

  for (let i = 1; i <= N; i++) {
    node.add(i);
  }
  while (node.getSize() > 1) {
    node.removeHead();
    node.add(node.getHead());
    node.removeHead();
  }
  answer = node.getHead();

  return answer;
}

console.log(solution(N));
