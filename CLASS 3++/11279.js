class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value); // 힙 배열의 끝에 새로운 값을 추가합니다.
    let index = this.heap.length - 1;
    while (index > 0) {
      // 새로운 값이 부모 노드보다 큰 경우 위치를 바꿔줍니다.
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] <= this.heap[parentIndex]) break;
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
    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop(); // 끝에 있는 값을 루트로 이동합니다.
    let index = 0;
    while (true) {
      // 자식 노드 중 큰 값을 가진 노드와 위치를 바꿔줍니다.
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let maxChildIndex = leftChildIndex;
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[maxChildIndex]
      ) {
        maxChildIndex = rightChildIndex;
      }
      if (
        leftChildIndex >= this.heap.length ||
        this.heap[maxChildIndex] <= this.heap[index]
      )
        break;
      [this.heap[index], this.heap[maxChildIndex]] = [
        this.heap[maxChildIndex],
        this.heap[index],
      ];
      index = maxChildIndex;
    }
    return maxValue;
  }
}

const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('11279.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solve(input) {
  const answer = [];
  const maxHeap = new MaxHeap();
  for (const element of input) {
    if (element) maxHeap.insert(element);
    else answer.push(maxHeap.delete());
  }

  return answer.join(`\n`);
}

console.log(solve(input));
