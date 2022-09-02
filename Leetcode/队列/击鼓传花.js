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
// 击鼓传花
function hotPotato(elementList, num) {
    const elimitateList = [];
    // 创建一个队列
    const queue = new Queue();
    // 首先将所有人都加入队列中去
    for (let i = 0; i < elementList.length; i++) {
        queue.enqueue(elementList[i]);
    }
    // 当只有一个人的时候停止游戏
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        // 将淘汰的那个进行保存
        elimitateList.push(queue.dequeue());
    }

    return {
        elimitateListed: elimitateList,
        winner: queue.dequeue(),
    }
}
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let result = hotPotato(names, 7);
console.log(result);