<div id="div1" class="container">
    <p>vdom</p>
    <ul style="font-size: 20px">
        <li>a</li>
    </ul>
</div>

// js模拟虚拟DOM
// react 虚拟DOM
{
    type: "div";
    props: {
        id: "div1";
        className: "container";
        children: [
            {
                type: "p",
                props: {
                    children: "vdom"
                }
            },
            {
                type: "ul",
                props: {
                    id: "",
                    className: "",
                    children: []
                }
            }
        ]
    }
}