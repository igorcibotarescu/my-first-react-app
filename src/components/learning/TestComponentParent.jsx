import { Component } from "react";
import TestComponentChild from "./TestComponentChild";

class TestComponentParent extends Component{
    constructor(){
        super();
        this.state = {
            counter:0
        }
    }

    onNotify = (a) => {
        this.setState({counter : a});
    }

    render(){
        return(
            <>
            {this.state.counter}
            <TestComponentChild onNotify={a => this.onNotify(a)}/>
            </>
        )
    }
}

export default TestComponentParent;