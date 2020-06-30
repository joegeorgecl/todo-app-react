import React, { Component } from 'react'

 class Forms extends Component {
     state={
        //  inputValue:""
        firsName:"",
        lastName:"",
     };
     onHandleChange=(event)=>{
        //  console.log(event.target.value);
         this.setState({
            //  inputValue:event.target.value
        //     firsName:event.target.value,
        //  lastName:event.target.value,
            [event.target.name]:event.target.value
          
         });
     };
    //  onSubmit=(event)=>{
        onSubmit=()=>{
         //event.preventDefault();
        //  console.log(this.state.inputValue)
        console.log(this.state)
     };
    render() {
        return (
            <form>
                <h2>Form Component</h2>
                {/* <input type="text" value={this.state.inputValue} onChange={this.onHandleChange}/> */}
                  <input type="text" name="firstName" value={this.state.firstName} onChange={this.onHandleChange} />
                  <input type="text" name="lastName" value={this.state.lastName} onChange={this.onHandleChange} />
                <button type="button" onClick={this.onSubmit}>Submit</button>
            </form>
            
        )
    }
}

export default Forms;