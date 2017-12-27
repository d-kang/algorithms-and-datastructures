addToTail(value) {
  let node = this.makeNode(value);
  if (this.head === null && this.tail === null) {
    this.head = node;
    this.tail = node;
  } else if (this.head.next === null) {
    this.head.next = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
}
