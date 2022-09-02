// 函数柯里化作用 实现高阶函数
// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(add(1)(2)(3));

// 实现一个add方法，使计算结果能够满足如下预期：

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
// 写一个 sum 方法，当使用下面的语法调用时，能正常工作
// function sum() {
//     console.log(arguments.length);
//     return function () {

//     }
// }

// // console.log(sum(2, 3)); // Outputs 5
// console.log(sum(2)(3)); // Outputs 5

// 实现一个add函数 add(1)(2)(3) = 6; add(1,2,3)(4) = 10; add(1)(2)(3)(4)(5) = 15
// 通俗易懂的解释：用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数。
// 用闭包将参数保存起来，当参数的数量足够执行函数了，就开始执行函数
// 最终执行的函数
// function add(...args) {
//     return args.reduce((preValue, curValue) => {
//         return preValue + curValue;
//     });
// }
// fn为最后执行的函数
// function currying(fn) {
//     // 首先定义一个数组 用于保存所有的参数
//     const args = [];
//     return function result(...rest) {
//         if (rest.length == 0) {
//             return fn(...args);
//         } else {
//             args.push(...rest);
//             return result;
//         }
//     }
// }

// const curryingFun = currying(add)(1)(2)(3)()
// console.log(curryingFun);


// 函数柯理化
// var add = function (x, y, z) {
//     return x + y + z;
// }

// function currying1(fn) {
//     return function func(...args) {
//         if (args.length == fn.length) {
//             return fn(...args);
//         } else {
//             return function (...args2) {
//                 return func(...args.concat(args2))
//             }
//         }
//     }
// }

// const foo = currying1(add);
// console.log(foo);
// console.log(foo(1, 2, 3));
// console.log(foo(1)(2));
// console.log(foo(1, 2)(3));
// console.log(foo(1)(2, 3));


// 函数柯里化手写实现add(2, 3, 4) = 9, add(2, 3)(4) = 9, add(2)(3)(4) = 9

function sum(a, b, c) {
    return a + b + c;
}

function currying(fn) {
    return function func(...args) {
        if (args.length < fn.length) {
            return function (...args1) {
                return func(...args1.concat(args));
            }
        } else {
            return fn(...args);
        }
    }
}

const add = currying(sum);

console.log(add(2, 3, 4));
console.log(add(2, 3)(4));
console.log(add(2)(3)(4));