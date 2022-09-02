// class MyPromise {
//   constructor(executor){
//     // executor 是一个执行器，进入会立即执行
//     executor(this.resolve, this.reject); 
//   }
// }
const promise = new Promise((resolve, reject) => {
  resolve(100)
})
const p1 = promise.then(value => {
  console.log(value)
  return p1
})
