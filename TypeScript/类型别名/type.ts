type userName = string; // 基本类型
type userId = string | number; // 联合类型
type arr = number[];

// 对象类型
type Person1 = {
    id: userId; // 可以使用定义类型
    name: userName;
    age: number;
    gender: string;
    isWebDev: boolean;
};
// 范型
type Tree<T> = { value: T };

const user: Person1 = {
    id: "901",
    name: "椿",
    age: 22,
    gender: "女",
    isWebDev: false,
};

const numbers: arr = [1, 8, 9];


// type SetPoint = (x: number, y: number) => number;

interface SetPoint {
    (x: number, y: number): number;
}
const a = function (a: SetPoint): number {
    let result = a(1, 2);
    return result;
}