import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
        
    }
    increase=()=>{
        this.setState({count: this.state.count + 1})
    }
    decrease=()=>{
        if(this.state.count !== 0){
            this.setState({count: this.state.count - 1})
        }else{
            alert("you have reached to 0")
        }
        
    }
    render(){
        // console.log("render");
        return(
            <>
                <h1>Count = {this.state.count}</h1>
                <button onClick={this.increase}>click to increase</button>
                <button onClick={this.decrease}>click to Decrease</button>
            </>
        )
    }
}
export default Counter;


