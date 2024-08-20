
import React from "react";
import response from './data'
import NavBarComponent from "./NavBarComponent";
import TableComponent from "./TableComponent";
import './LeaderBoard.css'
class SortRank extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        const sortedData = [...response.list].sort((a,b)=>a.rank-b.rank)
        this.setState({data:sortedData})
    }
    render(){
        return(
            <>
                <NavBarComponent keyword={1}></NavBarComponent>
                <h2>Sorted based on rank</h2>
                {/* <table>
                    <thead>
                        <tr>
                            <th >Rank</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.rank}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.points}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> */}
                <TableComponent data={this.state.data}></TableComponent>
            </>
        )
    }
}
export default SortRank
