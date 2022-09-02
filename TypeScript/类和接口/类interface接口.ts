// 在js中，一个class只能继承自另一个class，若其他类中的方法与属性也想继承，则很麻烦。而在ts中可以使用implements来实现一些类共有方法属性的提取。
// class Car {
//     switchRadio(trigger: boolean) {

//     }
// }

// class cellphone {
//     switchRadio(trigger: boolean) {

//     }
// }

// interface Radio {
//     switchRadio(trigger: boolean): void;
// }

// class Car implements Radio {
//     switchRadio(trigger: boolean): void {

//     }
// }

// 新加一个Battery interface，使cellphone类接入而car类不接入。

// interface Battery {
//     checkBatteryStatus(): void;
// }
// interface Radio {
//     switchRadio(trigger: boolean): void;       //注意写法，void表示函数没有返回值
// }
// class Car implements Radio {
//     switchRadio(trigger: boolean) {

//     }
// }
// class cellphone implements Radio, Battery {        //逗号连接
//     switchRadio(trigger: boolean) {

//     }
//     checkBatteryStatus() {        //内部方法加上checkBatteryStatus，注意：不能少！！！！！

//     }
// }

// interface还可以继承，直接用extends即可
interface Battery {
    checkBatteryStatus(): void;
}
interface Radio {
    switchRadio(trigger: boolean): void;       //注意写法，void表示函数没有返回值
}
interface BatterywithRadio extends Radio {
    checkBatteryStatus(): void;
}
class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}
class cellphone implements BatterywithRadio {        //逗号连接
    switchRadio(trigger: boolean) {

    }

    checkBatteryStatus() {

    }
}


interface Obj {
    name: string,
    age: number
}

const person: Obj = {
    name: "buliangc",
    age: 18
}
interface Obj1 {
    name: { name: string, age: number },
    age: number
}

const person1: Obj1 = {
    name: { name: "buliangc", age: 18 },
    age: 18
}
interface Obj2 {
    [name: string]: { name: string, age: number },

}
