// 实现深拷贝思路
// 基本数据类型直接进行拷贝
// 引用数据类型进行嵌套拷贝
// 如果原数据是数组,for prop是0,1,2
// 如果原数据是对象,for prop是属性名
// function deepCopy(source) {
//     let cloneTarget = Array.isArray(source)? []:{};
//     if(typeof(source) === 'object' && source !== null){
//         for(let prop in source){
//             if(typeof(source[prop]) === 'object'||Array.isArray(source[prop])){
//                 let target = deepCopy(source[prop])
//                 cloneTarget[prop] = target
//             }else{
//                 cloneTarget[prop] = source[prop]
//             }
//         }
//         return cloneTarget;
//     }
// }

// let source = [1,2,3,4,{a: 12,b: 15},5]
// let output = deepCopy(source)
// console.log(output);
// output[4].a = 20;
// console.log(output);
// console.log(source);
// let source = [1,2,3,4,{a: 12,b: 15}]
// let cloneTarget = JSON.parse(JSON.stringify(source))
// cloneTarget[4].a = 20;
// console.log(cloneTarget);
// console.log(source);

// function checkedType(target) {
//     return Object.prototype.toString.call(target).slice(8, -1)
// }

// //实现深度克隆  ----->针对对象/数组
// function clone(target) {
//     // 首先判断拷贝的数据类型
//     // 初始化result 成为最终克隆的返回数据
//     let result, targetType = checkedType(target);
//     if (targetType === 'Object') {
//         result = {};
//     } else if (targetType === 'Array') {
//         result = [];
//     }
//     else {  //如果输入为字符串，就没有必要再进行判断，直接返回即可
//         return target;
//     }
//     // 遍历目标数据
//     for (let k in target) {
//         // 获取遍历数据结构的每一项值
//         let value = target[k];  //target[k]表示属性值/数组值
//         // 判断目标结构里的每一项是否存在对象/数组
//         if ((checkedType(value) === 'Object') || (checkedType(value) === 'Array')) {
//             // 继续遍历获取到的Value值 开始套娃 进行递归
//             result[k] = clone(value)
//         } else {
//             //如果里面不是对象/数组之后，是基本是数据类型或者函数，直接进行赋值操作
//             result[k] = value;
//         }
//     }
//     return result;
// }
// let arr10 = [1, 2, { 'name': '不良菜' }, 4];
// let arr11 = clone(arr10);



function deepClone(target) {
    let cloneTarget = Object.prototype.toString.call(target).slice(8, -1) === 'Object' ? {} : [];

    if (typeof (target) === 'object' && target !== null) {
        for (let prop in target) {
            let props = Object.prototype.toString.call(target[prop]).slice(8, -1)
            console.log(prop);
            if (props === 'Object' || props === 'Array') {
                let mid = deepClone(target[prop]);
                cloneTarget[prop] = mid;
            } else {
                cloneTarget[prop] = target[prop];
            }
        }
        return cloneTarget;
    } else {
        return target;
    }
}

let arr = [1, 2, { 'name': '不良菜' }, 4];
// let arr = 3;
let out = deepClone(arr);
out[2].name = 'cc'
console.log(out);
console.log(arr);