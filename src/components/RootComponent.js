import React from "react";
import DashBoard from "./childComponents/DashBoard";
import Login from "./childComponents/Login";
class RootComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogged:false,
            user:{
                fname:"Amardeep",
                email:"amardeep@gmail.com",
                phone: 6203292077
            }
        }
    }
    // login=()=>{
    //     this.setState({isLogged:true})
    // }
    // logout=()=>{
    //     this.setState({isLogged:false})
    // }
    toggleUser=()=>{
        this.setState({isLogged: !(this.state.isLogged)})
    }
    render(){
        return(
            <>
                {
                    this.state.isLogged?
                    <>
                        {/* <h1>Welcome User</h1>
                        <button onClick={this.toggleUser}>logout</button> */}
                        <DashBoard userData={this.state.user} toggleFunc={this.toggleUser}/>
                    </>:<>
                        {/* <h1>Please Login</h1>
                        <button onClick={this.toggleUser}>login</button> */}
                        <Login toggleFunc={this.toggleUser}/>
                    </>
                }
            </>
        )
    }
}
export default RootComponent;