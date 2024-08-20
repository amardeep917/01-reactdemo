import React from "react";
import { Outlet } from "react-router-dom";
class UserPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <h1>XYZ Company</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet dolor in dolor vulputate vestibulum. Maecenas eleifend erat non felis maximus, quis gravida nunc volutpat. Integer sapien velit, ultrices sit amet tempor et, egestas in nunc. Maecenas venenatis ligula ut sapien euismod congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <Outlet></Outlet>
            </>
        )
    }
}
export default UserPage