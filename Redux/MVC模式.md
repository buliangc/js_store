https://www.likecs.com/show-203547547.html 
redux 和 react-redux
对于react来说，专注于view层
react 配合 redux，MVC模式 
概况下来，React+Redux的主体流程为：

React+Redux模式，Model（模型）、View（视图）、Controller（控制器）之间的关系。 
[M-模型]
模型用来存放应用的所有数据对象。实际开发中，从接口抓取的数据、用户状态信息均会放在这里面。可通过控制器来筛选数据反馈给View层。
[V-视图]
视图层是呈现给用户的，用户与之产生交互。在JavaScript应用中，视图大都是HTML、CSS、JavaScript模板组成的。除了模板中简单的条件语句之外，视图不应当包含任何其他逻辑。
[C-控制器]
控制器是模型和视图之间的纽带。控制器从视图获取事件和输入，对它们（很可能包含模型）进行处理，并相应地更新视图。当页面加载时，控制器会给视图添加事件监听，比如监听表单提交或按钮点击。然后，当用户和你的应用产生交互时，控制器中的事件触发器就开始工作了。

React+Redux中的MVC
- react作为视图展示使用
- redux注册一个model（放数据的容器）react只做View层展示，Component通过 redux 的connect链接代码仓库取数据，在Component内部从props取数据展示。
- 用redux之后，Component 中的state，一般只做View控制状态的状态码的储存。


通过action获得model，并将其作为state存储到Store中；
传递给React Component，按照某种设计呈现model数据；
调用action发起update请求，从而调用reducer生成新的state存储到Store中；
redux通知React Component重新Render。