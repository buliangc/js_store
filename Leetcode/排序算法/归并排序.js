// 实现归并排序
Array.prototype.mergeSort = function () {
    // 因为是递归操作
    const rec = (arr) => {
        if (arr.length == 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        const orderLeft = rec(left);    // 左边的有序数组
        const orderRight = rec(right);  // 右边的有序数组
        const res = [];
        while (orderLeft.length || orderRight.length) {
            // 如果左边数组有值 且 右边数组也有值
            if (orderLeft.length && orderRight.length) {
                // 比较队头，并将较小的值出队，推入res中
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
            } else if (orderLeft.length) { // 如果左边还有值，右边已经空了
                res.push(orderLeft.shift());
            } else if (orderRight.length) { // 如果左边还有值，右边已经空了
                res.push(orderRight.shift());
            }
        }
        return res;
    }
    const res = rec(this);
    res.forEach((n, i) => { this[i] = n }); // 重新进行拷贝，到this上面，相当于直接修改了arr数组
}

const arr = [5, 4, 3, 2, 1];
arr.mergeSort();
console.log(arr);