export default class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let _index = 0; _index < key.length; _index++) {
      hash = (hash + key.charCodeAt(_index)) % this.data.length;
    }
    return hash;
  }
  _getBucket(key) {
    return this.data[this._hash(key)];
  }
  _getIndexWithinBucket(bucket, key) {
    return bucket.findIndex(([itemKey]) => {
      return itemKey === key;
    });
  }
  _isKeyInvalid(key) {
    return !key && key !== 0;
  }
  _validate(key) {
    if (this._isKeyInvalid(key))
      throw new TypeError('Incompatible key argument', 'Invalid key');
  }
  add(key, value) {
    this._validate(key);
    let hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
  }
  get(key) {
    this._validate(key);
    let bucket = this._getBucket(key);
    if (bucket) {
      for (let item of bucket) {
        let [itemKey, value] = item;
        if (itemKey === key) {
          return value;
        }
      }
    }
    return undefined;
  }
  delete(key) {
    this._validate(key);
    let bucket = this._getBucket(key);
    let indexOfItem;
    if (bucket) {
      indexOfItem = this._getIndexWithinBucket(bucket, key);
      bucket.splice(indexOfItem, 1);
    }
    this.data[this._hash(key)] = bucket;
  }
  modify(key, newValue) {
    this._validate(key);
    let bucket = this._getBucket(key);
    let indexOfItem = this._getIndexWithinBucket(bucket, key);
    bucket[indexOfItem][1] = newValue;
    this.data[this._hash(key)] = bucket;
  }
  keys() {
    const keysArray = [];
    for (let bucket of this.data) {
      if (bucket) {
        bucket.forEach(([key]) => keysArray.push(key));
      }
    }
    return keysArray;
  }
}
