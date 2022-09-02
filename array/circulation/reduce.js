Array.prototype.myReduce = function(fn, initValue) {
    var arr = this;
    var currentIndex = arguments.length === 1? 1: 0;
    var currValue = arguments.length === 1 ? arr[0] : initValue;
    for(let i = currentIndex; i< arr.length; i++){
        currValue = fn(currValue, arr[i])
    }
    return currValue;
}

let arr = [1, 2, 3, 4, 5];

let result = arr.myReduce((preVal, nextVal) => {
    return preVal + nextVal;
}, 1);

console.log(result);