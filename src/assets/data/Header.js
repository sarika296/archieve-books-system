import React from 'react'
import {Link } from 'react-router-dom';

const Header = props => {

    const style = {
        display:'inline-block',
        margin:10,
        marginBottom:30
    };

    return(
            <div>
                <div>
                    <h3 style={style}><Link to="/">Add</Link></h3>
                    <h3 style={style}><Link to="/delete">Delete</Link></h3>
                    <h3 style={style}><Link to="/update">Update</Link></h3>
                    <h3 style={style}><Link to="/search">Search</Link></h3>
                </div>
            </div>
    )
}

export default Header;