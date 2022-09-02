const withSize = (Component) => {
    return class toSize extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                xPos: document.documentElement.clientWidth,
                yPos: document.documentElement.clientHeight
            };
            console.log("constructor")
        }
        getPos = () => {
            this.setState({
                xPos: document.documentElement.clientWidth,
                yPos: document.documentElement.clientHeight
            })
        }
        componentDidMount() {
            console.log("挂载");
            window.addEventListener("resize", this.getPos);
        }
        componentWillUnMount() {
            console.log("卸载");
            window.removeEventListener("resize", this.getPos);
        }
        render() {
            return <Component {...this.state} />
        }
    }
}

class Sub extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     xPos: document.documentElement.clientWidth,
    //     yPos: document.documentElement.clientHeight
    //   };
    //   console.log("constructor")
    // }
    // getPos = () => {
    //   this.setState({
    //     xPos: document.documentElement.clientWidth,
    //     yPos: document.documentElement.clientHeight
    //   })
    // }
    // componentDidMount(){
    //   console.log("挂载");
    //   window.addEventListener("resize", this.getPos);
    // }
    // componentWillUnMount(){
    //   console.log("卸载");
    //   window.removeEventListener("resize", this.getPos);
    // }
    render() {
        return (
            <div>
                <button>xPos: {this.props.xPos}, yPos: {this.props.yPos}</button>
            </div>
        );
    }
}
class Foo extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     xPos: document.documentElement.clientWidth,
    //     yPos: document.documentElement.clientHeight
    //   };
    //   console.log("constructor")
    // }
    // getPos = () => {
    //   this.setState({
    //     xPos: document.documentElement.clientWidth,
    //     yPos: document.documentElement.clientHeight
    //   })
    // }
    // componentDidMount(){
    //   console.log("挂载");
    //   window.addEventListener("resize", this.getPos);
    // }
    // componentWillUnMount(){
    //   console.log("卸载");
    //   window.removeEventListener("resize", this.getPos);
    // }
    render() {
        return (
            <div>
                <p>xPos: {this.props.xPos}, yPos: {this.props.yPos}</p>
            </div>
        );
    }
}

const FooWithSize = withSize(Foo);
const SubWithSize = withSize(Sub);
class Great extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <p>Great!!!</p>
            </div>
        )
    }
}
const Nice = (props) => {
    console.log(props)
    return (
        <div>
            <p>nice</p>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    }
    handleSomething = () => {
        // this.setState({
        //    index: this.state.index + 1
        //  }); 
        this.setState((preState, props) => {
            return { index: preState.index + 1 }
        }, () => {
            console.log(`异步 ${this.state.index}`)
        });
        console.log(`同步${this.state.index}`);
    }
    componentDidMount() {
        this.handleSomething();
        //this.handleSomething();
    }
    render() {
        return (
            <div>
                <Great  {...{ data: "great", index: 1 }} />
                <Nice {...{ data: "nice", index: 2 }} />
                <FooWithSize />
                <SubWithSize />
                <p>{this.state.index}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
