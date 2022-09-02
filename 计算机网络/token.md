# token全流程
node 进行中间件鉴权
鉴权部分使用jsonwebtoken模块用来生成token值令牌，并用bcrypt模块对密码进行哈希散列，实现加密效果。

/login userName userPwd
后台首先验证数据库中是否存在，若存在，
token组成 "Bearer" + 通过id 密钥 过期时间生成
前端收到响应，将里面的token进行提取，并存入localStorage中localStorage.setItem("token");
在后续的所有请求中，前端开启请求拦截器RequestInterceptor，将token放到Authorization字段上,随着请求头带给后端。
后端通过中间件鉴权，校验token，如果token不存在，直接返回校验失败；如果存在，jwt.verify(token, secret);
校验exp过期时间。获取当前的时间戳 Date.now() if(lastDate <= current) 说明没过期


在package.json中设置proxy
"proxy": "http://localhost:8091"

setupProxy.js
中间件: http-proxy-middleware

# csrf 跨站伪造请求
GET 所有src href都是可以跨域的 就可以嵌入请求
<img src="http://localhost:5000/transfer?to_user=hack01&money=200" alt="" />
POST请求 表单的提交操作，隐藏表单
```javascript
<form method="POST" action="http://localhost:5000/transfer" id="csrf-form>
    <input name="to_user" value="hack01"/>
    <input name="money" value="10000"/>
</form>
document.getElementById("csrf-form").submit()
```

# cookie session token
● Cookie是一个简单到爆的想法：当访问一个页面的时候，服务器在下行HTTP报文中，命令浏览器存储一个字符串；浏览器再访问同一个域的时候，将把这个字符串携带到上行HTTP请求中。

第一次访问一个服务器，不可能携带cookie。 必须是服务器得到这次请求，在下行响应报头中，携带cookie信息，此后每一次浏览器往这个服务器发出的请求，都会携带这个cookie。

特点
● cookie是不加密的，用户可以自由看到；
● 用户可以删除cookie，或者禁用它
● cookie可以被篡改
● cookie可以用于攻击
● cookie存储量很小。未来实际上要被localStorage替代，但是后者IE9兼容。
Referer: 显示跳转之前的那个网站，可以做同源
设置cookie res.cookie(key, value, options)
获取cookie 
    服务器端：借助cookie-parser，通过req.cookie 
    浏览器端：document.cookie属性获取
## 设置HttpOnly = true 禁止使用document.cookie获取
## SameSite 属性就是控制哪些跨站请求可以携带cookie。防止CSRF攻击和用户追踪（第三方恶意获取COOKIE）
（1）没有设置SameSite属性的默认SameSite=Lax。

（2）SameSite=None的cookie则必须设置为Secure，即安全链接（https）。

# session: 会话 
浏览器访问服务器 就是会话的开始
session存储于服务器的一段内存空间，session通常保存一些重要信息，一些不重要的放在cookie中
req.session.password = req.body.password;
## cookie session 一个是放浏览器端req.cookie 一个是放服务器端req.session

相对来说Session比Cookie安全一点，毕竟Session是存储在服务端，Cookie是存储在客户端。

# 解决办法
1. Referer
2. token
3. 验证码
4. 