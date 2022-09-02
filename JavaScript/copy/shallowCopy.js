// 实现简单浅拷贝
// 对基本数据类型进行直接拷贝 对对象的第一层进行复制
// 首先将引用数据类型判断出来
function shallowCopy(source) {
    if(typeof(source) === 'object'&& source !== null){
        // 判断是数组还是对象
        let cloneTarget = Array.isArray(source)? []: {};
        for(let prop in source){
            // console.log(source.hasOwnProperty(prop));
            console.log(prop);
            if(source.hasOwnProperty(prop)){
                cloneTarget[prop] = source[prop]
            }
        }
        return cloneTarget;
    }else{
        return source
    }
}
// let nice = [1,2,3,{a: 12,b:{}}]
let nice = {a:[1,2,3,{a: 12,b:{}}],b: 12}
// let nice = '123'
let done = shallowCopy(nice)
console.log(done);
// done[3].a = 5;
// console.log(done);
// console.log(nice);
// 对象用[]的方式添加新属性,[]中的值就是属性名
// const obj1 = {a: 2,b:3}
// obj1[3] = {}
// console.log(obj1);