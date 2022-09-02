# react-redux原理
redux工作流：主要用于数据的集中管理
首先react组件从store中获取到最原始的数据，然后进行渲染；当react中的数据发生改变时，react就需要使用action。让action去store.dispatch(action); 
const action = {
    actionType: "",
    index: index,
}
然后store将action发给reducer函数，reducer并不能直接改变State的内容，只能通过深拷贝一份State，然后进行修改，并返回一个新的state给store，最后react组件拿到更新的数据后渲染页面，达到让页面更新的目的。

创建store 并传入reducer：const store = createStore(reducer);
组件
redux中间件源码，解释高阶函数 柯里化