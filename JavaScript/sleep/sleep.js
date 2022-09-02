// 实现延时效果
// function mySleep(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, delay);
//     })
// }

// mySleep(2000).then(() => {
//     console.log("x");
// })

function mySleep(delay) {
    // let old = 0;
    let now = new Date().getTime()
    while (new Date().getTime() - now < delay) {
        continue;
    };
}
mySleep(2000);
console.log("x");