# setState可以接收两种参数(一个对象或者一个函数)
参第一个函数可以让你在函数内访问到当前的state值
```javascript
handleSomeThing(){
    // 传递函数
    this.setState((preState, props) => {
        index: preState.index + 1
    })
    // 传递对象
    this.setState({
        index: preState.index + 1
    })
}

handleSomeThing();  // 2
handleSomeThing();  // 3
// 后者只能输出1，因为是异步操作，所以state没有更新
// setState的回调函数
handleSomething = () => {
    this.setState((preState, props) => {
        return {index: preState.index + 1}
    }, () => {
        console.log(`异步 ${this.state.index}`)
    });
    console.log(`同步${this.state.index}`);
}
// 输出：同步 1 异步 2
```