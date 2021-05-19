import HashTableWithLinkedList from '.';

describe.only('Testing Linked List', () => {
  let hashTable;
  beforeEach(() => {
    hashTable = new HashTableWithLinkedList();
  });

  // should be able to add a key-value pair
  it('should be able to add a key-value pair', () => {
    hashTable.add('id', '1');
    expect(hashTable.get('id')).toEqual('1');
  });
  // should be able to retrive the value given a key
  it('should be able to retrive the value given a key', () => {
    hashTable.add('name', 'John');
    expect(hashTable.get('name')).toEqual('John');
  });

  // should be able to modify the value given a key
  it('should be able to modify the value given a key', () => {
    hashTable.add('name', 'John');
    hashTable.modify('name', 'Rambo');
    expect(hashTable.get('name')).toEqual('Rambo');
  });
  // should be able to remove the entry in hash table given a key
  it('should be able to remove the entry in hash table given a key', () => {
    hashTable.add('id', 1);
    hashTable.add('name', 'John');
    hashTable.remove('id');
    expect(hashTable.get('id')).toBeUndefined();
  });
});
