// 集合一定是无序且唯一的数据结构
// ES6中有集合，名为Set
// 集合的常用操作：去重，判断某元素是否在集合中，求交集，求差集
// // 去重
// const arr = [1, 1, 2, 2, 3, 3];
// const arr2 = [...new Set(arr)];

// // 判断元素是否在集合中
// const set = new Set(arr);   // 类型是一个集合Set
// const type = Object.prototype.toString.call(set);
// const has = set.has(3)

// // 求交集
// const set2 = new Set([2, 3]);
// const set3 = new Set([...set].filter(items => set2.has(items)))

// 首先创建set 
const set = new Set([1, 2, 2, 3]);
for (let item of set) console.log(item);
let o = { a: 1, b: 2 }
set.add(o);
set.add({ a: 1, b: 2 })
set.delete(o)
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(3);
for (let [key, value] of set.entries()) console.log(key, value);
const set1 = new Set([1, 2, 3, 4]);
// 求交集
const interSection = new Set([...set].filter(item => set1.has(item)))
console.log(interSection);
// 求差集
const difference = new Set([...set].filter(item => !set1.has(item)));
console.log(difference);
