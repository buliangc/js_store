# React组件一直是函数，使用Hook完全拥抱函数

1. 组件很难复用状态逻辑  使用HOC或者render Props
本来是与页面无关的逻辑 ，但HOC会返回一些状态节点
使用Hook就可以提取状态逻辑

2. 复杂组件难以理解，尤其是生命周期函数 避免了componentDidMount和componentDidUpdate的重复  