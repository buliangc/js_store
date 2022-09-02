1. 需要清除的副作用 事件绑定addEventListener在组件销毁的时候，进行removeEventListener
2. 不需要清除的副作用 ajax请求之类

# 优点
避免了componentDidMount和componentDidUpdate的重复 
可以根据Effect的功能分割代码

# useEffect的第一个参数，传递一个函数
在第一个渲染和每次渲染结束之后都会执行。
```javascript
// 每次渲染都会执行add Effect
useEffect(() => {
    console.log("add effect", position.x);
    // 每次更新都会执行useEffect的回调函数，导致添加越来越多的click事件，但是没有清除掉
    // 如果useEffect返回一个函数，那么react将会在清除操作时调用它
    const updateMouse = (e: MouseEvent) => {
        console.log("inner");
        setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse);
    return () => {
        // 清除的是上一个effect
        console.log("remove effect", position.x);
        document.removeEventListener("click", updateMouse);
    }
})
```
# useEffect的第二个参数，添加了限定条件
- 传入：[] 只会执行一次，很适合事件绑定，不然会一直添加事件绑定
```javascript
// 第二个参数为空，每次渲染都会执行  只会执行一次add Effect，在组件销毁的时候，也会执行一次remove Effect
useEffect(() => {
    console.log("add effect", position.x);

    const updateMouse = (e: MouseEvent) => {
        console.log("inner");
        setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse);
    return () => {
        // 清除的是上一个effect
        console.log("remove effect", position.x);
        document.removeEventListener("click", updateMouse);
    }
}, [])
```

# useEffect第二个参数数组里面有值 当只改变才会执行useEffect