# 常用的一些方法

fs 模块主要用于对于系统文件的操作。
同步方法和异步方法：创建 写入 删除

// 对于文件的操作
readFile writeFile appendFile

// 对于目录的操作
mkdir readdir exists(检查目录是否存在) rename(移动文件/目录)

使用 readFile 的时候，Nodejs 先将完整的文件内容写入缓冲区，再从该缓冲区中读取文件内容
使用 writeFile 的时候，Nodejs 先将完整的内容读入缓冲区，然后再一次性将缓冲区中的内容写入文件内容
