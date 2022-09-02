// 与集合类似，字典也是一种存储唯一值的数据结构，但它是以键值对的形式进行保存的
const m = new Map();

// 增 键值对 键a 值aa
m.set('a', 'aa');
m.set('b', 'bb');

// 删
m.delete('b');

// 删除所有的键
// m.clear()

// 改
m.set('a', 'aaa')

// 查
m.get('a')