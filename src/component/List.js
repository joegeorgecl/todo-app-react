import React, { Component } from 'react'

 class List extends Component {
    state={
        data:[
            {
        id:1,
        name:"jobin",
        age:10

        },
        {
            id:2,
            name:"arun",
            age:15
    
            }]
    };
    render() {
        return (
            <div>
                <ul>{this.state.data.map((value,index)=>(
                //     return <li>
                //         {value.id}-{value.name}-{value.age}</li>;
                // })}</ul>

                <li key={value.id}>
                      {value.id}-{value.name}-{value.age}</li>
                ))}
                </ul>
                
            </div>
        )
    }
}
export default List;