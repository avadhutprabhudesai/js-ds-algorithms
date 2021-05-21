import Queue from '.';

describe('Name of the group', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it('should be able to add an item to the queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek().value).toEqual(10);
    expect(queue.length).toEqual(3);
  });
  it('should be able to get an item from the queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toEqual(10);
    expect(queue.length).toEqual(2);
    expect(queue.dequeue()).toEqual(20);
    expect(queue.length).toEqual(1);
    expect(queue.dequeue()).toEqual(30);
    expect(queue.length).toEqual(0);
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
  });
  it('should be able to view first item of the queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek().value).toEqual(10);
  });
});
