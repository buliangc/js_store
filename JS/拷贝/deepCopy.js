// JSON.parse(JSON.Stringfy)
const obj = {
    name: "buliangc",
    say: {
        value: [7, 8, 9]
    }
}
const _typeCheak = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1);
}
const _sampleDeepClone = target => {
    // 补全代码
    let res = _typeCheak(target) == "Object" ? {} : [];
    if (typeof (target) == 'object' && target != null) {
        for (let key in target) {
            if (_typeCheak(target[key]) == 'Object' || _typeCheak(target[key]) == 'Array') {
                res[key] = _sampleDeepClone(target[key]);
            } else {
                res[key] = target[key];
            }
        }
        return res;
    } else {
        return target;
    }
}
// const _sampleDeepClone = target => {
//     // base case
//     if (target == null || typeof target !== 'object') {
//         return target;
//     }
//     const cloneTarget = Array.isArray(target) ? [] : {};
//     for (let key in target) {
//         if (target.hasOwnProperty(key)) {
//             if (target[key] && typeof target[key] == 'object') {
//                 // 递归
//                 cloneTarget[key] = _sampleDeepClone(target[key]);
//             } else {
//                 // 基本数据类型
//                 cloneTarget[key] = target[key];
//             }
//         }
//     }
//     return cloneTarget;
// };
const res = _sampleDeepClone(obj);
console.log(res);
res.say.value.push(5)
console.log(res);
console.log(obj);
const target = JSON.parse(JSON.stringify(obj));
target.say.value.push(5);

// function typeCheck(target) {
//     return Object.prototype.toString.call(target).slice(8, -1);
// }

// function deepClone(target) {
//     let cloneTarget = typeCheck(target) == "Object" ? {} : [];
//     // 1. 首先判断是基本数据类型和引用数据类型
//     if (typeof (target) == "object" && target != null) {
//         for (let prop in target) {
//             let propTarget = typeCheck(target[prop]);
//             // console.log(propTarget);
//             if (propTarget === "Object" || propTarget === "Array") { // 非引用数据类型
//                 let mid = deepClone(target[prop]);
//                 cloneTarget[prop] = mid;
//             } else {
//                 cloneTarget[prop] = target[prop];
//             }
//         };
//         return cloneTarget;
//     } else {
//         return target;
//     }
// };

// const res = deepClone(obj);
// res.say.value.push(5)
// console.log(res);
// console.log(obj);
