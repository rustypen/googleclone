import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './home';
import Search from './search';
import Login from './login';
import ProtectedRoute from '../components/utils/protectedRoute';


function main() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/login" component={Login} />
        <ProtectedRoute forLoggedIn="true" path="/search" component={Search} />
        <ProtectedRoute forLoggedIn="true" exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default main