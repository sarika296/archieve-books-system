import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'
import '../style/style.css'

class UpdateBook extends Component {

    state = {

        BookId: "",
        new_value: "",
        selected: ""
       
    }

    onChange = e => {
        this.setState({ [ e.target.name ]: e.target.value })
    }

    onSubmit = e => {
        const { BookId, new_value, selected } = this.state;
        e.preventDefault();
        axios.post('/update', { BookId: BookId, new_value: new_value, selected: selected })
                .then(res => {
                    console.log(res.status);
                })
                .catch(err => console.log('error',err));  
    }

    render() {
        console.log("result",this.state);
        return(
            <>
                <div className="container">
                    <Header />
                    <div className="card-update">
                        <div className="card-header">
                            <h3>Update Book</h3>
                        </div>
                <form id="form" method="post" onSubmit={this.onSubmit}>
                <br />
                    <input type="text"
                        name="BookId" required
                        id="BookId"
                        placeholder="BookId"
                        onChange={this.onChange}
                    /><br /><br /><br />
                <select className="drop" value={this.state.selected}  onChange={this.onChange}
                    name="selected" id="selected" required>
                    <option value="author">Author</option>
                    <option value="price">Price</option>
                </select><br /><br /><br />
                     <input type="text"
                        name="new_value" required
                        id="new_value"
                        placeholder="New value"
                        onChange={this.onChange}
                    /><br /><br /><br />
                    <button type="submit"  className="add_btn">Update</button>
        </form>
        </div>
        </div>
    </>
        )
    }
}

export default UpdateBook;