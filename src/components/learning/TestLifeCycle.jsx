import { Component } from "react";

class Lifecycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    intervalID;

    componentDidMount(){
        console.log('Mount');
        this.intervalID = setInterval(() => {
            this.setState({counter: this.state.counter + 1});
            console.log('Incrementing...');
        },1000);
    }
    componentDidUpdate(){
        console.log('Update');
    }
    componentWillUnmount(){
        console.log('Unmount');
        console.log(this.intervalID);
        clearInterval(this.intervalID);
    }

    render(){
        console.log('RENDER');
        return <div>{this.state.counter}</div>;
    }
}

export default Lifecycle;