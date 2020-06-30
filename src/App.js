import React, { Component } from "react";
//import TodoApp from "./component/TodoApp/TodoApp";
//import Counter from"./component/counter";
import Forms from "./component/forms";

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome</h1>
//     </div>
//   );
// }

class App extends Component {
  // state={
  //   myString :"hello",
  //   myString1 :"hello"
  // };
  // //changing states
  // handleChange=()=>{
  //   this.setState(
  //     {
  //       myString1:"media"
  //     }
  //   );

  // }
  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.myString}</h1> */}
        {/* <button onClick={this.handleChange}>Change Text</button>
        <TodoApp  myString1={this.state.myString1}/> */}
        <h1>Events</h1>
        {/* <Counter /> */}
        <Forms />
      </div>
    );
  }
}
export default App;
