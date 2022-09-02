// 浅拷贝方法   拷贝对象assign 拷贝数组slice concat 扩展运算符
// Object.assign

let obj = { name: "buliangc", age: [1, 2, 3] };

let obj1 = Object.assign({}, obj);

console.log(obj == obj1);

obj1.name = "lss";      // 属性为基本数据类型   不同时改变  深拷贝
obj1.age[0] = "111";    // 属性为引用数据类型   同时改变    浅拷贝
console.log(obj, obj1);

// Array.prototype.slice()
// slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。
const arr = [1, 2, 3, { name: "buliangc" }];

const arr1 = arr.slice();

console.log(arr == arr1);
arr1[0] = 111;          // 深拷贝
arr1[3].name = "lss";   // 浅拷贝
console.log(arr, arr1);

// Array.prototype.concat()

const arr2 = [1, 2, 3, { name: "buliangc" }];

const arr3 = arr2.concat([]);

console.log(arr2 == arr3);
arr3[0] = 111;          // 深拷贝
arr3[3].name = "lss";   // 浅拷贝
console.log(arr2, arr3);

// 使用拓展运算符实现的复制
const arr4 = [1, 2, 3, { name: "buliangc" }];

const arr5 = [...arr4];

console.log(arr4 == arr5);
arr5[0] = 111;          // 深拷贝
arr5[3].name = "lss";   // 浅拷贝
console.log(arr4, arr5);

