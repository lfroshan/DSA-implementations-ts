class Stack {
  size: number;
  pointer: number;
  array: number[];

  constructor(size: number) {
    this.size = size;
    this.pointer = -1;
    this.array = [];
  }

  insert(num: number) {
    if (this.pointer === (this.size - 1)) {
      console.log('Memory overflow');

      return;
    }

    this.array[this.pointer + 1] = num;
    this.pointer += 1;

    console.log(`number inserted: ${num}`);
  }

  remove() {
    if (this.pointer === -1) {
      console.log('Memory underflow');

      return;
    }

    const deleted = this.array[this.pointer];

    this.array.splice(this.pointer, 1);

    console.log(`Deleted ${deleted}`);
  }

  print() {
    console.log(this.array)
  }
}

const stack = new Stack(5);

stack.insert(1);
stack.insert(2);
stack.insert(3);
stack.insert(4);
stack.insert(5);
stack.insert(6);
stack.insert(7)

stack.remove();

stack.print();
