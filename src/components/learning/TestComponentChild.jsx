import { Component } from "react";

class TestComponentChild extends Component{
    render(){
        const a = Math.floor(Math.random() * 100);
        return <button onClick={() => this.props.onNotify(a)}>onNotify</button>
    }
}

export default TestComponentChild;