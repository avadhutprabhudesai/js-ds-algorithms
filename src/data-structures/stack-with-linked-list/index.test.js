import StackWithLinkedList from '.';

describe.only('Testing Linked List', () => {
  let stack;
  beforeEach(() => {
    stack = new StackWithLinkedList();
  });

  it('should be able to push an item onto the stack', () => {
    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toEqual(20);
    expect(stack.bottom.value).toEqual(10);
    expect(stack.length).toEqual(2);
  });

  it('should be able to pop an item from the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toEqual(20);
    expect(stack.top.value).toEqual(10);
    expect(stack.length).toEqual(1);
  });

  it('should return to default state after popping last item', () => {
    stack.push(10);
    stack.push(20);
    stack.pop();
    expect(stack.top.value).toEqual(10);
    expect(stack.bottom.value).toEqual(10);
    stack.pop();
    expect(stack.top).toBeNull();
    expect(stack.bottom).toBeNull();
  });

  it('should be able to peek top of the stack', () => {
    expect(stack.peek()).toBeNull();
    stack.push(10);
    expect(stack.peek()).toEqual(10);
  });
});
