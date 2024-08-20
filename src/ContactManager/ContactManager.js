import axios from "axios";
import React from "react";

class ContactManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contacts:[],
            isUpdated:false,
            isId:'',
            ipName:'',
            ipEmail:'',
            ipNumber:'',
            statusMsg:''
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3002/ContactDetails").then((res)=>this.setState({contacts:res.data})).catch((err)=>console.log(err))
    }
    handleChange=(e,keyword)=>{
        if(keyword==="contactname"){
            this.setState({ipName:e.target.value})
        }else if(keyword==="contactemail"){
            this.setState({ipEmail:e.target.value})
        }else{
            this.setState({ipNumber:e.target.value})
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.isUpdated){
            axios.put(`http://localhost:3002/ContactDetails/${this.state.isId}`,{
                cname: this.state.ipName,
                cno: this.state.ipNumber,
                cemail: this.state.ipEmail
            }).then((res) => {
                const temp=this.state.contacts;
                const index=temp.findIndex((item)=>item.id===res.data.id)

                temp.splice(index,1,res.data);

                this.setState({ contacts: temp })
            }).catch((err) => this.setState({ statusMsg: "some error occurred please try again" }))
            this.setState({isUpdated:!(this.state.isUpdated)})
        }
        else{
            axios.post("http://localhost:3002/ContactDetails",{
                cname: this.state.ipName,
                cemail: this.state.ipEmail,
                cno: this.state.ipNumber
            }).then((res)=>{
                const temp = [...this.state.contacts,res.data]
                this.setState({contacts:temp})
                this.setState({statusMsg:"successfully added"})
            }).catch((err)=>this.setState({statusMsg:"something went wrong try again"}))
        }
        
    }
    // handleUpdate=(e)=>{
    //     axios.patch("http://localhost:3002/ContactDetails/61c6",{
    //         cname:"Jonney"
    //     }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    // }
    handleDelete=(e,keyid)=>{
        e.preventDefault()
        axios.delete(`http://localhost:3002/ContactDetails/${keyid}`).then((res)=>{
            const temp = this.state.contacts.filter((item)=>item.id !== keyid)
            this.setState({contacts:temp})
        }).catch((err)=>console.log(err))
        
    }
    handleUpdate=(e,keyid)=>{
        this.setState({isUpdated:!(this.state.isUpdated)})
        this.setState({isId:keyid})
     }
    render(){
        return(
            <>
                <form>
                    Contact Name:<input type="text" placeholder="enter the name of the contact" onChange={(e)=>this.handleChange(e,"contactname")}></input>
                    Contact Mail:<input type="text" placeholder="Email" onChange={(e)=>this.handleChange(e,"contactemail")}></input>
                    Contact Number:<input type="text" placeholder="Phone" onChange={(e)=>this.handleChange(e,"contactnumber")}></input>
                    <button onClick={(e)=>this.handleSubmit(e)}>{(this.state.isUpdated)?"Update Contact":"Create Contact"}</button>
                    
                    
                </form>
                <p style={{color:"red"}}>{this.state.statusMsg}</p>
                {
                    this.state.contacts.map((item)=>(
                        <div key={item.id}>
                            <h2>Name: {item.cname}</h2>
                            <p>Phone: {item.cno}</p>
                            <p>Email: {item.cemail}</p>
                            <button onClick={(e)=>this.handleDelete(e,item.id)}>Delete</button>
                            <button onClick={(e)=>this.handleUpdate(e,item.id)}>update</button>
                            <br></br>
                            <hr></hr>
                        </div>
                    ))
                }
            </>
            
        )
    }
}
export default ContactManager;