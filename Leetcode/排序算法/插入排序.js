// 实现插入排序
Array.prototype.insertSort = function () {
    for (let i = 1; i < this.length; i++) {
        const temp = this[i];   // 取出第二个变量
        let j = i;  // 第二个值的下标
        while (j > 0) { // 拿到前面所有值的下标
            if (this[j - 1] > temp) { // 如果前面的值大于第二个变量
                this[j] = this[j - 1];  // 向后移
            } else {
                break;
            }
            j--;
        }
        this[j] = temp;
    }
}

const arr = [5, 4, 3, 2, 1];
arr.insertSort();
// 时间复杂度：O(n^2)
