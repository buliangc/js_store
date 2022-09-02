// 单向链表 线性的数据结构 
// 双向链表
// 单向循环链表
// 双向循环链表
// 环形链表 任意两个节点之间形成 
/**
 * 表示我们想添加到链表中的项
 */
class Node {
    constructor(element) {
        this.element = element; // 表示加入链表元素的值
        this.next = null;   // 表示指向链表中指向下一个元素的指针
    }
}
/**
 * 单向链表类
 */
class LinkedList {
    constructor() {
        this.count = 0;
        this.head = null;
    }
    // 向队尾添加元素
    push(element) {
        const node = new Node(element);
        // 如果链表为空
        if (this.head === null) {
            this.head = node;
        } else {    // 头不为空 
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    //  在指定位置插入元素
    insert(element, index) {
        if (index > 0 && index < this.count) {
            const node = new Node(element);
            if (index === 0) {  // 在首部添加
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);  // 前一个元素
                const current = previous.next;
                previous.next = node;
                node.next = current;
            }
            this.count++;
            return true;
        }
        return null;
    }
    // 获取index位置元素位置
    getElementAt(index) {
        if (index > 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        } return null;
    }
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    // 返回一个元素的位置
    indexOf(element) {
        let node = this.head;
        for (let i = 0; i < this.count; i++) {
            if (node.element == element) {
                return i;
            }
            node = node.next;
        }
        return -1;
    }
    // 移除指定位置的元素
    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            if (index == 0) {    // 移除第一项元素
                this.head = current.next;
            } else {    // 移除非第一项元素
                // let previous;
                // for (let i = 0; i < index; i++) {
                //     previous = current;
                //     current = current.next;
                // }
                // previous.next = current.next;
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    isEmpty() {
        return this.count == 0;
    }
    size() {
        return this.count;
    }
    // 将LinkedList对象转化为字符串
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 0; i < this.count && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next;
        }
        return objString;
    }
}

const link = new LinkedList();
link.push(1);
link.push(2);
link.push(3);
link.push(4);
link.push(5);
link.push(6);
console.log(link.remove(1));
console.log(link.remove(2));
console.log(link.remove(3));
console.log(link.toString());
console.log(link.remove(4));
console.log(link.remove(5));

console.log(link.remove(6));
console.log(link.isEmpty());
let res = []
res.push(1, 2)
console.log(res);