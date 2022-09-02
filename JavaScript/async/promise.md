# https://juejin.cn/post/6945319439772434469#heading-9
Promise.all 处理并行请求
Promise利用三大技术手段来解决回调地狱
回调函数延迟绑定，返回值穿透，错误冒泡
Promise.all allSettled race any

generator中配合使用yield关键词，可以控制函数执行的顺序，每当执行一次next的方法,generator会执行到下一个yield关键词的位置
yield关键词最后返回一个迭代器对象，该对象有value和done两个属性

thenable: 是一个定义了then方法的对象或函数
value: 可以是任何一个合法的JavaScript的值（包括undefined，thenable或promise)
exception: 是一个异常
reason: 是一个Promise里reject之后返回的拒绝原因

一个Promise有三种状态：pending,resolve,reject;
Promise构造函数接受一个executor函数。executor函数执行完同步或者异步操作后，调用它的两个参数resolve和reject
eg: new Promise((resolve, reject) => {}) 
Promise.all(): 全都来
只要有一个失败了，这个promise就失败，结果为第一个失败的结果。如果都成了，就返回全部成功的结果。

Promise.race(): 看谁快


then方法链式调用的根本是：返回一个新的Promise

promise.then是一个同步调用，所以如果promise里面是一个异步任务的话，会先直接执行同步任务，然后再去执行异步任务
这样就会造成状态仍然是pending状态，程序无法处理。需要再进行优化。
在then里面将pending状态时候的成功/失败回调进行保存
等到异步任务执行的时候，更改期约状态之后，再去执行保存的回调

[优化:] then是可以进行多次调用的。如果三次调用then的话，依次存储到onFulfilledCallback里面，就会覆盖前面所存储的函数。从而造成只执行最后一次的函数。
所以要将onFulfilledCallback改为数组，存储then里面的回调函数

then方法 主要能实现链式调用  那么就需要返回一个 Promise 对象
①当then中返回的是普通值的时候，要调用一次promise2的resolve方法，从而将promise2的value设置为then中返回的普通值。
②当then中返回的是一个新的promise时，就调用它本身的then方法，根据返回的新的promise的状态来设置promise2的value或者reason的…

resolvePromise是为了解决值穿透的问题，因为then会返回一个promise,返回的promise会将自己resolve的值传递下去, 

其中返回的undefined是给里面的x.then.then用的值穿透。

# 捕获执行器错误executor
捕获执行器中的代码，如果执行器中有代码错误，那么 Promise 的状态要变为失败

# PromiseA+规范
## 五点： executor, resolve, reject, value, reason
resolve：改变期约状态机为fulfilled，并将value赋值给this.value    reject：改变期约状态机为rejected，并将reason赋值给this.reason
then 多次调用 链式调用
