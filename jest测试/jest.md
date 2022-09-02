https://zhuanlan.zhihu.com/p/469999927 

Jest 的最基础，最常用的三个 API 是：describe、test 和 expect。

describe 是 test suite（测试套件）
test （也可以写成 it） 是 test case（测试用例）
expect 是断言

```javascript
import aFunction from'./function.js';

// 假设 aFunction 读取一个 bool 参数，并返回该 bool 参数
describe('a example test suite', () => {
  test('function return true', () => {
    expect(aFunction(true)).toBe(true);
    // 测试通过
  });
  test('function return false', () => {
    expect(aFunction(false)).toBe(false);
    // 测试通过
  });
});
```
# 2.2 Jest 匹配器
Jest 匹配器是在 expect 断言时，用来检查值是否满足一定的条件。例如上面的例子中：
expect(aFunction(true)).toBe(true)

# 2.3 Jest Mock
Mock Functions


# 3.5 事件：FireEvent
实际的用户交互可以通过 RTL 的 fireEvent 函数去模拟。
```javascript
fireEvent(node: HTMLElement, event: Event)
fireEvent[eventName](node: HTMLElement, eventProperties: Object)
// 两种写法
fireEvent(element, new MouseEvent('click', options?));
fireEvent.click(element, options?);
```
react testing library 提供了fireEvent专门来触发不同的函数
[fireEvent] 函数需要两个参数，一个参数是定位的元素 node，另一个参数是 event。这个例子中就模拟了用户点击了 button，同时 fireEvent 有两种写法。




