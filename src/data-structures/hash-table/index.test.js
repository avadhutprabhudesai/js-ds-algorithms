import HashTable from '.';

describe('Testing Hash Table', () => {
  let myHashTable;
  beforeEach(() => {
    myHashTable = new HashTable(50);
    myHashTable.add('grapes', 10000);
    myHashTable.add('keyWhichExists', 'valueForKeyWhichExists');
  });

  it('should generate same hash for given key for 6 consecutive times ', () => {
    let key = 'grapes';
    let hash = myHashTable._hash(key);
    expect(myHashTable._hash(key)).toEqual(hash);
    expect(myHashTable._hash(key)).toEqual(hash);
    expect(myHashTable._hash(key)).toEqual(hash);
    expect(myHashTable._hash(key)).toEqual(hash);
    expect(myHashTable._hash(key)).toEqual(hash);
    expect(myHashTable._hash(key)).toEqual(hash);
  });

  it('should be able to retrieve the value for key which exists in hash table', () => {
    expect(myHashTable.get('keyWhichExists')).toEqual('valueForKeyWhichExists');
  });

  it('should return undefined for key which does not exist in hash table', () => {
    expect(myHashTable.get('keyWhichDoesNotExist')).toBeUndefined();
  });

  it('should throw TypeError while trying to fetch an item with invalid key', () => {
    expect(() => {
      myHashTable.get(undefined);
    }).toThrow('Incompatible key argument');
    expect(() => {
      myHashTable.get(false);
    }).toThrow('Incompatible key argument');
    expect(() => {
      myHashTable.get(null);
    }).toThrow('Incompatible key argument');
  });

  it('should be able to add a key-value pair for valid keys', () => {
    myHashTable.add('validKey', 'value');
    expect(myHashTable.get('validKey')).toEqual('value');
  });

  it('should throw TypeError while adding an item with invalid key', () => {
    expect(() => {
      myHashTable.add(false, 'value');
    }).toThrow('Incompatible key argument');
  });

  it('should be able to delete an item by given key', () => {
    myHashTable.add('key', 'value');
    myHashTable.delete('key');
    expect(myHashTable.get('key')).toBeUndefined();
  });

  it('should be able to modify value of an item by given key', () => {
    myHashTable.modify('grapes', 100);
    expect(myHashTable.get('grapes')).toEqual(100);
  });

  it('should return an array of all keys from a hash table', () => {
    expect(myHashTable.keys()).toStrictEqual(['keyWhichExists', 'grapes']);
  });
});
