class Animal {
    public name: string;
    static categoies: string[] = ["mamal", "bird"];
    static isAnimal(a: any) {
        return a instanceof Animal;
    }
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running!`;
    }
}
console.log(Animal.categoies);

const snake = new Animal("buliangc");
console.log(Animal.isAnimal(snake));

console.log(snake.name);





class Dog extends Animal {
    say() {
        console.log(this.name);
    }
}

const d = new Dog("aaa");

d.say();