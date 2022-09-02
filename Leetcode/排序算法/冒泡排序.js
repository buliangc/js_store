// 实现冒泡排序
Array.prototype.maoPao = function () {
    let newArr = Array.from(this);
    // console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] > newArr[j]) {
                const temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    return newArr;
}

const arr = [1, 3, 2, 4, 6, 5, 7, 9, 8];
console.log(arr.maoPao());