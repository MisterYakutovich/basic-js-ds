const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    if (!this.arr) this.arr = [element];
    else this.arr[this.arr.length] = element;
  }

  pop() {
    let num;
    if (this.arr[0]) {
      num = this.arr[this.arr.length - 1];
      this.arr.splice(this.arr.length - 1, 1);
    }
    return num;
  }

  peek() {
    let num;
    if (this.arr[0]) num = this.arr[this.arr.length - 1];
    return num;
  }
}

module.exports = {
  Stack
};
