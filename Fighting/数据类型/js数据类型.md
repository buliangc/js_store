# 基本数据类型
String Boolean Undefined Number Null Symbol

# 引用数据类型
Array Function Object 

# 区别：
基本数据类型：在存储变量的时候，存储的是值本身 (在栈中进行存储)
引用数据类型：在存储变量的时候，存储的是地址    (栈中存储堆的地址，堆中存储变量值)

栈 和 堆
# let、const与栈、堆之间的关系，栈、堆哪个访问速度更快，为什么？
1. var会预先在栈内存里跟配空间，（因为变量提升的原因）等实际语句执行的时候再存储对应的值，如果传入的是引用类型，会在堆内存中开辟一个内存空间存储实际内容，栈内存中存储的是一个指向堆内存的指针
2. let和const都不会预先分配内存空间在栈中，并且在分配变量的时候会检查是否有重名的情况，有则报错。


# 栈是编译时分配空间，而堆是运行时分配空间（动态分配），所以栈的速度快
