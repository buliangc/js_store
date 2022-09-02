// 快速排序
Array.prototype.quickSearch = function () {
    const rec = (arr) => {
        if (arr.length === 1 || arr.length === 0) { return arr; }
        const left = [];    // 用来存储基准左右侧是元素
        const right = [];
        const mid = arr[0]; // 基准
        for (let i = 1; i < arr.length; i++) {  // 从第二项元素开始
            if (arr[i] < mid) {       // 如果当前元素小于基准，就将其放入左侧数组中
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...rec(left), mid, ...rec(right)];

    };
    const res = rec(this);
    res.forEach((value, key) => {
        this[key] = value;
    })
}

// const arr = [6, 5, 4, 3, 2, 1];
const arr = [2, 7, 6, 3, 2, 1];
arr.quickSearch();
console.log(arr);