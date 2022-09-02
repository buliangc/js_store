// 函数声明  参数类型 返回值类型
// function add(x: number, y: number, z?: number): number {
//     if (typeof z === "number") {
//         return x + y + z;
//     } else {
//         return x + y;
//     }
// }

// let result = add(2, 3);

const add1 = function (x: number, y: number, z?: number): number {
    if (typeof z === "number") {
        return x + y + z;
    } else {
        return x + y;
    }
}

// 类型推断 ts在我们没有明确指定变量类型的时候，会给我们推断出一个类型
const add2: (x: number, y: number, z?: number) => number = add1;