class QueueNode {
  value: number | undefined;
  next: QueueNode | undefined;

  constructor(value: number) {
    this.value = value;
  }
}

class Queue {
  private front: QueueNode | undefined;
  private rear: QueueNode | undefined;

  constructor() {
    this.front = undefined;
    this.rear = undefined;
  }

  insert(value: number) {
    const node = new QueueNode(value);

    if (this.rear === undefined && this.front === undefined) {
      this.front = node;
      this.rear = node;

      return;
    }
    const temp: QueueNode | undefined = this.rear;

    if (temp) {
      temp.next = node;
    }

    this.rear = node;
  }

  delete() {
    if (this.front === undefined) {
      console.log('Memory underflow!');
      return;
    }

    console.log(`Deleting ${this.front?.value}...`);
    this.front = this.front.next;

    if (this.front === undefined) {
      this.rear = undefined;
    }
  }

  print() {
    if (!this.front) {
      console.log('No contents!');

      return;
    }

    let temp: QueueNode | undefined = this.front;

    console.log('Printing contents...');

    while (temp) {
      console.log(temp.value);

      temp = temp.next;
    }
  }
}

const queue = new Queue();

queue.delete();

queue.insert(1);
queue.insert(2);
queue.insert(3);
queue.insert(4);

queue.print();

queue.delete();

queue.print();

queue.delete();
queue.delete();
queue.delete();

queue.print();

queue.insert(1);
queue.insert(2);
queue.insert(3);

queue.print();