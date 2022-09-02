/**
 * Initialize your data structure here.
 * 栈是先进后出 LIFO push pop
 * 队列先进先出 FIFO push shift
 * 请你仅使用两个队列(先入先出)实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 */
var MyStack = function () {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x);

};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift())
    }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {

};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {

};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const stack = new MyStack();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
// console.log(stack.pop());
// stack.push(3)
// stack.push(4)
// console.log(stack.pop());