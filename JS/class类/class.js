class MyPormise {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    say() {
        console.log(this);
        console.log(this.x, this.y);
    }
}

const p = new MyPormise(1, 2);
p.say()

class MyTask {
    constructor(id) {
        this.id = id
        console.log("构造函数初始化!");
    }
    showName() {
        console.log("my name is buliangc!");
    }
    static showAge() {
        console.log("my age is 18!");
    }
}

let task = new MyTask(22);
task.showName();    // my name is buliangc!
MyTask.showAge();   // my age is 18!

// 构造函数继承 原型链继承