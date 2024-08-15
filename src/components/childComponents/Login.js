import React from "react";
class Login extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <>
                <h1>Please Login</h1>
                <button onClick={this.props.toggleFunc}>login</button>
            </>
        )
    }
}
export default Login;