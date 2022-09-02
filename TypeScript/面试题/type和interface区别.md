TypeScript 中 type 类型别名 和 interface 接口 的区别?

相同点：
1. 都可以描述 '对象' 或者 '函数' 
2. 都允许拓展(extends)
不同点：
1. type 可以声明基本类型，联合类型，元组
2. type 可以使用 typeof 获取实例的类型进行赋值
3. 多个相同的 interface 声明可以自动合并
使用 interface 描述‘数据结构’，使用 type 描述‘类型关系’
