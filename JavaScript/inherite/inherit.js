// 原型链继承

function Parent1(name, age) {
    this.name = name;
    this.age = age;
}

function Child1() {
    this.type = 'child'
}

Child1.prototype = new Parent1('buliangc', 18);

console.log(new Child1());
// 构造函数继承 Parent.call(this,params)
function Parent(name, age) {
    this.name = name;
    this.age = age;
    this.funcAge = function () {
        return this.age
    }
}
Parent.prototype.funcName = function () {
    return this.name;
}
function Child(name, age) {
    Parent.call(this, name, age)
    this.sex = 'male';
}
let child1 = new Child('123', 23);
let child2 = new Child('123', 23);
child1.sex = '111'
console.log(child1);
console.log(child2);
// 组合继承 缺点：两次调用Parents，多进行一次性能开销
    function Parent3() {
        this.name = 'parent3';
        this.play = [1,2,3];
    }
    Parent3.prototype.getName = function () {
        return this.name;
    }
    function Child3() {
        Parent.call(this);
        this.type = 'child3'
    }
    // 第一次调用child3
    Child3.prototype = new Parent3();
    // 手动挂上构造器，指向自己的构造函数，
    Child3.prototype.constructor = Child3;
    let s3 = new Child3();
    let s4 = new Child3();
// 普通对象、类式继承 Object.create(proto，[propertiesObject])
// proto：新创建对象的原型对象。propertiesObject：, 返回值：一个新对象，带着指定的原型对象和属性。
// 多个实例的引用类型属性指向相同内存
// 5. 寄生式继承
// 使用原型式继承可以获得一份目标对象的浅拷贝 然后利用这个浅拷贝的能力进行增强，添加一些方法
let parent5 = {
    name: 'parent5',
    friends: ['p','m','z'],
    getName: function() {
        return this.name;
    }
}
function clone(original) {
    let clone = Object.create(original);   // 浅拷贝original对象
    clone.getFriends = function () {       // 在拷贝的对象上添加新的方法
        return this.friends;
    } 
    return clone;
}
let clone5 = clone(parent5);
console.log(clone5.getFriends());
console.log(clone5.getName());