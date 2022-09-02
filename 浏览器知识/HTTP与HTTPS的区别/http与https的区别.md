# HTTP 与 HTTPS的区别
[定义]
HTTP：超文本传输协议，是一个基于TCP的应用层协议
HTTPS：基于套接字的超文本传输协议
https = SSL/TLS + HTTP
HTTPS是HTTP的安全版本，HTTP协议的数据传输是明文的，不安全，HTTPS使用SSL/TLS对数据进行了加密处理，相对来说更安全。

[端口]
HTTP使用80端口，HTTPS使用443端口

[传输速度]
HTTP只需要TCP 3次握手，而HTTPS除了TCP三次握手之外，还包含着SSL握手的9个包，总共12次握手。

[证书]
HTTPS需要用到CA证书

