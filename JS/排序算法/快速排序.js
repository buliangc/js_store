// 快速排序过程
/*
*   先取出一个数作为基准值
*   根据这个基准值 再分为小于基准值的数组 和 大于基准值的数组
*   进行递归
*   当递归的数组小于两个的时候，跳出递归 将这个数组返回（条件） 
*   最后将每个数组拼接在一起
*/
const arr = [2, 1, 3, 4, 7, 6, 5]

function quickSort(arr) {
    // 递归确定返回条件
    if (arr.length < 2) {
        return arr;
    }
    let goal = arr[0];
    let minArr = arr.slice(1).filter(item => item <= goal);
    let maxArr = arr.slice(1).filter(item => item > goal);
    return quickSort(minArr).concat(goal).concat(quickSort(maxArr));
}

console.log(quickSort(arr));

// 快速排序 时间复杂度 O(nlogn)
// 空间复杂度 O(logn)
