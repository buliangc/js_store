Array.prototype.myReverse = function () {
    var arr = this;
    var arrLength = arr.length;
    var copyArr = Array.from(arr);
    for (let i = 0; i < arrLength; i++) {
        console.log(copyArr[i]);
        arr[arrLength - i] = copyArr[i];
    }
    return arr;
}

let arr = ['Jerry', 'Tom', 'f', 'g', 'j'];
let res = arr.myReverse();
console.log(arr, res);