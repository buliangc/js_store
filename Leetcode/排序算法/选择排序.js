// 选择排序 通过一轮轮的选择，将最小的值选择出来
Array.prototype.selectSort = function () {
    for (let j = 0; j < this.length - 1; j++) {
        let minIndex = j;  // 初始化最初的最小值的下标
        for (let i = j; i < this.length; i++) {
            if (this[i] < this[minIndex]) {
                minIndex = i;
            }
        }
        if (minIndex !== i) {
            const temp = this[j];
            this[j] = this[minIndex];
            this[minIndex] = temp;
        }
    }
    return this;
}

const arr = [3, 2, 4, 6, 1, 5, 7, 9, 8];
console.log(arr.selectSort());