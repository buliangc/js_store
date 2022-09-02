# valueOf 和 toString 几乎都是在出现操作符(+-*/==><)时被调用（隐式转换）。

toString()会把数据类型转换成string类型
valueOf()会把数据类型转换成原始类型

# 需要注意的是，这两个方法在不同使用场景会有不同的优先级：

正常情况下，优先调用toString()

有运算操作符的情况下valueOf()的优先级高于toString()

当调用valueOf()方法无法运算后还是会再调用toString()方法