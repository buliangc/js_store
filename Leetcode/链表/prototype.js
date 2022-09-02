function myPrototype(instance, obj) {
    let a = instance.__proto__;
    let b = obj.prototype;
    while (true) {
        if (a == null) {
            return false;
        } else if (a == b) {
            console.log(a, b);
            return true;
        }
        a = a.__proto__;
    }
}

console.log(myPrototype([], Array));
console.log({} instanceof Array);