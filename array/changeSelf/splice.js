Array.prototype.mySplice = function (start, deleteCount, ...args) {
    var arr = this;
    var arrLength = this.length;
    var res = [];
    if (deleteCount <= 0) {  // 不移除元素，至少添加元素
        for (let i = arguments.length + arrLength - 1; i >= start; i--) {
            if (i > start) {
                arr[i + 1] = arr[i]
            } else {
                arr[i] = arguments[0]
            }
        }
    }
    return res;
}

let arr = ['Jerry', 'Tom', 'Kitty', 'Panda', 'Monkey'];
let res = arr.mySplice(2, 0, 'buliangc');
console.log(arr, res);