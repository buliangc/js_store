// 数组扁平化
const arr = [1, [2, 3], [4, [5, [6]], 7]];

// 普通 多创建一个数组 增加了空间复杂度
// 判断是否为数组 
let res = [];
let count = 0;
function myflat(arr, level) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && count < level) {
            count++;
            myflat(arr[i], level);
            count--;
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

// 进阶 使用reduce
function myflat1(arr, deep = 1) {
    let res = arr.reduce((preValue, curValue) => {
        if (Array.isArray(curValue) && deep > 1) {
            let mid = myflat1(curValue, deep - 1);
            return preValue.concat(mid);
        } else {
            return preValue.concat(curValue);
        }
    }, []);
    return res;
}

//  flat接收一个参数 扁平化的层数 默认一层  Infinity 是表示正无穷大的数值。
console.log(myflat1(arr, 3));
