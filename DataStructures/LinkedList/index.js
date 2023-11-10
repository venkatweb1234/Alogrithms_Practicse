class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  // O(1) constant
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = " ";
      while (curr) {
        listValues += `${curr.value}`;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  // O(n) Linear
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  //Remove
  removeFromIndex(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  // Reverse

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

const list = new LinkedList();
console.log("List is Empty?", list.isEmpty());
console.log("List Size", list.getSize());
// list.print();
//list.prepend(10);
// list.append(10);
// list.print();
// list.prepend(20);
// list.prepend(30);
// list.append(20);
// list.append(30);
// list.print();

list.insert(10, 0);
list.print();

list.insert(20, 0);
list.print();

list.insert(30, 1);
list.print();

list.insert(40, 2);
list.print();
// console.log(list.getSize());

// console.log(list.removeFromIndex(10));
// console.log(list.removeFromIndex(0));
// list.print();

// console.log(list.removeFromIndex(1));
// list.print();
// console.log(list.getSize());

// console.log(list.removeValue(40));
// list.print();

// console.log(list.removeValue(20));
// list.print();

//console.log(list.search(60));

list.reverse();
list.print();
