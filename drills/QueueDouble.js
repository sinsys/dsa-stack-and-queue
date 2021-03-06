class _Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class QueueDouble {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add an item to the top of the queue
  enqueue(val) {
    // create the new node and place the data in it
    const newNode = new _Node(val);
            
    // special case: no nodes in the list yet
    if (this.head === null) {
        this.head = newNode;
    } else {
      // link the current tail and new tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    // reassign the tail to be the new node
    this.tail = newNode;
  }

  // Remove an item from the bottom of the queue
  dequeue() {
    // If the queue is empty, there is nothing to dequeue
    if ( this.head === null ) {
      return;
    };

    // Declare our node to dequeue
    const node = this.head;

    // If this is the last item in the queue
    if ( node === this.tail ) {
      this.head = null;
      this.tail = null;
      return;
    };

    // Set the 2nd item in queue to our first
    this.head = this.head.next;
    this.head.prev = null;
    
    return node.val;
  };


}

module.exports = {
  QueueDouble,
  _Node
};