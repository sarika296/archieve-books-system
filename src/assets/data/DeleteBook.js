import React, { Component } from 'react'
import Header from './Header'
import '../style/style.css'

class DeleteBook extends Component {

    state = {
        BookId: "",
    }

    render() {
        return(
            <>
                <div className="container">
                    <Header />
                    <div className="card-delete">
                        <div className="card-header">
                            <h3>Delete Book</h3>
                        </div>
                <form id="form" method="post" onSubmit={this.onSubmit}>
            <br />
                    <input type="text"
                        name="BookId" required
                        id="BookId"
                        placeholder="BookId"
                        onChange={this.onChange}
                    />
                    
                <button type="submit" className="add_btn">Delete</button>
        </form>
        </div>
        </div>
    </>
        )
    }
}

export default DeleteBook;