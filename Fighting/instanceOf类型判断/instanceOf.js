// typeOf instanceOf Object.prototype.toString.call()
function myInstanceOf(target, Obj) {
    let a = target.__proto__;   // 实例的原型
    let b = Obj.prototype;  // 构造函数的原型
    while (true) {
        if (a == b) {
            return true;
        } else if (b == null) {
            return false;
        }
        b = b.prototype;
    }
}
let obj = {};
console.log(myInstanceOf([], Array));