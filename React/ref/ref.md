# refs是什么  Ref 转发是一种自动将 ref 通过组件传递给子组件的技术，父组件能够获取到子组件的元素
React中的Refs，提供了一种方式，允许我们访问DOM节点; 但想要获取组件元素，要分情况讨论，函数组件和类组件
类组件可以直接在组件上添加ref={this.ClassRef}  this.ClassRef = React.createRef()
函数组件不能够直接在组件上添加ref，[因为没有实例]，会报错。需要通过forwardRef进行转发。
```javascript
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
// 想点击父组件，然后子组件中的输入框进行聚焦。但是不能直接在函数组件上添加ref，因为没有实例。需要通过转发的方式。

const App = () => {
    const inputRef = createRef();
    return (
        <div>
            <Foo ref={inputRef} />
            <button onClick={onClick}> 父组件 </button>
        </div>
    )
}
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```
场景：聚焦框focus()
this.inputRef = React.createRef();
<input ref={this.inputRef}></input>


类组件中，可以使用React.createRef()在创建ref，获取对象的时候，使用current


函数组件中,使用useRef()

类组件可以给ref函数，获取当前组件元素；函数组件不能给ref，会提示函数组件不能给ref；函数组件中既可以使用createRef，也可以使用钩子 useRef；函数组件使用forwardRef，实现转发组件