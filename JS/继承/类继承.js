// 通过extends 继承父类 super
class Animal {
	constructor(name) {
		this.name = name
	}
	eat() {
		console.log(`${this.name}`);
	}
	say() {
		console.log(`nice`);
	}
}
class Dog extends Animal {
	constructor(name, age) {
		super(name)
		// 子类没有自己的this，要继承父类的
		//但凡看到extends继承那这句就固定加上super
		//相当于es5中Animal.call(this,name)
		//super()负责初始化this.相当于ES5中的call和apply方法。
		this.name = name
		this.age = age
	}
	talk() {
		console.log(`${this.name}=>${this.age}`)
	}
}
var dog = new Dog("cxk", 12);
dog.say()
// dog.eat()
