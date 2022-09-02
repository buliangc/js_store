let arr = [1, 2, 3]
// 添加元素 一律返回长度
arr.push(4);
arr.unshift(0);
// 删除元素 一律返回删除元素
arr.pop();
arr.shift();
// splice方法用于删除或者增加数组元素 
// 三个参数 第一个参数为index 第二个参数为删除的项目数 第三个参数为要添加的新项目
// arr.splice(index, deleteCount, item1)
// arr.reverse()
console.log(arr);
arr.sort((a, b) => b - a)
// console.log();
console.log(arr);
