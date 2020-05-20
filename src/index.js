import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowswrHistory from 'history/createBrowserHistory';
import AddBook from '../src/components/AddBook'
import DeleteBook from './assets/data/DeleteBook'
import UpdateBook from './assets/data/UpdateBook'
import SearchBook from './assets/data/SearchBook'


ReactDOM.render(
    <Router history={createBrowswrHistory()}>
    <Switch>
        <Route exact={true} path='/' component={AddBook} />
        <Route path='/delete' component={DeleteBook} />
        <Route path='/update' component={UpdateBook} />
        <Route path='/search' component={SearchBook} />
    </Switch>
</Router>,
     document.getElementById('root')
);