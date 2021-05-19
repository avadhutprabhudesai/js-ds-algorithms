import LinkedList from '../linked-list';

class HashTableWithLinkedList {
  constructor(size = 16) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash = (hash + key.charCodeAt(index)) % this.data.length;
    }
    return hash;
  }

  add(key, value) {
    const hash = this._hash(key);
    let linkedList = this.data[hash];
    if (!linkedList) {
      this.data[hash] = new LinkedList([key, value]);
    } else {
      linkedList.append([key, value]);
    }
  }

  get(key) {
    const hash = this._hash(key);
    let linkedList = this.data[hash];
    if (!linkedList || !linkedList.head) {
      return undefined;
    } else {
      let current = linkedList.head;
      while (current && current.value[0] !== key) {
        current = current.next;
      }
      return current && current.value[1];
    }
  }

  modify(key, newValue) {
    const hash = this._hash(key);
    let linkedList = this.data[hash];
    if (!linkedList) {
      return undefined;
    } else {
      let current = linkedList.head;
      while (current && current.value[0] !== key) {
        current = current.next;
      }
      if (current) {
        current.value[1] = newValue;
      }
    }
  }

  remove(key) {
    const hash = this._hash(key);
    let linkedList = this.data[hash];
    if (!linkedList) {
      return undefined;
    } else {
      let current = linkedList.head,
        pos = 0;
      while (current && current.value[0] !== key) {
        current = current.next;
        pos++;
      }
      if (current) {
        linkedList.delete(pos);
        this.data[hash] = linkedList;
      }
    }
  }
}

export default HashTableWithLinkedList;
