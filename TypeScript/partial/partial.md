# Pritial 高级类型
经常会看见 Partial<T> 这样的用法
Partial<T> 可以快速把某个接口类型中定义的属性变成可选的(Optional)：

interface People {
  age: number;
  name: string;
}

const Jerry:People = {
    age: 10,
    name: 'Jerry'
};

const Tom: People = {
    name: 'Tom'
}
