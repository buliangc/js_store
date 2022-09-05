React-Router 提供了 Link 和 NavLink 组件，允许您导航到应用程序中定义的不同路由。可以将这些导航组件视为页面上的锚点链接，允许您导航到站点中的其他页面。在传统网站中，当您使用锚点链接在应用程序中导航时，会导致页面刷新，并且页面中的所有组件都会重新呈现。使用 Link 和 NavLink 创建的导航链接不会导致页面刷新;只有使用路由定义且与 URL 路径匹配的页面的某些部分才会更新。
https://www.jianshu.com/p/9f2d2e58aa8c

# Link

<Link> 组件用于导航到使用 <Route> 组件定义的 <indexentry content="component:about"> 现有路由。要导航到路由，请将路由中使用的路径名指定为 to 属性的值：

<Link to={{
  pathname: '/my',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}/>

# NavLink

<NavLink>是<Link>的一个特定版本，会在匹配上当前的 url 的时候给已经渲染的元素添加参数，组件的属性有：

activeClassName(string)：设置选中样式，默认值为 active
activeStyle(object)：当元素被选中时，为此元素添加样式
exact(bool)：为 true 时，只有当导致和完全匹配 class 和 style 才会应用
strict(bool)：为 true 时，在确定为位置是否与当前 URL 匹配时，将考虑位置 pathname 后的斜线
isActive(func)判断链接是否激活的额外逻辑的功能

```javascript
// activeClassName选中时样式为selected
<NavLink
  to="/faq"
  activeClassName="selected"
>FAQs</NavLink>

// 选中时样式为activeStyle的样式设置
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }}
>FAQs</NavLink>

// 当event id为奇数的时候，激活链接
const oddEvent = (match, location) => {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) && eventID % 2 === 1
}

<NavLink
  to="/events/123"
  isActive={oddEvent}
>Event 123</NavLink>
```
