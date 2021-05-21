export default class StackWithArray {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.data = [];
    this.length = null;
  }

  push(value) {
    if (this.bottom === null) {
      this.bottom = value;
    }
    this.data.push(value);
    this.top = this.data[this.data.length - 1];
    this.length = this.data.length;
  }

  peek() {
    if (!this.length) {
      return null;
    }
    return this.data[this.data.length - 1];
  }

  pop() {
    const topItem = this.data.pop();
    this.length = this.data.length;
    if (this.length === 0) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.data[this.data.length - 1];
    }
    return topItem;
  }
}
