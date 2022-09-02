# redux 数据存储流程
redux的组成部分：action store reducers components

components发送 store.dispatch(action)，派发给store。createStore(reducer)创建唯一的仓库store，里面存放着所有的state。
action = {
    type: ,     // 行为类型
    value: ,    // 行为数据
}
store.dispatch(action)

reducer并不实际操作数据，reducer会根据store发过来的(proviousValue, action)对state进行复制，
reducer拿到之前的数据(previousValue, action)和当前用户所要进行的操作信息;告诉store，现在新的数据应该变成什么;最终返回一个新的state给store。

```javascript
    store.subscribe(this.handleStoreChange);
    store.subscribe (listener)是一个底层 API，多数情况下你也不会直接使用它，在React-redux中已经封装好了。 <Provider store> 使组件层级中的 connect () 方法都能够获得 Redux store，实现订阅。
    // handleStoreChange执行store.getState()，重新再获取store里面的数据，通过setState进行更新
    handleStoreChange() {
        this.setState(store.getState())
    }
```
react-redux：
不需要再进行store.subscribe()，而是通过Provider这个连接器去连接store，并通过connect()进行数据的连接与映射。
```javascript
this.focused; this.handleInputFocused; 可以直接调用，而不需要再进行this.state = store.getState( );
// mapStateToProps：将store里面的state映射到组件里面，作为当前组件的props属性。
// mapDispatchToProps：就是将action和dispatch合并映射到组件里面，作为当前组件的props属性
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocused() {
            // const action = actionCreators.searchFocus()
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);  
```        
```javascript
// 异步action creator
function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  }
}
store.dispatch(incrementAsync());

handleBtnAdd() {
    const that = this;
    function increment() {
        return {
            type: 'btn_add',
            value: that.state.addValue + 1
        }
    };
    function incrementAsync() {
        return (dispatch) => {
            setTimeout(() => {
                dispatch(increment());
            }, 1000);
        }
    }
    store.dispatch(incrementAsync());
    // const action = {
    //     type: "btn_add",
    //     value: this.state.addValue + 1
    // }
    // setTimeout(() => {
    //     store.dispatch(action);
    // }, 1000);
}
```
[他仅仅是让dispath多支持了一种类型，就是函数类型]，在使用Redux-Thunk前我们dispatch的action必须是一个纯对象(plain object)，使用了Redux-Thunk后，dispatch可以支持函数，这个函数会传入dispatch本身作为参数。但是其实我们不使用Redux-Thunk也可以达到同样的效果，比如上面代码我完全可以不要外层的incrementAsync，直接这样写：