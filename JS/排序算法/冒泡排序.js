const arr = [2, 1, 3, 4, 7, 6, 5]
function maopao(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}

maopao(arr);
// 冒泡排序的时间复杂度 O(n^2) 最好的情况：全是正序：需要O(n)