import React from "react";
class DashBoard extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const {fname,email,phone} = this.props.userData
        return(
            <>
                <h1>Welcome  {fname}</h1>
                <h3>Name : {fname}</h3>
                <h3>Email Address : {email}</h3>
                <h3>Phone : {phone}</h3>
                <button onClick={this.props.toggleFunc}>logout</button>
            </>
        )
    }
}
export default DashBoard;