import DoublyLinkedList from './doubly-linked-list';

describe('Testing Linked List', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new DoublyLinkedList(10);
  });

  it('should be able to create a linked list with an initial value', () => {
    expect(linkedList.get(0)).toEqual(10);
  });
  // .should be able to check the length of a linked list
  it('should be able to check the length of a linked list', () => {
    expect(linkedList.length).toEqual(1);
  });
  // .should throw a TypeError if there is no value passed in the constructor
  it('should throw a TypeError if there is no value passed in the constructor', () => {
    expect(() => {
      const myLinkedList = new DoublyLinkedList();
    }).toThrow('DoublyLinkedList constructor must be called with an argument');
  });
  // .should be able to get a value at particular index
  it('should be able to get a value at particular index', () => {
    expect(linkedList.get(0)).toEqual(10);
  });
  // .should return undefined if index value in the get() is out of bound
  it('should return undefined if index value in the get() is out of bound', () => {
    expect(linkedList.get(1)).toBeUndefined();
  });
  // .should be able to append an item
  it('should be able to append an item', () => {
    linkedList.append(100);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.get(1)).toEqual(100);
  });
  // .should be able to prepend an item at the beginning
  it('should be able to prepend an item', () => {
    linkedList.prepend(50);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.get(0)).toEqual(50);
  });
  // .should be able to insert an item at any given index
  it('should be able to insert an item at any given index', () => {
    const myLinkedList = new DoublyLinkedList(0);
    myLinkedList.append(20);
    myLinkedList.append(30);
    myLinkedList.append(40);
    myLinkedList.insert(1, 10);
    expect(myLinkedList.length).toEqual(5);
    expect(myLinkedList.get(1)).toEqual(10);
  });
  // .should be able to delete an item at given index
  it('should be able to delete an item at given index', () => {
    const myLinkedList = new DoublyLinkedList(0);
    myLinkedList.append(20);
    myLinkedList.append(30);
    myLinkedList.append(40);
    expect(myLinkedList.length).toEqual(4);
    myLinkedList.delete(1);
    expect(myLinkedList.length).toEqual(3);
    expect(myLinkedList.get(1)).toEqual(30);
  });
});
