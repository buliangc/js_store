class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    /**
     * 
     * @param {dynamic} element 
     */
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const res = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return res;
    }

    peek() {
        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.count - this.lowestCount == 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    // 输出
    toString() {
        if (this.isEmpty()) {
            return null;
        }
        let objString = this.items[this.lowestCount];
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }

        return objString;
    }
}

module.export = Queue;

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());
queue.enqueue('Camila');
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
console.log(queue.toString());
queue.dequeue();
console.log(queue.toString());
