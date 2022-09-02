// 首先介绍一下堆的概念 堆在js中可以用数组来进行表示，最小堆的意思就是父节点的值小于每个子节点的值
// 实现最小堆类
class MinHeap {
    constructor() {
        this.heap = [];
    }
    /**
     * 
     * @param {Number} parentIndex 
     * @param {Number} childIndex 
     * @description 该函数用于交换父节点与子节点二者的值
     */
    swap(parentIndex, childIndex) {
        const temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[childIndex];
        this.heap[childIndex] = temp;
    }
    getParentIndex(childIndex) {
        // return Math.floor((childIndex - 1) / 2);
        return (childIndex - 1) >> 1;   // 由该节点的下标获取到父节点的下标
    }
    /**
     * 
     * @param {String} value 
     * @description 不断重复和父节点的值进行大小比较，
     * 如果该值小于父节点的值，则进行替换，直到下标为堆顶元素(进行递归操作)
     */
    shiftUp(index) {
        if (index == 0) return;  // 如果index下标已经是堆顶的下标，则直接进行返回，说明已经到达了堆顶元素
        const parent = this.getParentIndex(index);  // 首先获取父节点元素的下标
        if (this.heap[parent] > this.heap[index]) {
            this.swap(parent, index);
            this.shiftUp(parent);
        }
    }
    /**
     * 
     * @param {String} value 
     * @description 该函数用于在堆中插入一个值
     */
    insert(value) {
        this.heap.push(value);  // 首先将值插入到堆的末尾
        this.shiftUp(this.heap.length - 1);    // 然后将末尾的值进行上移操作，保证该插入的值，比父节点大。
    }
    /**
     * 
     * @param {Number} parentIndex 
     * @description 获取父节点的左子节点的下标
     */
    getLeftIndex(parentIndex) {
        return parentIndex * 2 + 1;
    }
    /**
     * 
     * @param {Number} parentIndex 
     * @description 获取父节点的右子节点的下标
     */
    getRightIndex(parentIndex) {
        return parentIndex * 2 + 2;
    }
    /**
     * 
     * @param {Number} index 
     * @description 不断重复和子节点的值进行大小比较，
     * 如果该值大于子节点的值，则进行替换
     */
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index);    // 交换左子节点与父节点的值
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index);    // 交换右子节点与父节点的值
            this.shiftDown(rightIndex);
        }
    }
    /**
     * @description 删除堆顶元素
     * 首先不能直接将堆顶元素进行删除，因为这样的话会破坏堆的结构
     * 可以将堆尾元素，与堆顶元素进行替换,然后堆顶元素再和下面的子节点进行比较
     */
    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    /**
     * @description 获取当前的this.heap的值
     */
    getHeap() {
        return this.heap;
    }
    /**
     * @description 获取堆顶元素
     */
    peek() {
        return this.heap[0];
    }
    /**
     * @description 获取堆的大小
     */
    size() {
        return this.heap.length;
    }
}


const newHeap = new MinHeap();

// [5,2,4,1,3,6,0]
newHeap.insert(5);
newHeap.insert(2);
newHeap.insert(4);
newHeap.insert(1);
newHeap.insert(3);
newHeap.insert(6);
newHeap.insert(0);
console.log(newHeap.getHeap());
