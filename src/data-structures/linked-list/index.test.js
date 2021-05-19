import LinkedList from '.';

describe('Testing Linked List', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList(10);
  });

  it('should be able to create a linked list with an initial value', () => {
    expect(linkedList.get(0)).toEqual(10);
  });
  it('should throw a TypeError if there is no value passed in the constructor', () => {
    expect(() => {
      new LinkedList();
    }).toThrow('LinkedList constructor must be called with an argument');
  });
  it('should be able to check the length of a linked list', () => {
    expect(linkedList.length).toEqual(1);
  });
  it('should be able to get a value at particular index', () => {
    expect(linkedList.get(0)).toEqual(10);
  });
  it('should return undefined if index value in the get() is out of bound', () => {
    expect(linkedList.get(1)).toBeUndefined();
  });
  it('should be able to append an item', () => {
    linkedList.append(100);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.get(1)).toEqual(100);
  });
  it('should be able to prepend an item', () => {
    linkedList.prepend(50);
    expect(linkedList.length).toEqual(2);
    expect(linkedList.get(0)).toEqual(50);
  });
  it('should be able to insert an item at any given index', () => {
    const myLinkedList = new LinkedList(0);
    myLinkedList.append(20);
    myLinkedList.append(30);
    myLinkedList.append(40);
    myLinkedList.insert(1, 10);
    expect(myLinkedList.length).toEqual(5);
    expect(myLinkedList.get(1)).toEqual(10);
  });
  it('should be able to delete an item at given index', () => {
    const myLinkedList = new LinkedList(0);
    myLinkedList.append(20);
    myLinkedList.append(30);
    myLinkedList.append(40);
    expect(myLinkedList.length).toEqual(4);
    myLinkedList.delete(0);
    expect(myLinkedList.length).toEqual(3);
    expect(myLinkedList.get(0)).toEqual(20);
  });
  it('should be able to delete the only item in the linked list', () => {
    const myLinkedList = new LinkedList(0);
    expect(myLinkedList.length).toEqual(1);
    myLinkedList.delete(0);
    expect(myLinkedList.length).toEqual(0);
    expect(myLinkedList.head).toBeNull();
  });
  it('should be able to reverse a LinkedList with only 1 item', () => {
    const myLinkedList = new LinkedList(1);
    myLinkedList.reverse();
    expect(myLinkedList.get(0)).toEqual(1);
  });
  it('should be able to reverse a LinkedList', () => {
    const myLinkedList = new LinkedList(1);
    myLinkedList.append(2);
    myLinkedList.append(3);
    myLinkedList.append(4);
    myLinkedList.append(5);
    myLinkedList.reverse();
    expect(myLinkedList.get(0)).toEqual(5);
    expect(myLinkedList.get(4)).toEqual(1);
  });
});
