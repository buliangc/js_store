TCP UDP区别
1. TCP 面向连接require("socket.io") UDP 面向非连接 dgram dgram.createSoocket("udp4")
```javascript
// 与web端建立http socket连接
var http = require("http").Server(express());
var io = require("socket.io")(http);
io.on("connection", () => {
    socket.on("", () => {

    })
})
// 与下位机建立udp来连接
var udpServer = dgram.createSoocket("udp4")
udpServer.bind(2016)
udpServer.on("", () => {
    8
})

```
2.     可靠传输     不可靠传输（丢包）
3.  传输少量数据    传输大量数据