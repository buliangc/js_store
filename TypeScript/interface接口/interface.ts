interface Person {
    readonly id: number;    // 只读属性
    name: string;
    age: number;
    sex?: string;   // 可选属性
}

let buliangc: Person = {
    id: 123,
    name: "buliangc",
    age: 18
}
// 无法对只读属性重复定义
// buliangc.id = 456

interface DogType {
    name: string
    sayHello: () => void
}

const dog: DogType = {
    name: 'Fluffy',
    sayHello: () => 'woof woof'
};

// dog.hello();

let uncertain: unknown = 'Hello'!;
uncertain = 12;
uncertain = { hello: () => 'Hello!' };


function invokeCallback(callback: unknown) {
    try {
        if (typeof (callback) === 'function') {
            callback();
        }
    } catch (err) {
        console.log(err);

    }
}

invokeCallback(1);


type User1 = {
    name: string,
    age: number,
    address: {
        province: string,
        city: string
    }
}
// 这里的UserKeys就是所有键的联合类型 
type UserKeys1 = keyof User1;			// "name" | "age" | "address"
let aa: UserKeys1 = "name"