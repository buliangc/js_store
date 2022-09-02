// 二分查找的前提是数组是有序的
// 时间复杂度log(N)
Array.prototype.binarySearch = function (item) {
    let low = 0;
    let high = this.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midElement = this[mid];
        if (midElement < item) {    // 如果目标值大于中间元素
            low = mid + 1;

        } else if (midElement > item) {     // 如果目标值小于中间元素
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

const index = [1, 2, 3, 4, 5].binarySearch(0);
console.log(index);