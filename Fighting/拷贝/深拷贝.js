// 最简单的JSON.stringfy(JSON.parse())
let obj = {
    name: "buliangc",
    age: 18,
    arr: [1, 2, 3]
}
// let arr = ["buliangc", 18, { name: "lss" }]
// let res = JSON.parse(JSON.stringify(obj));
// let res1 = JSON.parse(JSON.stringify(arr));
// console.log(res);
// console.log(res1);
// res.name = "lss";
// res.arr[0] = 123;
// res1[0] = 123;
// res1[2].name = 123;

// console.log(obj, res);
// console.log(arr, res1);

// 深拷贝
function type(a) {
    return Object.prototype.toString.call(a).slice(8, -1);

}
// type(target) == "object" || type(target) == "array"
function deepClone(target) {
    let res = type(target) == 'Object' ? {} : [];
    if (typeof (target) == 'object') {  // 引用数据类型
        for (let key in target) {
            if (type(target[key]) == 'Object' || type(target[key]) == 'Array') {
                let mid = deepClone(target[key]);
                res[key] = mid;
            } else {
                res[key] = target[key];
            }
        }
    } else {
        return target;  // 基本数据类型
    }
    return res;
}

let a = deepClone(obj)
a.name = "lss";
a.arr[0] = 123;
console.log(obj, a);

