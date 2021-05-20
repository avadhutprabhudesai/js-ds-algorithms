class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackWithLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    const holdingPointer = this.top;
    if (this.length === 0) {
      this.bottom = newNode;
    }
    this.top = newNode;
    this.top.next = holdingPointer;
    this.length++;
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    const holdingPointer = this.top;

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
      return holdingPointer.value;
    }

    this.top = this.top.next;
    this.length--;
    return holdingPointer.value;
  }

  peek() {
    return this.top && this.top.value;
  }
}

export default StackWithLinkedList;
