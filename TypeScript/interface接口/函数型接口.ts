/*
* ts中接口
*  函数型接口 ,非常类似于java、c#中使用lambda表达式传入匿名函数
*
* */
//
// //对两个数进行运算得到另一个数  函数型接口
interface CalcTwo {
    (a: number, b: number): number;
}


/**
 * 计算数组被某种算法运算的结果
 * @param {number[]} arr  数组
 * @param {CalcTwo} calc  用户指定的算法函数
 * @param {number} initVal  传入初始值
 * @returns {number}  得到最终运算结果
 */
function calcArr(arr: number[], calc: CalcTwo, initVal: number): number {
    var result = initVal;
    arr.forEach((value) => {
        result = calc(result, value);
    });

    return result;
}

var arr: number[] = [1, 3, 5, 7, 9];
var add = function (a: number, b: number): number {
    return a + b;
};

var multiply = function (a: number, b: number): number {
    return a * b;
};
console.log("相加", calcArr(arr, add, 0));//25
console.log("相乘", calcArr(arr, multiply, 1));//945
//或者直接传入一个匿名函数亦可
var s1 = calcArr(arr, function (a, b) {
    return a * b;
}, 1);
console.log("s1", s1);//945

var s2 = calcArr(arr, function (a, b) {
    return (a + 1) * (b + 1);
}, 1);
console.log("s2", s2);//10170