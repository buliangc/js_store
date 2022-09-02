React基于浏览器的事件机制自身实现了一套事件机制，包括事件注册，事件冒泡

# React合成事件
在 React 16 及之前版本中，React 会对大多数事件进行 document.addEventListener() 操作。React v17 开始会通过调用 rootNode.addEventListener() 来代替。
- [React17以前]，很怪异，由于合成事件委托在文档对象document的冒泡事件上，因此合成事件在document的冒泡阶段执行。 先执行document原生捕获事件，然后是原生的捕获事件，原生的冒泡事件，react捕获事件，react冒泡事件，document原生冒泡事件

- [React17及以后]，合成事件捕获以及合成事件冒泡分别委托在root容器的捕获事件以及冒泡事件上。先执行document捕获，react原生捕获，dom原生捕获，dom原生冒泡，react原生冒泡，document冒泡。

document事件捕获 react事件捕获 dom原生事件捕获 dom原生事件冒泡 react事件冒泡 document事件冒泡
```javascript
import  React  from 'react';
class App extends React.Component{

  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.childRef = React.createRef();
  }
  componentDidMount() {
    console.log("React componentDidMount！");
    this.parentRef.current?.addEventListener("click", () => {
      console.log("原生事件：父元素 DOM 事件监听！");
    });
    this.childRef.current?.addEventListener("click", () => {
      console.log("原生事件：子元素 DOM 事件监听！");
    });
    document.addEventListener("click", (e) => {
      console.log("原生事件：document DOM 事件监听！");
    });
  }
  parentClickFun = () => {
    console.log("React 事件：父元素事件监听！");
  };
  childClickFun = () => {
    console.log("React 事件：子元素事件监听！");
  };
  render() {
    return (
      <div ref={this.parentRef} onClick={this.parentClickFun}>
        <div ref={this.childRef} onClick={this.childClickFun}>
          分析事件执行顺序
        </div>
      </div>
    );
  }
}
export default App;
```