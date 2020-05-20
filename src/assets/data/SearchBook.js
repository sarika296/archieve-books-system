import React, { Component } from 'react'
import axios from 'axios';
import '../style/style.css'

class SearchBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            selected: ""
        }
    }

    onChange = e => {
        this.setState({ [ e.target.name ]: e.target.value })
    }

    componentDidMount() {
            axios.post("search/",
            { headers: { "Content-Type": "application/json" } }
            ).then(user => {
                 this.setState({ userData: user.data });
            })
    }

    render() {
        var i=0;
        let tableData = [];
        console.log("data",this.state);
        let userData = this.state.userData;
        for(let i in userData){
            tableData.push(userData[i]);
        }
        return(
            <>
            
                <div className="container">
                    <div className="card-update">
                        <div className="card-header">
                            <h3>Search Book</h3>
                        </div>
                    <form id="form">
                    <br />
                    <select className="drop"
                         name="selected" id="selected" required  value={this.state.selected} onChange={this.onChange}>
                         while(tableData.length){
                           <option value='{tableData[i]}'>{tableData[i++]}</option>
                         }
                    </select><br /><br /><br />
                    </form>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchBook;