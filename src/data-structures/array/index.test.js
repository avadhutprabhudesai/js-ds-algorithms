/* eslint-disable unicorn/no-array-push-push */
import MyArray from '.';

describe('Testing MyArray', () => {
  let array;
  beforeEach(() => {
    array = new MyArray();
  });
  // . Blank array can be initialized
  it('should initialize a blank array', () => {
    expect(array).toBeTruthy();
  });
  // . A value can be pushed to an array
  it('should push a value to an array', () => {
    array.push('John');
    expect(array.length).toEqual(1);
    expect(array.get(0)).toEqual('John');
  });
  // . Length property can be accessed on array object
  it('should return the length of the array', () => {
    expect(array.length).toEqual(0);
  });
  // . A Value can be retrieved from an array at given index if it exists
  it('should retrieve a value at given index', () => {
    array.push(1);
    array.push(2);
    expect(array.get(1)).toEqual(2);
  });
  // . undefined is returned if index is >= array length
  it('should return undefined if index is >= array length', () => {
    array.push(1);
    expect(array.get(1)).toBeUndefined();
  });
  // . A value can be popped out from an array
  it('should pop out the last value from an array', () => {
    array.push(1);
    array.push(2);
    array.push(3);
    array.push(4);
    expect(array.length).toEqual(4);
    const popped = array.pop();
    expect(popped).toEqual(4);
    expect(array.length).toEqual(3);
  });
  // . A value should be removed at a given index.
  it('should delete a value at a given index', () => {
    array.push(1);
    array.push(2);
    array.push(3);
    array.push(4);
    expect(array.length).toEqual(4);
    array.delete(2);
    expect(array.length).toEqual(3);
    expect(array.get(2)).toEqual(4);
    expect(array.get(3)).toBeUndefined();
  });
  // . A value should be inserted at the given index
  it('should insert a value at given index', () => {
    array.push(1);
    array.push(3);
    array.push(4);
    array.insert(1, 2);
    expect(array.get(1)).toEqual(2);
    expect(array.get(3)).toEqual(4);
    expect(array.length).toEqual(4);
  });
});
