// 实现instanceof方法
// instanceof查询对象是否在构造函数的实例上
// 在的话返回true 不在的话返回false
// function instance(value, Obj) {
//     if(value.__proto__ == Obj.prototype){
//         console.log(true);
//         return true;
//     }
//     console.log(false);
//     return false;
// }

// instance('', Object)
// console.log(String.prototype)
// console.log('name'.__proto__);
// function instance(left,right){
//     let prototype = right.prototype;  //获取类型的原型
//     let proto = left.__proto__;       //获取对象的原型
//     while(true){    //循环判断对象的原型是否等于类型的原型，直到对象原型为null，因为原型链最终为null
//         console.log(proto,prototype);
//        if (proto === null || proto === undefined){
//            return false;
//        }
//        if (proto === prototype){
//            return true;
//        }
//        proto = proto.__proto__;
//        console.log(proto);
//      }
// }
// console.log(instance('123',Object)); //true

// const str = new String('123')

// console.log(String.prototype.constructor == str);
// 通过原型链的方式实现instanceof 可以判断引用数据类型,
// 由于基本包装类型的存在。String Number Boolean皆为对象, 都有__proto__。
// function instance(value, Object) {
//     if(value == null){
//         return null
//     }else if(value == undefined) {
//         return undefined
//     }
//     else{
//         if(value.__proto__ == Object.prototype){
//             console.log(true);
//             return true;
//         }
//         console.log(false);
//         return false;
//     }
// }
// console.log(instance('name', String));

// function name1(value, object) {
//     let proto = value.__proto__;
//     let prototype = object.prototype;
//     while(true){
//         if(proto == prototype){
//             return true;
//         }else if(proto == undefined){
//             return false;
//         }
//         proto = proto.__proto__;
//     }
// }

// console.log(name1('name',Array));

// let target = {};
// let source = {a:{b:2}};
// // target = Object.assign(target, source);
// Object.assign(target, source);
// console.log(target);

// source.a.b = 10
// console.log(target);
// console.log(source);


// function OriginalTarget(params) {
    
// }

// OriginalTarget.prototype

function MyConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.func = function() {
        console.log(this.name);
    }
}

const instance = new MyConstructor('buliangc', 18);

function myInstanceof(left, right) {
    let a = left.__proto__;
    let b = right.prototype;
    while(true) {
        if(left == null) {
            return false;
        } else if(left == right) {
            return true;
        }
        left = left.__proto__;
        console.log("left",left);
    }
}
myInstanceof(instance, MyConstructor);