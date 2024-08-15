import React from "react";
class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("from Completed Component");
        return(
            <>
                <h1>Completed Task</h1>
                {
                    this.props.prop1.map((item)=>(
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <button onClick={()=>this.props.prop2(item.id)}>undo</button>
                            <button onClick={()=>this.props.prop3(item.id)}>delete</button>
                        </div>
                    ))
                }
            </>
        )
    }
}
export default CompletedComponent;