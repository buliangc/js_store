const arr = [2, 1, 3, 4, 7, 6, 5]

function xuanze(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        const temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
    return arr;
}

xuanze(arr);

// 选择排序 找到每次最小的那个 进行置换
// 时间复杂度 O(n^2) 不占用额外空间
