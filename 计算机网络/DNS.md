# DNS 域名解析协议
解析过程： (.)根域名服务器 (com)顶级域名服务器 (baidu)二级域名服务器 (三级域名服务器)www
http://www.baidu.com.

1. 首先查询浏览器端的DNS缓存
2. 继续搜索操作系统的DNS缓存
3. 操作系统将域名发送给自己电脑设置的DNS地址，本地域名服务器去解析
4. 本地域名服务器会继续向上级域名服务器进行迭代查询 根域名服务器 顶级域名服务器 二级域名服务器 三级域名服务器
5. 本地域名服务器将拿到的IP地址发送给操作系统
6. 操作系统将IP地址返回给浏览器，同时将IP地址存起来
7. 浏览器得到了对应域名的IP地址，进行访问，并存储

如何预防DNS劫持