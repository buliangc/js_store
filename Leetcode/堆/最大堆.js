// 实现最大堆
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    getParentIndex(childIndex) {
        return (childIndex - 1) >> 1;
    }
    // 交换父子节点的值
    swap(parentIndex, childIndex) {
        const temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[childIndex];
        this.heap[childIndex] = temp;
    }
    shiftUp(index) {
        const parent = this.getParentIndex(index);
        if (this.heap[parent] < this.heap[index]) {   // 如果父节点的值小于子节点的值，则进行替换
            this.swap(parent, index);
            this.shiftUp(parent);
        }
    }
    insert(value) {
        this.heap.push(value);  // 首先将值插入堆中
        this.shiftUp(this.heap.length - 1);
    }
}

const newHeap = new MaxHeap();
newHeap.insert(1);
newHeap.insert(2);
newHeap.insert(3);
console.log(newHeap.heap);