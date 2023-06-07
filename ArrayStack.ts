import IStack from "./IStack";

/**
 *  基于数组的方式实现一个栈结构
 *
 */
class ArrayStack<T> implements IStack<T> {
  private data: T[] = [];

  push(element: T): void {
    this.data.push(element);
  }
  pop(): T | undefined {
    return this.data.pop();
  }
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  size(): number {
    return this.data.length;
  }
}
export default ArrayStack;
// const stack1 = new ArrayStack<string>();
// stack1.push("peyton");
// stack1.push("peng");
// stack1.push("www");

// console.log(stack1.peek());
