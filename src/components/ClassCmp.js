import React from "react";
class ClassCmp extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            fname:"peter"
        }
    }
    changeName=()=>{
        // this.fname="john"
        console.log("change data is called");
        this.setState({fname:"john"})
    }
    render(){
        return(
            <>
                <h2>Using class component</h2>
                <h3>Name: {this.state.fname} </h3>
                <button onClick={this.changeName}>change</button>
            </>
        )
    }
}
export default ClassCmp;