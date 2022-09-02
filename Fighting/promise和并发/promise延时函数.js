// 用promise实现，红色三秒打印一次、绿色两秒打印一次、黄色一秒打印一次，三种颜色循环不断交替打印。
function sleep(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timeout);
    })
}
function red() {
    console.log("red");
}
function green() {
    console.log("green");
}
function yellow() {
    console.log("yellow");
}

async function light() {
    while (true) {
        await sleep(3000);
        red();
        await sleep(2000);
        green();
        await sleep(1000);
        yellow();
    }
}
light();

// function light(time, color) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             color();
//             resolve();
//         }, time);
//     })
// }

// function step() {
//     light(3000, red).then(() => {
//         return light(2000, green);
//     }).then(() => {
//         return light(1000, yellow);
//     }).then(() => {
//         step()
//     })
// }
// step()