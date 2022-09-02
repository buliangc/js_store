# setState 用于更新state状态 获取值
控制批处理 -- batchUpdates
生命周期
react合成事件
 
关于setState是同步还是异步，要分情况讨论。
如果在[生命周期]和[React合成事件]中，setState是异步更新的
如果在setTimeout或者addEventListener添加的原生DOM事件中，setState是同步更新的
```TypeScript
setTimeout(() => {
    this.setState({
        message: "你好啊"
    }
);
console.log(this.state.message); // 你好啊
}, 0);
componentDidMount() {
  const btnEl = document.getElementById("btn");
  btnEl.addEventListener('click', () => {
    this.setState({
      message: "你好啊,李银河"
    });
    console.log(this.state.message); // 你好啊,李银河
  })
}
```

1. 传入对象 setState({count : count+1}, () => {console.log(count)})
await this.setState({count: count+1})
console.log(count);
2. 传入函数 
React官网上说，这个函数接收两个参数，第一个是当前的state，第二个是当前的props，函数返回一个对象，与之前使用this.setState的返回对象相同，代表想对state的更改。

```javascript
import React from 'react';
function plusone(state, props) {
    console.log(state);
    return { count: state.count + 1 };
}

class AddByFunction extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
    }

    increment() {
        // 同步更新带来的问题
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        // 通过传入函数，获取上一个state和props的值
        // this.setState((state, props) => {
        //     console.log("1 " + state.count);
        //     return {
        //         count: state.count + 1
        //     }
        // });
        // this.setState((state, props) => {
        //     console.log("2 " + state.count);
        //     return {
        //         count: state.count + 1
        //     }
        // });
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>AddByFunction</button>
                <h2>Result:{this.state.count}</h2>
            </div>
        );
    }
}
export default AddByFunction;

```

- React 上注册的事件最终会绑定在 root 这个 DOM 上，而不是 React 组件对应的 DOM(减少内存开销就是因为所有的事件都绑定在 root 上，其他节点没有绑定事件)
- React 自身实现了一套事件冒泡机制，所以这也就是为什么我们 event.stopPropagation()无效的原因。
- React 通过队列的形式，从触发的组件向父组件回溯，然后调用他们 JSX 中定义的 callback
- React 有一套自己的合成事件 SyntheticEvent
