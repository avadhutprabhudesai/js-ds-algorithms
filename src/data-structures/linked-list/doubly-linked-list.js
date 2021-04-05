export default class DoublyLinkedList {
  constructor(value) {
    if (!value && value !== 0)
      throw Error(
        'DoublyLinkedList constructor must be called with an argument'
      );
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  _createNode = () => ({
    value: null,
    next: null,
    prev: null,
  });

  _getNodeAt(index) {
    let counter = 0;
    let node = this.head;
    while (counter < index) {
      node = node.next;
      counter++;
    }
    return node;
  }
  get(index) {
    const node = this._getNodeAt(index);
    return node?.value;
  }
  append(value) {
    const newNode = this._createNode();
    newNode.value = value;
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = this._createNode();
    newNode.value = value;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length - 1) {
      this.append(value);
    } else {
      const nodeAtPos = this._getNodeAt(index);
      const prevNode = nodeAtPos.prev;
      const newNode = this._createNode();
      newNode.value = value;
      newNode.prev = prevNode;
      newNode.next = nodeAtPos;
      nodeAtPos.prev = newNode;
      prevNode.next = newNode;
      this.length++;
    }
  }
  delete(index) {
    const nodeToDelete = this._getNodeAt(index);
    const prevNode = nodeToDelete.prev;
    prevNode.next = nodeToDelete.next;
    nodeToDelete.next.prev = prevNode;
    this.length--;
  }
  toString() {
    const values = [];
    let node = this.head;
    while (node !== null) {
      values.push(node.value);
      node = node.next;
    }
    return values.join(' -> ');
  }
}
