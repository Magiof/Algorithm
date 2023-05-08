class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value); // 힙 배열의 끝에 새로운 값을 추가합니다.
    let index = this.heap.length - 1;
    while (index > 0) {
      // 새로운 값이 부모 노드보다 작은 경우 위치를 바꿔줍니다.
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  delete() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop(); // 끝에 있는 값을 루트로 이동합니다.
    let index = 0;
    while (true) {
      // 자식 노드 중 작은 값을 가진 노드와 위치를 바꿔줍니다.
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let minChildIndex = leftChildIndex;
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[minChildIndex]
      ) {
        minChildIndex = rightChildIndex;
      }
      if (
        leftChildIndex >= this.heap.length ||
        this.heap[minChildIndex] >= this.heap[index]
      )
        break;
      [this.heap[index], this.heap[minChildIndex]] = [
        this.heap[minChildIndex],
        this.heap[index],
      ];
      index = minChildIndex;
    }
    return minValue;
  }
}

const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('1927.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solve(input) {
  const answer = [];
  const minHeap = new MinHeap();
  for (const element of input) {
    if (element) minHeap.insert(element);
    else answer.push(minHeap.delete());
  }

  return answer.join(`\n`);
}

console.log(solve(input));
