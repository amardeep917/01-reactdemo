import React from "react";
class DashBoardComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username,role} = this.props.userdata
        return(
            <>
                <h1>Welcome {username}</h1>
                <h3>Role : {role}</h3>
                <button onClick={this.props.toggleFunc}>logout</button>
            </>
        )
    }
}
export default DashBoardComponent;