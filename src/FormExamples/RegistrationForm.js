import React from "react";
class RegistrationForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phone:'',
            password:'',
            nameErr:'',
            emailErr:'',
            phoneErr:'',
            passErr:''
        }
    }
    handleChange=(e,keyword)=>{
        if(keyword==="name"){
            this.setState({name:e.target.value})
        }else if(keyword==="email"){
            this.setState({email:e.target.value})
        }else if(keyword==="phone"){
            this.setState({phone:e.target.value})
        }else{
            this.setState({password:e.target.value})
        }

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.name===''){
            this.setState({nameErr:"please fill name"})
        }else if(this.state.email===''){
            this.setState({emailErr:"please fill email"})
        }else if(this.state.phone===''){
            this.setState({phoneErr:"please fill phone number"})
        }else if(this.state.password===''){
            this.setState({passErr:"please fill paassword"})
        }
    }
    render(){
        return(
            <>
                <h2 className="text-center text-2xl font-bold my-5 text-indigo-700">Registration Form</h2>
                <form className="text-center bg-stone-400  w-1/3 mx-auto">
                    Name : <input type="text" onChange={(e)=>this.handleChange(e,"name")} className="my-2 rounded p-1  text-indigo-700 outline-none"></input>
                    <p style={{color:"red"}}>{this.state.nameErr}</p>

                    Email : <input type="email" onChange={(e)=>this.handleChange(e,"email")} className="my-2 rounded p-1 text-indigo-700 outline-none"></input>
                    <p style={{color:"red"}}>{this.state.emailErr}</p>

                    Phone : <input type="text" onChange={(e)=>this.handleChange(e,"phone")} className="my-2 rounded p-1 text-indigo-700 outline-none"></input>
                    <p style={{color:"red"}}>{this.state.phoneErr}</p>

                    Password : <input type="text" onChange={(e)=>this.handleChange(e,"password")} className="my-2 rounded p-1 text-indigo-700 outline-none"></input>
                    <p style={{color:"red"}}>{this.state.passErr}</p>

                    <button onClick={(e)=>this.handleSubmit(e)} className="px-4 py-2 text-xs bg-blue-700 text-stone-100 rounded  ">submit</button>
                </form>
            </>
        )
    }
}
export default RegistrationForm;