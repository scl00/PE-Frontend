import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

import { Login } from '../components/login/Login';
import { Signin } from '../components/signin/Signin';
import { Home } from '../components/home/Home';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component= { Login } />
          <Route exact path="/signin" component= { Signin } />
          <Route exact path="/" component= { Home } />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
