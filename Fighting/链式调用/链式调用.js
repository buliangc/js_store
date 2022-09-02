function _sayHi(hi) {
    console.log(`I am saying ${hi}`);
}
const callStack = [];

function Man() {
    this.sleep = function (time) {
        setTimeout(function () {
            callStack.forEach(cb => cb());
        }, time);
        return this;

    }
    this.sayHi = function (hi) {
        callStack.push(_sayHi.bind(this, hi))
        return this;
    }
}
let a = new Man();
a.sleep(3000).sayHi("aaa")
