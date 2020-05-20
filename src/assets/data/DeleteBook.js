import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'
import '../style/style.css'

class DeleteBook extends Component {

    state = {
        BookId: "",
    }

    onChange = e => {
        this.setState({ [ e.target.name ]: e.target.value })
    }

    onSubmit = e => {
        const {BookId } = this.state;
        e.preventDefault();
        if(BookId!=='')
        {
            axios.post('/delete', { BookId: BookId})
                  .then(res => {
                      console.log(res.status);
                    })
                  .catch(err => console.log('error',err));  
        }
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