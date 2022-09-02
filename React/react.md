12.react 相关 diff算法，setState，数据流动，复杂度，拿到及时更新的state


# history和hash

# state和props

# context
Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

1. 类组件上有两种用法：
```javascript
const AppContext = React.createContext(); 
<AppContext.Provider value="dark"> 
  <Middle />  // 组件中可以无限透传value="dark"
</AppContext.Provider>

1. 子组件中通过 -- Consumer
<AppContext.Consumer>
{value => <div>{value}</div>}
</AppContext.Consumer>
2. 子组件通过 -- static contextType = AppContext;
const value = this.context;
```
2. 函数组件 useContext 
```javascript
const value = useContext(AppContext)

```

# ref转发 获取DOM
ref在render之后 ，componentDidMount和componentDidUpdate之前
React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。

## 函数组件添加ref useRef() forwardRef()
Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。
因为ref无法挂载到函数组件上面，因为没有实例。所以只能使用React.forwardRef来获取传递给他的ref，然后转发到它渲染的DOM元素上。
```javascript
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```
## 为 class 组件添加 Ref
```javascript
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    focusTextInput = () => {
        // this.inputRef.current 指向了当前的DOM元素
        console.log(this.inputRef.current.value)
        this.inputRef.current.focus();
    }
    render() {
        return (
            <>
            <input ref={this.inputRef} />
            <input 
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput} />
            </>
        )
    }
}
```

# Fragments
React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
<React.Fragment></React.Fragment> <></>

# 高阶组件
输入组件 输出组件

# 性能优化
shouldComponentUpdate()
PureComponent()
memo()

# 组件异步加载
```javascript
import React, {Componet, lazy, Suspense} from "react-dom";
// 异步加载
const Sub = lazy(() => import("./sub"));

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Suspense fallback={<div>loading</div>}>
                    <Sub />
                </Suspense>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

# React生命周期
挂载 -- 更新 -- 卸载
将JSX解析成React.createElement之后，就开始render，ComponentDidMount;
当state或者props变化的时候，触发更新，重新渲染。shouldComponentUpdate决定是否继续渲染。
componentWillUpdate componentDidUpdate
componentWillUmMount

# 父子组件渲染过程
父组件即将挂载(最外层的父组件都还没准备进入，其内部的子组件当然更没进入了) -》 子组件即将挂载  -》 子组件挂载完成(父内部都没完成，父当然不能算完成)  -》 父组件挂载完成。
```javascript
"父constructor"
"父render"
"子constructor"
"子render"
"子DidMount"
"父DidMount"
class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("子constructor");
  }
  componentDidMount(){
    console.log("子DidMount")
  }
  render() {
    console.log("子render")
    return (
      <div>
        <p>子组件</p>
      </div>
    )
  }
}
class Parent extends React.Component {
  constructor(props) {
    super(props);
    console.log("父constructor");
  }
  componentDidMount(){
    console.log("父DidMount")
  }
  render() {
    console.log("父render")
    return (
      <div>
        <p>父组件</p>
        <Child />
      </div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Parent />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))
```

# 父子组件传值
父组件向子组件传值
子组件向父组件传值
跨级组件之间传值(祖孙)
  中间组件层层传递 props
  使用 context 对象 会使组件复用性变差
非嵌套组件间通信(发布订阅模式) 
  利用二者共同父组件的 context 对象进行通信
  使用自定义事件的方式

React父子组件通信方法
讲了父子，祖孙，兄弟几种不同情况对应的方法，也是结合开发遇到的情况讲的。
1. 父子组件间通信，通常通过props，单项数据流进行传递，将父组件的state传递给子组件
2. 子组件到父组件，因为props是无法直接修改的。所以通常是将父组件的方法传递到子组件，然后子组件进行调用，向父组件传递消息
3. 兄弟组件之间的传值，是通过父组件做的中转 ，流程为：
组件A -- 传值 --> 父组件 -- 传值 --> 组件B
# TS

# Portals