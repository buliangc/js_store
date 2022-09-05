# 路由模式：hash 与 history 的区别

https://www.jianshu.com/p/195463db55d3

1. hash 路由，url 上带有#号，而 history 没有
2. hash 通过监听 onHashChange 事件，来改变 url;
   history 运用了浏览器的历史记录栈，之前有 before,go,forward 方法，而在 HTML5 之后新增了 pushState 和 replaceState 方法，用于无刷新的切换页面
3. hash 路由在回车之后，不会发送 http 请求；而 history 路由会在回车之后，发送 http 请求，所以需要后端服务的支持;

因为当前页面部署是在本地，所以当页面刷新的时候，依旧访问的是本地的服务
仅切换 url 而不发送请求的特性，可以在前端渲染中使用，例如首页是服务端渲染，二级页面采用前端渲染。
当访问主页的时候，服务器会返回主页 index.html 文件，后续二级页面的访问

通过 history api，我们丢掉了#，但是它也有个问题：不怕前进，不怕后退，[就怕刷新]，f5，（如果后端没有准备的话），因为刷新是实实在在地去请求服务器的。
在 hash 模式下，前端路由修改的是#中的信息，而浏览器请求时不会将 # 后面的数据发送到后台，所以没有问题。但是在 history 下，你可以自由的修改 path，当刷新时，如果服务器中没有相应的响应或者资源，则会刷新出来 404 页面。

# HashRouter 原理：

window.onhashchange 监听，{ Provider, Consumer } = React.createContext()来传递,window.location 对象中的属性，hash，state。
该模式下：window.location.hash，页面只会加载对应的组件。

# BrowserRouter 原理：

window.history API，只有点击前进回退按钮，或者 api 触发 history.go()，history.goBack()，history.forward()可以触发 window.onpopstate 事件;该模式下使用 window.location.pathname/window.location.href()修改路径（或者原路径），页面都会重新加载渲染。
该模式下：浏览器中触发前进、后退按钮页面不会重新加载，只会加载对应的组件。
这两种模式下使用 history.go()页面都会重新加载,或者地址栏回车也会重新加载。

场景：ToB 和 ToC
