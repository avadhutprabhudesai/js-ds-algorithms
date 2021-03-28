/**
 Properties:
  length
  data
 */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    const popped = this.data[this.length - 1];
    this.length--;
    return popped;
  }
  delete(index) {
    for (let _index = index; _index < this.length - 1; _index++) {
      this.data[_index] = this.data[_index + 1];
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  insert(index, value) {
    for (let _index = this.length; _index > index; _index--) {
      this.data[_index] = this.data[_index - 1];
    }
    this.data[index] = value;
    this.length++;
  }
}
export default MyArray;
