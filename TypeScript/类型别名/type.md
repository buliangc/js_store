# 类型别名 type
类型别名不仅可以用来表示[基本数据类型]，还可以用来表示[对象类型]、[联合类型]、[元组]和[交集]

类型别名常用于联合类型。
type userId = string | number; // 联合类型
// 元组 
type tump = [number, string];
interface仅限于描述对象类型

二者都可以被继承  互相继承  extends

interface Person{
    name:string
}
 
interface Student extends Person { stuNo: number }

# 二者区别
1. 定义基本类型别名 、元组 、交集
type可以定义基本类型别名，interface不行，只能对象


2. 定义声明联合类型
type可以声明联合类型，interface不行，只能对象

3. 声明合并 
interface声明的相同接口，可以合并，而type不行，会报错

4. 