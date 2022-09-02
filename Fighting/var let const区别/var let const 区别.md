1. var可以重复定义 let const 不能重复定义
2. var 和 let 定义的值可修改，const不行
3. var 有变量提升(函数提升) let const没有变量提升
4. var 没有块级作用域 let const有块级作用域
5. var和let是支持循环的，但是const不支持循环。

关于第五点的解释
```javascript
for(const i = 0;i<3;i++){
	console.log(i);
}
for循环会报错，因为for循环相当于在同一个作用域中。所有相当于在重复定义i变量，因此会报错。
```

```javascript
let arr = [1,2,3,4];
for(const value of arr){    // for...of 遍历了数组的值
    console.log(value);
}
for in 和for of 它们两个都是一种严格的迭代语句，，对于对象中的每一个属性值，有一个指定的语句块被执行。也就是每一次循环，都会产生一个块级作用域来完成每个变量的行为。
{const value = arr[0];}
{const value = arr[1];}
...
{const value = arr[4];}
```

