import axios from "axios";
import { result } from "lodash";
import React from "react";

class ApiCallWithBtn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[]
        }
    }
    handleAPICalls=()=>{
        // fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({results:res})).catch((err)=>console.log(err))
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    }
    render(){
        
        
        return(
            <>
                <h1>API Calls</h1>
                <button onClick={this.handleAPICalls}>call API</button>
                {
                    this.state.results.map((item)=>(
                        <>
                            <h2>{item.name}</h2>
                            <p>{item.username}</p>
                        </>
                    ))
                }
            </>
        )
    }
}
export default ApiCallWithBtn;