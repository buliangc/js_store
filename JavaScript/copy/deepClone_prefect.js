// typeof可以判断基本数据类型(除null)和函数
const isComplexDataType = obj => (typeof obj === 'object'||typeof obj === 'function')&&(obj !== null)
// 每一个实例对象的constructor指的创建obj的函数
const deepClone = function (obj, hash=new WeakMap()) {
    // 如果是日期对象,则直接返回一个新的日期对象
    if(obj.constructor === Date){
        return new Date(obj);
    }
    // 如果是正则对象, 则直接返回一个新的正则对象
    if(obj.constructor === RegExp){
        return new RegExp(obj);
    }
    // 如果循环引用了就用weakMap来解决
    if(hash.has(obj)){
        return hash.get(obj);
    }
    let allDesc = Object.getOwnPropertyDescriptor(obj);
    // 遍历传入参数所有键的特性
    let cloneObj = Object.create(Object.getPrototypeOf(obj),allDesc)
    // 继承原型链
    hash.set(obj, cloneObj);
    for(let key of Reflect.ownKeys(obj)){
        cloneObj[key] = (isComplexDataType(obj[key])&& typeof obj[key] !== 'function')? deepClone(obj[key],hash): obj[key];
    }
    return cloneObj
}

//下面是验证代码
let obj = {
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: {name: '我是一个对象', id: 1},
    arr: [0,1,2],
    func: function () {console.log('我是一个函数');},
    date: new Date(0),
    reg: new RegExp('/我是一个正则表达式/ig'),
    [Symbol('1')]: 1,
}

Object.defineProperty(obj, 'innumerable', {
    enumerable: false, value: '不可枚举属性'
});

obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj));
obj.loop = obj; // 设置loop成为循环引用属性

let cloneObj =deepClone(obj);
cloneObj.arr.push(4);
console.log('obj',obj);
console.log('cloneObj', cloneObj);


