// function add() {
//     // 第一次执行时，定义一个数组专门用来储存所有的参数
//     var args = Array.from(arguments);
//     // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//     var adder = function () {
//         args.push(...arguments);
//         return adder;
//     };
//     // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//     adder.toString = function () {
//         return args.reduce((a, b) => a + b);
//     }
//     return adder;
// }



// console.log(add(1)(2).toString());
// console.log(add(1, 2, 3)(10).toString());// 16
// add(1)(2)(3)(4)(5) // 15

// let fn = []

// fn.toString = function () {
//     console.log("toString");
//     return []
// }
// fn.valueOf = function () {
//     console.log("valueOf");
//     return []
// }

// console.log(String(fn))

function add() {
    var args = Array.prototype.slice.call(arguments);
    var fn = function () {
        var arg_fn = Array.prototype.slice.call(arguments);
        return add.apply(null, args.concat(arg_fn));
    }
    fn.valueOf = function () {
        return args.reduce(function (a, b) { return a + b; })
    }
    return fn;
}
let a = add(1) // 1
console.log(a);
add(1, 2)(3) //6
add(1)(2)(3)(4)(5) // 15