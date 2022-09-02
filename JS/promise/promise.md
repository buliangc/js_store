# 第一个问题 this的指向问题  
实例被创建好后，确实会执行constructor里的函数，但是现在我们是在新实例被创建后再在外部环境下执行resolve方法
resolve看着是和constructor一起执行的，其实不然，也就相当于不在class内部使用这个this [箭头函数 bind proxy 来改变this] this.resolve.bind(this)
# 第二个问题 then方法 
参数必须为函数 onFULFILLED onREJECTED设置函数初始值
# 第三个问题 执行异常 
要在constructor里提前进行判断 出现异常直接执行reject函数 try catch
# 第四个问题 异步执行问题
executor()中传入一个异步操作 
因为定时器是异步操作，目前的then都是同步操作 所以此时resolve执行的时候，status的状态是PENDDING，所以应该先将回调函数存起来 存起来后当执行resolve或者reject的时候，通过数组先入先出的方式，依次执行里面的函数
setTimeout(() => {
    resolve('成功');
},1000);
如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
# 第五个问题 链式调用

# 第六个问题 值穿透

Promise发生异常如何继续执行

# Promise.all
1. Promise.all接收一个数组，数组里面是promise或者常量。
2. 等到里面的promise全部执行完成后，才会返回结果。
3. 如果里面有一个执行失败了呢？ 那其他的还会执行吗？
等待所有的promise都执行完毕，才最终输出。输出的结果是数组
它会在catch里面捕获。
会的，因为promise在实例化时，就执行了；.then()只是用来看它的结果。

promise.resolve可以将常量转换成promise
返回数组

# Promise.race


# 手写并发限制的promise.all。
一个关于Promise并发的题目。大概是：一次性可能发10个请求，但是请求池控制一次性只能处理三个，请求池内的请求一个处理完后推进下一个请求


关于返回值
Promise.all 会返回promise对象，使用then后，将值往下进行传递
如果使用await的话，直接返回执行完的数组

Promise.race执行竞争 返回值为Promise对象。
Promise会全部执行，但是then里面只会执行最快的那个Promise。

async/await 是Promise then的因为语法糖
async会返回一个Promise对象，因为Promise对象结构如下，只有async函数中返回了result，PromiseResult中才会有值，往下传递，否则是undefined。
Promise {<pending>}
    [[Prototype]]: Promise
    [[PromiseState]]: "fulfilled"
    [[PromiseResult]]: Blob
内部使用await + 返回Promise的程序(fetch)
会直接返回值，而不用像then再套一层，但是只能用于async异步函数中。