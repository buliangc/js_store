https://zh-hans.reactjs.org/docs/hooks-reference.html 
https://usehooks.com/ 

常见的7个Hooks，除了useRef()，其他都可以归类为自变量与因变量。
自变量 useState useReducer useContext 
因变量 useMemo useEffect useCallback

通过useState定义了X，X的变化导致li变化，可以说useState是自变量，自变量的变化对应了视图的变化。自变量变化导致因变量变化，引起视图变化。
useMemo用来缓存一个因变量，你需要显示的指定该因变量依赖的自变量，这里是X；
const y = useMemo(() => 2*x+1, [x]);
useCallback用来缓存一个函数类型的因变量， 同样你也需要显式的指定该因变量依赖的自变量。
const changeX = useCallback(() => setX(x+1), [x]);

[useMemo useCallback]定义无副作用的因变量，[useEffect]定义有副作用的[因变量]。
[useReducer]可以看做是进阶版的useState，他使用redux的理念将多个state合并成一个，本质也是[自变量]。

 
# 使用Hooks显示的指明因变量有什么好处？
当使用时，y与changeX都会被缓存下来，只要x不变，始终读取的是缓存的值。
不使用时，每次函数组件执行时，实际会基于x，创建新的y与changeX。

# 

# 基础 Hook 
- useState      用来改变状态，让函数组件也拥有自己的状态state
- useEffect     用于副作用，类似于类组件中的生命周期函数，两个参数，并且可以return一个函数用于组件销毁
- useContext    用于多层级组件之间的状态共享，不需要像类组件那样，通过provider，使用comsumer包裹取值。直接通过useContext进行取值，可读性更强不会增加组件树的深度

# 额外的 Hook
- useReducer
为了简化复杂的useState
- useCallback
性能调优  在多次渲染中记住某个函数
- useMemo
- useRef        生成对 DOM 对象的引用 ，可以获取原生DOM元素 也可以用来保存上次的状态值
- useImperativeHandle
- useLayoutEffect
- useDebugValue
- useDeferredValue
- useTransition
- useId

# Library Hooks
- useSyncExternalStore
- useInsertionEffect

# useMemo
useMemo 是做什么的，一言以蔽之，做性能优化用的，如果说类组件的性能优化的方法是 shouldComponentUpdate 和 PureComponent，那么给函数组件做性能优化的就是这个 useMemo。

在类组件中 
<App>
    <Bar></Bar>  // 子组件 当父组件更新，子组件必然更新render
</App>
优化：当子组件中的状态不更新的时候，子组件就不会渲染。 
1. shouldComponentUpdate(nextProps, nextState);
2. PureComponent  class Sub extends PureComponent {}
二者本质没有区别，但是shouldComponentUpdate更加灵活

useMemo是返回缓存的变量，useCallback是返回缓存的函数
- useMemo是一个react hook,我们可以使用它在组件中包装函数。可以使用它来确保该函数中的值仅在依赖项之一发生变化时才重新计算
1. useCallback优化针对于子组件渲染，返回值是函数。   useCallback配合memo用于优化子组件的渲染次数
2. useMemo优化针对于当前组件高开销的计算。返回值是缓存的变量。 

函数组件 使用memo
# React Hooks 不足
尽管我们通过上面的例子看到 React Hooks 的强大之处，似乎类组件完全都可以使用 React Hooks 重写。但是当下 v16.8 的版本中，还无法实现 getSnapshotBeforeUpdate 和 componentDidCatch 这两个在类组件中的生命周期函数。官方也计划在不久的将来在 React Hooks 进行实现。
