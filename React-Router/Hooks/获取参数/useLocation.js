// Link标签携带state  向路由链接传递search参数 
<Link to={`/home/messages/detail`} state={{ id: messageObj.id, title: messageObj.title }}>{messageObj.title}</Link>

// 接受state参数  通过useLocation获取路由携带的state参数
const Stateparams = useLocation()
const {id,title} = Stateparams.state