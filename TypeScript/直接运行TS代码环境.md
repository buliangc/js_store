# 在VSCode中编写的TypeScript代码不能直接运行，需要先用tsc编译为JavaScript，然后才能运行。


# 全局安装ts-node模块
npm install -g ts-node


# interface

# npx create-react-app my-app --template typescript
https://create-react-app.dev/docs/adding-typescript/ 

# any 和 unknown 
any 类型：就可以将所有的值赋值给any类型的变量，并对该变量执行任何操作；

unknown 类型：可以将所有的值赋值给unknown类型的变量，但你必须进行[类型检查]或者[类型断言]才能对变量进行操作
