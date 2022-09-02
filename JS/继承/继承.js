// 原型链继承: 解决原型上继承问题
// 构造函数继承: 解决引用数据类型值共享问题
function Parents(name, age) {
    this.name = name;
    this.age = age;
    this.size = [1, 2, 3, 4, 5];
}

Parents.prototype.say = function () {
    console.log(this.name);
}

function Child(type) {
    // 构造函数继承 
    Parents.call(this);
    this.type = type;
}

// 原型链继承
Child.prototype = new Parents("buliagc", 18);
Child.prototype.constructor = Child;

const p = new Child("student");
p.say()
// const p1 = new Child("student");
// p.size.push(6);
// console.log(p.size);
// console.log(p1.size);
// p.say("你好")