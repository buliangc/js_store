// es6的新特性class类
class Parents {
    constructor(name, age) { // 构造方法
        this.name = name;
        this.age = age;
    }
    // 方法 无数个
    getName() {
        return this.name;
    }
}

// 派生的类本身是没有this的，必须在派生类中调用超级构造函数，然后才能访问"this"或从派生构造函数返回
class Child extends Parents {
    constructor(name, age, type) {
        // 通过在构造方法中调用 super() 方法，我们调用了父类的构造方法，这样就可以访问父类的属性和方法。
        // 子类没有自己的this，要继承父类的
        // 但凡看到extends继承那这句就固定加上super
        // 相当于es5中Animal.call(this,name)
        // super()负责初始化this.相当于ES5中的call和apply方法。
        super(name, age);
        this.type = type;
    }
    show() {
        console.log(this.getName() + " 年龄：" + this.age + " 类型: " + this.type);
    }
}
const p = new Child("father", 40, "man");
p.show();