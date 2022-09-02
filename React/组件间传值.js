class Child extends React.Component {
    constructor(props) {
        super(props);
        this.inputValue = "";
        console.log("子constructor");
    }
    componentDidMount() {
        console.log("子DidMount")
    }
    handleInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    handleSubmit = () => {
        this.props.getValue(this.state.inputValue);
    }
    render() {
        console.log("子render")
        return (
            <div>
                <p>子组件1</p>
                <input onChange={this.handleInput} />
                <button onClick={this.handleSubmit}>susbmit</button>
            </div>
        )
    }
}
const Child1 = (props) => {
    return (
        <div>
            <p>子组件2 展示{props.msg}</p>
        </div>
    )
}
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ""
        }
        console.log("父constructor");
    }
    handleChange = (msg) => {
        this.setState({
            msg
        })
    }
    componentDidMount() {
        console.log("父DidMount")
    }
    render() {
        console.log("父render")
        return (
            <div>
                <p>父组件 展示{this.state.msg}</p>
                <Child getValue={this.handleChange} />
                <Child1 {...this.state} />
            </div>
        )
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Parent />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))