// 思想：先递归的分解数列，再合并数列
// 逐步归并数组
const arr = [2, 1, 3, 4, 7, 6, 5]

function Merger(left, right) {
    var result = [];
    // left right数组都存在
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    console.log(result);
    return result;
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return Merger(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr));

// 时间复杂度 O(nlogn) 空间复杂度O(n)
// 先分解数组 然后三个while
// 第一个while负责将left和right数组进行比较 第二 三个while负责将剩下的left right推入数组