import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'
import '../style/style.css'

class AddBooks extends Component {

    state = {
        
        tag: "",
        BookId: "",
        title: "",
        author: "",
        price: "",
        picture: ""
    }

    onChange = e => {
        this.setState({ [ e.target.name ]: e.target.value })
    }

    onSubmit = e => {
        const {tag, BookId, title, author, price, picture } = this.state;
        e.preventDefault();
        if(BookId!=='')
        {
            axios.post('/add', { tag: tag, BookId: BookId, title:title, author:author,price:price,picture:picture })
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
                    <div className="card-add">
                        <div className="card-header">
                            <h3>Add Book</h3>
                        </div>
                <form id="form" method="post" onSubmit={this.onSubmit}>
                <br />
                    <input type="text"
                        name="tag" required
                        id="tag"
                        placeholder="Tag"
                        onChange ={this.onChange}
                    /><br /><br />
                    <input type="text"
                        name="BookId" required
                        id="BookId"
                        placeholder="BookId"
                        onChange ={this.onChange}
                    /><br /><br />
                    <input type="text"
                        name="title" required
                        id="title"
                        placeholder="Title"
                        onChange ={this.onChange}
                    /><br /><br />
                    <input type="text"
                        name="author" required
                        id="author"
                        placeholder="Author"
                        onChange ={this.onChange}
                    /><br /><br />
                    <input type="text"
                        name="price" required
                        id="price"
                        placeholder="Price"
                        onChange ={this.onChange}
                    /><br /><br />
                    <input type="file" id="myFile" name="filename" 
                        onChange ={this.onChange}
                    /><br /><br />
                    <button type="submit"  className="add_btn" >Add</button>
        </form>
        </div>
        </div>
    </>
        )
    }
}

export default AddBooks;