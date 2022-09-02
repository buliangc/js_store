/**
 * Initialize your data structure here.
 * 两个栈实现先入先出队列
 */
var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x);
    console.log(this.stack1);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop() || null;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.stack2.length != 0) {
        return this.stack2[this.stack2.length - 1]
    } else {
        return this.stack1[0] || null;
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.stack1.length != 0 && this.stack2.length != 0) {
        return false;
    }
    return true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
var p1 = myQueue.peek(); // return 1
console.log(p1);
var p2 = myQueue.pop(); // return 1, queue is [2]
console.log(p2);
myQueue.empty(); // return false
