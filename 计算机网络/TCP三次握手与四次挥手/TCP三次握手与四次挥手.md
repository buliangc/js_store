# TCP三次握手
TCP是面向连接的，稳定可靠的传输层协议。
SYN: 表示想要建立连接
ACK: 表示确认
客户端发送SYN = 1的报文给服务端，服务端接收到后返回SYN = 1, ACK = 1的报文，客户端在发送ACK = 1的报文。

# TCP四次挥手
FIN: 表示想要断开连接
ACK: 表示确认
客户端发送FIN = 1的报文给服务端，服务端接收到后返回ACK = 1的报文，但暂不断开。等待数据传输完毕，服务端发送FIN = 1, ACK = 1;的报文给客户端，客户端发送ACK = 1的报文。

# 为什么需要三次握手，而不是两次握手和四次握手
如果两次握手的话，
当网络环境特别差的时候，客户端想要建立连接请求，发送了SYN = 1的报文给服务端，但是由于网络特别差，导致第一次发送的请求迟迟未能到达服务端，启动ARQ超时重传机制，重新发送报文给服务端。然后服务端返回了ACK = 1的报文，表示确认建立连接。丢失的那个报文发送到了服务端，服务端以为要建立连接。然后一直等待数据发送，浪费资源。