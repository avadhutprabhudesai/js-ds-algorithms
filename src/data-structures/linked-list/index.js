import MyNode from './MyNode';

export default class LinkedList {
  constructor(value) {
    if (!value && value !== 0) {
      throw new TypeError(
        'LinkedList constructor must be called with an argument'
      );
    }
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  _validateIndex(index) {
    if (!index && index !== 0) {
      throw new TypeError('Invalid index');
    }
    return index < this.length;
  }
  _createNode(value) {
    return {
      value,
      next: null,
    };
  }
  _getNodeAt(index) {
    let count = 0;
    let node = this.head;
    while (count < index) {
      node = node.next;
      count++;
    }
    return node;
  }
  get(index) {
    if (!this._validateIndex(index)) return undefined;
    let node = this._getNodeAt(index);
    return node.value;
  }
  append(value) {
    let newNode = new MyNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = new MyNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(position, value) {
    if (!this._validateIndex(position))
      throw new Error('Position should be less than the length of the list');
    if (position === 0) {
      this.prepend(value);
      return;
    } else if (position === this.length - 1) {
      this.append(value);
      return;
    }
    let prevPos = 0,
      prevNode = this.head,
      newNode = new MyNode(value);

    while (prevPos <= position - 1) {
      prevNode = this._getNodeAt(prevPos);
      prevPos++;
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }
  delete(position) {
    let currentIndex = 0,
      prevIndex = -1,
      nodeToDelete = this.head;
    while (currentIndex < position) {
      prevIndex = currentIndex;
      currentIndex++;
    }
    let prevNode = this._getNodeAt(prevIndex);
    nodeToDelete = this._getNodeAt(currentIndex);
    prevNode.next = nodeToDelete.next;
    this.length--;
  }
  toString() {
    let values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values.join(',');
  }
}
