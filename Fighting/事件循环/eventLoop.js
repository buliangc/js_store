setTimeout(() => {
    console.log('quick timer')
}, 0)

new Promise((resolve, reject) => {
    console.log('init promise')
    process.nextTick(resolve)
}).then(() => console.log('promise.then'))

process.nextTick(() => {
    console.log('nextTick')
})

setImmediate(() => {
    console.log('immediate')
})  