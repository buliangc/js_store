// 从后向前查找 判断后面那个是不是比自己小 小的话就向前
const arr = [2, 1, 3, 4, 7, 6, 5]

function charu(arr) {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        let current = arr[i];
        let j = i - 1;   // 从当前位置的前一个开始往前比较
        while (arr[j] > current && j >= 0) {
            const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j -= 1;
        }
    }
    console.log(arr);
    return arr;
}

charu(arr);

// 插入排序 时间复杂度 最坏O(n^2) 最好O(n)
// 第一个元素相当于已排序，从第二个元素开始
// 使用while循环 找到前面比current小的，进行置换