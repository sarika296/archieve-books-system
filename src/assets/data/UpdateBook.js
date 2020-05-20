import React, { Component } from 'react'
import Header from './Header'
import '../style/style.css'

class UpdateBook extends Component {

    state = {

        BookId: "",
        new_value: "",
        selected: ""
       
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