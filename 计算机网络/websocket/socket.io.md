# socket.io
首先socket.io与websocket不同，socket.io建立在websocket之上。相比于websocket，它的功能更完善，并自带功能回退和保活机制。
心跳检测和重连机制
# 心跳检测
是为了保证客户端和服务端之间始终处于连接状态，都还活着。如果在指定的时间内，客户端没有收到服务端返回的消息，就判定为断开，调用websocket.close来关闭连接。

这个关闭连接可以通过onClose事件来监听到，再利用内部的reconnect进行重连。
