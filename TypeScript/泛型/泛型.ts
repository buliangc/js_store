// 泛型定义
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const result2 = swap(["string", 123]);

// 约束泛型  ：interface约束 只要你有length这个属性，都可以传入泛型
// 这样想传入一个数组，会报错 length 类型“T”上不存在属性“length”。ts(2339)
// function echoWithLength<T>(arg: T): T {
//     console.log(arg.length);
//     return arg;
// }

// 修改 泛型T[] 但这样会导致只能传递数组，普通的类型都无法传递
// function echoWithLength<T>(arg: T[]): T[] {
//     console.log(arg.length);
//     return arg;
// }

// 修改 通过interface进行约束泛型  只要T继承了IWithLength这个属性，里面有length string arr都可以传入
interface IWithLength {
    length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

const str = echoWithLength("str");
const arr = echoWithLength([1, 2, 3, 4, 5]);
const obj = echoWithLength({ length: 10, name: "buliangc" });
console.log(str, arr, obj);
