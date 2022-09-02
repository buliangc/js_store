/**
 * 双端队列 栈和队列的结合 先进先出 后进先出都支持
 */
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    addFront(element) {
        if (this.isEmpyt()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {    // 没有移除过元素，所有此时的this.lowestCount仍然等于0
            for (let i = this.count; i > 0; i--) {
                this.items[this.count] = this.items[i - 1];
            }
            this.items[this.lowestCount] = element;
            this.count++;
            console.log(this.items);
        }
    }
    addBack(element) {

        this.items[this.count] = element;
        this.count++;
    }
    removeFront() {
        if (this.isEmpyt()) {
            return null;
        }
        let res = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return res;
    }
    removeBack() {
        if (this.isEmpyt()) {
            return null;
        }
        this.count--;
        let res = this.items[this.count];
        delete this.items[this.count];
        return res;
    }
    peekFront() {
        return this.items[this.lowestCount];
    }
    peekBack() {
        return this.items[this.count - 1];
    }
    isEmpyt() {
        return this.count - this.lowestCount == 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    clear() {
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
    }
    toString() {
        if (this.isEmpyt()) {
            return null;
        }
        let objString = this.items[this.lowestCount];
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

const deque = new Deque();
console.log(deque.isEmpyt());
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpyt());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addBack('John');
console.log(deque.toString());
