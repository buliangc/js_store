Array.prototype.myEvery = function (fn) {
    let arr = this;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            count++;
        }
    }
    if (count == arr.length) {
        return true;
    } else {
        return false;
    }
}

let arr = [5, 6, 5, 8];
let res = arr.myEvery((value) => {
    return value > 4;
});
console.log(arr, res);