Array.prototype.mySome = function (fn) {
    let arr = this;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            count++;
        }
    }
    if (count >= 1) {
        return true;
    } else {
        return false;
    }
}

let arr = [1, 2, 3, 4, 5, 6];
let res = arr.mySome((value) => {
    return value > 4;
});
console.log(arr, res);