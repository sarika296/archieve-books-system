import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowswrHistory from 'history/createBrowserHistory';
import AddBook from './assets/data/addBook'
import DeleteBook from './assets/data/deleteBook'
import UpdateBook from './assets/data/updateBook'
import SearchBook from './assets/data/searchBook'
import Login from './assets/data/Login'
import SignUp from './assets/data/SignUp'


ReactDOM.render(
    <Router history={createBrowswrHistory()}>
    <Switch>
        <Route exact={true} path='/login' component={Login} />
        <Route exact={true} path='/' component={AddBook} />
        <Route path='/delete' component={DeleteBook} />
        <Route path='/update' component={UpdateBook} />
        <Route path='/search' component={SearchBook} />
        <Route exact={true} path='/signup' component={SignUp} />
    </Switch>
</Router>,
     document.getElementById('root')
);