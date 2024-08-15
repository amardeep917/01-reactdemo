import axios from "axios";
import React from "react";

class BlogApp extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get("https://hn.algolia.com/api/v1/search?query=react&client_id=rsiGzYpReW3rSL3WizXUUwXH0SVJ_zDoxHtGeISimwY").then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    render(){
        return(
            <>
                <h1>Blog App</h1>
            </>
        )
    }
}
export default BlogApp;