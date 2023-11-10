// Queue implemented using Array

class Queue {
  constructor() {
    this.items = [];
  }
  // add element
  enqueue(element) {
    this.items.push(element);
  }
  // remove the element
  dequeue(element) {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
