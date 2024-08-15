import axios from "axios";
import React from "react";
// import "./ImageSearchApi.css"

class ImageSearchApi extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchItem:'',
            result:[]
        }
    }
    handleInput=(e)=>{
        this.setState({searchItem:e.target.value})
    }
    handleSearch=(e)=>{
        e.preventDefault()
        axios.get(`https://api.unsplash.com/search/photos?query=${this.state.searchItem}&client_id=rsiGzYpReW3rSL3WizXUUwXH0SVJ_zDoxHtGeISimwY`).then((res)=>this.setState({result:res.data.results})).catch((err)=>console.log(err))
    }
    render(){
        
        
        return(
            <>
                <h1>Search Anything !!</h1>
                <input type="text" onChange={(e)=>this.handleInput(e)} placeholder="Enter to search"></input>
                <button onClick={(e)=>this.handleSearch(e)}>search</button>
                {
                    this.state.result.map((item)=>(
                        <div className="img-container">
                            <img src={item.urls.small}></img>
                            
                        </div>
                    ))
                }
            </>
        )
    }
}
export default ImageSearchApi;