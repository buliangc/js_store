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

    out() {
        return this.item.reverse();
    }
}

function decimalToBinary(decNumber) {
    const stack = new Stack();
    let res = [];
    console.log(decNumber / 2);
    while (decNumber > 0) {
        stack.push(Math.floor(decNumber % 2))
        decNumber = Math.floor(decNumber / 2);
        console.log(decNumber);
    }
    console.log(stack.out().join(''));
}

decimalToBinary(1000)