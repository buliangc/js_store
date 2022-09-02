// 例子：实现sleep函数 console.log(1) await sleep(10000) //等待1秒后输出 console.log(2) 
console.log(1)
function sleep(wait) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, wait);
    })
}
async function stepPrint() {
    await sleep(2000)
    console.log(2)
}
stepPrint()
