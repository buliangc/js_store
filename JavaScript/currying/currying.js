// 函数柯理化
function currying(anonymous, length) {
    return function add(...args) {
        if(args.length > length) {

        }
    }
}

function add(...arg) {
    return arg.reduce((preVal, nextVal) => {
        return preVal + nextVal;
    });
}

let res = add(1, 2,3,4,5,6,7,8,9);
console.log(res);