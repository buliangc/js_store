let isDone: boolean = false;
console.log(isDone);


// any 类型
let notSure: any = 4;
notSure = "maybe it is a string";
notSure = true;
console.log(notSure.myName);

// 联合类型 Union Types
let n: number | undefined = undefined

// Array
let arrOfNumber: number[] = [1, 2, 3]

// 元组 Tuple 一定程度上限定了数据类型的数组
let user: [string, number] = ["buliangc", 1];
user = ["lss", 2]

// Interface 接口
// 1. 对对象的形状（shape)进行描述
// 2. 对类（class）记性抽象
// Duck Typing （鸭子类型）