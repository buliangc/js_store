# fiber架构的理解

react官方为了解决性能瓶颈，在react16上提出了fiber架构。
fiber三点理解
# fiber作为架构  异步可中断的更新
相对于老的架构， 增加了调度器，可以对更新的任务进行调度，将优先级高的先进入协调器。
Fiber把渲染更新过程拆分成多个子任务，每次只做一小部分，做完看是否还有剩余时间，如果有继续下一个任务；如果没有，挂起当前任务，将时间控制权交给主线程，等主线程不忙的时候在继续执行


# fiber作为静态数据结构  fiber tree数据结构（基于单链表的树结构）
作为静态的数据结构来说，每个 Fiber 节点对应一个 React element，保存了该组件的类型（函数组件/类组件/原生组件等等）、对应的 DOM 节点等信息
Fiber是 React内部所定义的一种数据结构，它是 Fiber树结构的节点单位，也就是 React 16 新架构下的虚拟DOM


# fiber作为动态工作单元

作为动态的工作单元来说，每个 Fiber 节点保存了本次更新中该组件改变的状态、要执行的工作。

# Fiber树：
每个 Fiber 节点有个对应的 React element，多个 Fiber节点根据如下三个属性构建一颗树：
```javascript
// 指向父级Fiber节点
this.return = null
// 指向子Fiber节点
this.child = null
// 指向右边第一个兄弟Fiber节点
this.sibling = null
```