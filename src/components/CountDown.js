import React from "react";
class CountDown extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 5
        }
    }
    componentDidMount(){
         setInterval(()=>{ 
            if(this.state.count > 0){
                this.setState({count:this.state.count-1})
            }
        },1000)
    }
    // componentDidUpdate(prevProps,prevState,snapshot){
    //     if(prevState.count !== this.state.count ){
    //         clearInterval(this.timer)
    //     }
    // }
    render(){
        let {count}= this.state
        return(
            <>
                <h1>CountDown Timer using React</h1>
                <h2>ContDown : {count}</h2>
            </>
        )
    }
}
export default CountDown;