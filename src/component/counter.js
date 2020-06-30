import React,{Component} from "react";

class Counter extends Component {
  //normal method  // firstClick(){
    //     console.log("running");
    // }

    // constructor(props){
    //normal binding//     super(props);

    //     this.firstClick=this.firstClick.bind(this);
    // }
    state={
        counter:0
    };
    onIncrement=()=>{
        this.setState({
            counter:this.state.counter +1
        });
    };

    onDecrement=()=>{
        this.setState({
            counter:this.state.counter -1
        });
    };
    render(){
        return (
        <div><h2>Counter component</h2>
        <h4>{this.state.counter}</h4>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
        </div>
        );

    }
}
export default Counter;