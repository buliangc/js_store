// 函数柯理化
// var add1 = function (a, b, c) {
//     return a + b + c;
// }

// var currying = function (fn) {
//     return function func(...args) {
//         console.log('func args', args, 'fn length', fn.length)
//         if (args.length < fn.length) { //比方说我第一次就传了2个参数
//             return function (...args2) {
//                 return func(...args.concat(args2))
//             }
//         } else {
//             return fn(...args)
//         }
//     }
// }

// const add = currying(add1);
// console.log(add);
// console.log(add(1, 2, 3));
// console.log(add(1)(2)(3));
// console.log(add(1, 2)(3));
// console.log(add(1)(2, 3));
// var add1 = function (a, b) {
//     return a + b;
// }
// const currying = function (fn, ...args) {
//     if (args.length >= fn.length) {
//         return fn(...args);
//     } else {
//         return function (...args2) {
//             return currying(fn, ...args.concat(args2));
//         }
//     }
// }
// const add = currying(add1);
// console.log(add(1, 2));
// console.log(add(1)(2));

// 1.构造函数 currying,实现如下操作, (部分实施)
// const f = (a, b, c) => {
//     return a + b + c;
// };
// function currying(fn, ...args) {
//     // console.log(fn.length);
//     if (fn.length > args.length) {
//         return function (...args1) {
//             return currying(fn, ...args.concat(args1))
//         }
//     } else {
//         return fn(...args);
//     }
// }

// const g = currying(f, 1);
// console.log(g(2, 3));// -> 6

// const g2 = currying(f, 1, 2);
// console.log(g2(3)); // -> 6



// // 2.构造函数 currying,实现如下操作, (柯里化)
// const f = (a, b, c) => {
//     return a + b + c;
// };
// const g = currying(f);

// console.log(g(1)(2)(3)); // -> 6

// 实现一个add，支持如下方式调用
// function add(...args) {
//     let nums = args.reduce((preValue, currentValue) => preValue + currentValue);
//     return function fn(...args1) {
//         nums += args1.reduce((preValue, currentValue) => preValue + currentValue);
//         // add = nums
//         return fn;
//     }
// }
// add(1, 2)(3)
// console.log(add)
// add(1)(2, 3)(4)


// function add(...args) {
//     let num = args.reduce((preValue, currentValue) => preValue + currentValue);
//     return function fn(...args1) {
//         if (args1 == false) {
//             return num;
//         } else {
//             num += args1.reduce((preValue, currentValue) => preValue + currentValue);
//             return fn;
//         }

//     }
// }
function add(arg) {
    // body...
    let sum = 0;
    sum += arg;
    return function (tmarg) {
        // body...
        if (arguments.length == 0) {
            return sum;
        } else {
            sum += tmarg;
            return arguments.callee;
        }
    }
}
// console.log(add(1)(2)(3)(4)());//10
// console.log(add(1, 2)(3, 4)());//10
// console.log(add(1, 2)(3, 4))
// (1)console.log(add(1)(2)(3)(4)());//10
// (2)console.log(add(1,2)(3,4)());//10
// (3)console.log(add(1,2)(3,4));//10



function fn(...arg) {
    let num = arg.reduce((preValue, curValue) => preValue + curValue);
    const func = (...arg1) => {
        num += arg1.reduce((preValue, curValue) => preValue + curValue);
        return func;
    };
    func.getValue = () => num;
    return func;
}

var f1 = fn(1, 2, 3)
console.log(f1.getValue());//6

var f2 = fn(1)(2, 3)
console.log(f2.getValue());//6

var f3 = fn(1)(2)(3)(4)//不知道调用次数
console.log(f3.getValue());//10


// 柯里化  本质就是不断返回函数
