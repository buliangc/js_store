class Stack {
    constructor() {
        this.item = [];
    }

    push(element) {
        this.item.push(element);
    }

    pop() {
        return this.item.pop();
    }

    peek() {
        return this.item[this.item.length - 1];
    }

    isEmpty() {
        return this.item.length === 0;
    }

    clear() {
        this.item = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(1)
stack.push(2)
console.log(stack.pop());
stack.push(3)
stack.push(4)
console.log(stack.pop());