// 数字枚举
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Left);
// 枚举可以看做一个数组
console.log(Direction['Left']);

// 字符串枚举
enum StringDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
};

const value = "UP";
if (value === StringDirection.Up) {
    console.log("go up!");

}

// 常量枚举  ==> 提升性能  常量值可以进行常量枚举 计算值不可以进行常量枚举
